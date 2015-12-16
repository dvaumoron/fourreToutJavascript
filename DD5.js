$(document).ready(function() {
	var classes = {
		barbarian: {
			hitDice: 12,
			savingThrowProf: ['str','con']
		},
		bard: {
			hitDice: 8,
			savingThrowProf: ['dex','cha']
		},
		cleric: {
			hitDice: 8,
			savingThrowProf: ['wis','cha']
		},
		druid: {
			hitDice: 8,
			savingThrowProf: ['int','wis']
		},
		fighter: {
			hitDice: 10,
			savingThrowProf: ['str','con']
		},
		monk: {
			hitDice: 8,
			savingThrowProf: ['str','dex']
		},
		paladin: {
			hitDice: 10,
			savingThrowProf: ['wis','cha']
		},
		ranger: {
			hitDice: 10,
			savingThrowProf: ['str','dex']
		},
		rogue: {
			hitDice: 8,
			savingThrowProf: ['dex','int']
		},
		sorcerer: {
			hitDice: 6,
			savingThrowProf: ['con','cha']
		},
		warlock: {
			hitDice: 8,
			savingThrowProf: ['wis','cha']
		},
		wizard: {
			hitDice: 6,
			savingThrowProf: ['int','wis']
		}
	};

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	function spaceCamel(string) {
		return string.replace(/([A-Z])/g, ' $1')
	}

	$.each(classes, function(classe, value) {
		$('#class').append('<option value="' + classe + '">' + capitalizeFirstLetter(classe) + '</option>')
	});

	var abilityList = ['str','dex','con','int','wis','cha'];

	$.each(abilityList, function(index, ability) {
		$('#abilityTable').append('<tr><td>' + capitalizeFirstLetter(ability) + ' : </td><td><input type="number" id="' + ability + '" /></td><td><span id="' + ability + 'Mod"></span></td><td><span id="' + ability +'ST"></span></td></tr>');
	});

	var skillByAbility = {
		str:['athletics'],
		dex:['acrobatics', 'sleightOfHand', 'stealth'],
		con:[],
		int:['arcana', 'history', 'investigation', 'nature', 'religion'],
		wis:['animalHandling', 'insight', 'medecine', 'perception', 'survival'],
		cha:['deception', 'intimidation', 'performance', 'persuasion']
	}

	var skillList = [];
	var abilityBySkill = {}
	$.each(abilityList, function(index, ability) {
		$.each(skillByAbility[ability], function(index2, skill) {
			skillList.push(skill);
			abilityBySkill[skill] = ability;
		});
	});

	skillList.sort();
	$.each(skillList, function(index, skill) {
		$('#skillTable').append('<tr><td><input type="checkbox" id="' + skill + 'Trained" /></td><td><span id="' + skill + 'Mod"></span></td><td>' + capitalizeFirstLetter(spaceCamel(skill)) + '(' + capitalizeFirstLetter(abilityBySkill[skill]) + ')</td></tr>');
	});

	function calculateMod(value, warn) {
		var score = parseInt(value);
		if (warn && (score < 1 || score > 20)) {
			alert('score should be between 1 and 20');
		}
		return Math.floor((score - 10) / 2);
	}

	function calculateProf(value, warn) {
		var level = parseInt(value);
		if (warn && (level < 1 || level > 20)) {
			alert('level should be between 1 and 20');
		} 
		return 1 + Math.ceil(level / 4);
	}

	function updateHPMax() {
		var level = parseInt($("#level").val());
		var classHitDice = classes[$('#class').val()].hitDice;
		var conMod = calculateMod($('#con').val(), false);
		$('#hitPointMax').text(classHitDice + level * conMod + (level - 1) * (classHitDice / 2 + 1));
	}

	function updateST() {
		var prof = calculateProf($("#level").val(), false);
		var stProf = classes[$('#class').val()].savingThrowProf;
		$.each(abilityList, function(index, ability) {
			var mod = calculateMod($('#' + ability).val(), false);
			if ($.inArray(ability, stProf) != -1) {
				$('#' + ability + 'ST').text(toModString(mod + prof));
			} else {
				$('#' + ability + 'ST').text(toModString(mod));
			}
		});
	}

	function updateSkill() {
		var prof = calculateProf($("#level").val(), false);
		$.each(abilityList, function(index, ability) {
			var mod = calculateMod($('#' + ability).val(), false);
			$.each(skillByAbility[ability], function(index2, skill) {
				if ($('#' + skill + "Trained").prop('checked')) {
					$('#' + skill + "Mod").text(toModString(mod + prof))
				} else {
					$('#' + skill + "Mod").text(toModString(mod))
				}
			});
		});
	}

	function toModString(mod) {
		var modStr = '';
		if (mod >= 0) {
			modStr += '+';
		}
		modStr += mod.toString();
		return modStr;
	}

	$('#con').change(updateHPMax);

	$.each(abilityList, function(index, ability) {
		var el = $('#' + ability);
		el.change(function () {
			var prof = calculateProf($("#level").val(), false);
			var stProf = classes[$('#class').val()].savingThrowProf;
			var mod = calculateMod(el.val(), true);
			$('#' + ability + 'Mod').text(toModString(mod));
			if ($.inArray(ability, stProf) != -1) {
				$('#' + ability + 'ST').text(toModString(mod + prof));
			} else {
				$('#' + ability + 'ST').text(toModString(mod));
			}
			$.each(skillByAbility[ability], function(index2, skill) {
				if ($('#' + skill + "Trained").prop('checked')) {
					$('#' + skill + "Mod").text(toModString(mod + prof))
				} else {
					$('#' + skill + "Mod").text(toModString(mod))
				}
			});
		});
		el.change();

		$.each(skillByAbility[ability], function(index2, skill) {
			var el2 = $('#' + skill + "Trained");
			el2.change(function () {
				var prof = calculateProf($("#level").val(), false);
				var mod = calculateMod(el.val(), false);
				if (el2.prop('checked')) {
					$('#' + skill + "Mod").text(toModString(mod + prof))
				} else {
					$('#' + skill + "Mod").text(toModString(mod))
				}
			});
		});
	});

	var levelInput = $("#level");
	levelInput.change(function() {
		var level = levelInput.val();
		$('#profMod').text(toModString(calculateProf(level, true)));
		$('#numberHitDice').text(level);
	});
	levelInput.change();
	levelInput.change(updateHPMax);
	levelInput.change(updateST);
	levelInput.change(updateSkill);

	var classSelect = $('#class');
	classSelect.change(function() {
		$('#hitDice').text(classes[classSelect.val()].hitDice);
	});
	classSelect.change();
	classSelect.change(updateHPMax);
	classSelect.change(updateST);

	$('#save').click(function() {
		var save = {};
		save['class'] = classSelect.val();
		save['level'] = levelInput.val();
		$.each(abilityList, function(index, ability) {
			save[ability] = $('#' + ability).val();
		});
		$.each(skillList, function(index, skill) {
			save[skill] = $('#' + skill + 'Trained').prop('checked');
		});
		var name = $('#name').val();
		localStorage.setItem(name, JSON.stringify(save));
		alert(name + ' saved');
	});
	$('#load').click(function() {
		var save = JSON.parse(localStorage.getItem($('#name').val()));
		classSelect.val(save['class']);
		classSelect.change();
		levelInput.val(save['level']);
		levelInput.change();
		$.each(abilityList, function(index, ability) {
			var el = $('#' + ability);
			el.val(save[ability]);
			el.change();
		});
		$.each(skillList, function(index, skill) {
			var el = $('#' + skill + 'Trained');
			el.prop('checked', save[skill]);
			el.change();
		});
	});
	$('#remove').click(function() {
		var name = $('#name').val();
		localStorage.removeItem(name);
		alert(name + ' removed');
	});
});