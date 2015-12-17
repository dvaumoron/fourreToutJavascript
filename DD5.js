$(document).ready(function() {
	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	function spaceCamel(string) {
		return string.replace(/([A-Z])/g, ' $1')
	}

	var abilityList = ['str','dex','con','int','wis','cha'];

	$.each(abilityList, function(index, ability) {
		$('#abilityTable').append('<tr><td>' + capitalizeFirstLetter(ability) + '<span id="' + ability + 'Bonus"><span/> : </td><td><input type="number" id="' + ability + '" /></td><td><span id="' + ability + 'Mod"></span></td><td><span id="' + ability +'ST"></span></td></tr>');
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

	var races = {
		hillDwarf:{
			ability: [0, 0, 2, 0, 1, 0],
			speed: 25,
			hitPoint: 1,
			skillNumber: 0,
			skills: []
		},
		mountainDwarf: {
			ability: [2, 0, 2, 0, 0, 0],
			speed: 25,
			hitPoint: 0,
			skillNumber: 0,
			skills: []
		},
		highElf: {
			ability: [0, 2, 0, 1, 0, 0],
			speed: 30,
			hitPoint: 0,
			skillNumber: 1,
			skills: ['perception']
		},
		woodElf: {
			ability: [0, 2, 0, 0, 1, 0],
			speed: 35,
			hitPoint: 0,
			skillNumber: 1,
			skills: ['perception']
		},
		drow: {
			ability: [0, 2, 0, 0, 0, 1],
			speed: 30,
			hitPoint: 0,
			skillNumber: 1,
			skills: ['perception']
		},
		lightfootHalfling: {
			ability: [0, 2, 0, 0, 0, 1],
			speed: 25,
			hitPoint: 0,
			skillNumber: 0,
			skills: []
		},
		stoutHalfling: {
			ability: [0, 2, 1, 0, 0, 0],
			speed: 25,
			hitPoint: 0,
			skillNumber: 0,
			skills: []
		},
		human: {
			ability: [1, 1, 1, 1, 1, 1],
			speed: 30,
			hitPoint: 0,
			skillNumber: 0,
			skills: []
		},
		dragonborn: {
			ability: [2, 0, 0, 0, 0, 1],
			speed: 30,
			hitPoint: 0,
			skillNumber: 0,
			skills: []
		},
		forestGnome: {
			ability: [0, 1, 0, 2, 0, 0],
			speed: 25,
			hitPoint: 0,
			skillNumber: 0,
			skills: []
		},
		rockGnome: {
			ability: [0, 0, 1, 2, 0, 0],
			speed: 25,
			hitPoint: 0,
			skillNumber: 0,
			skills: []
		},
		halfElf: {
			ability: [0, 0, 0, 0, 0, 2],
			speed: 30,
			hitPoint: 0,
			skillNumber: 2,
			skills: []
		},
		halfOrc: {
			ability: [2, 0, 1, 0, 0, 0],
			speed: 30,
			hitPoint: 0,
			skillNumber: 1,
			skills: ['intimidation']
		},
		tiefling: {
			ability: [0, 0, 0, 1, 0, 2],
			speed: 30,
			hitPoint: 0,
			skillNumber: 1,
			skills: ['intimidation']
		}
	};

	$.each(races, function(race, value) {
		$('#race').append('<option value="' + race + '">' + capitalizeFirstLetter(spaceCamel(race)) + '</option>');
	});

	var classes = {
		barbarian: {
			hitDice: 12,
			savingThrowProf: ['str','con'],
			skillNumber: 2,
			skills: ['animalHandling', 'athletics', 'intimidation', 'nature', 'perception', 'survival']
		},
		bard: {
			hitDice: 8,
			savingThrowProf: ['dex','cha'],
			skillNumber: 3,
			skills: skillList
		},
		cleric: {
			hitDice: 8,
			savingThrowProf: ['wis','cha'],
			skillNumber: 2,
			skills: ['history', 'insight', 'medecine', 'persuasion', 'religion']
		},
		druid: {
			hitDice: 8,
			savingThrowProf: ['int','wis'],
			skillNumber: 2,
			skills: ['arcana', 'animalHandling', 'insight', 'medecine', 'nature', 'perception', 'religion', 'survival']
		},
		fighter: {
			hitDice: 10,
			savingThrowProf: ['str','con'],
			skillNumber: 2,
			skills: ['acrobatics', 'animalHandling', 'athletics', 'history', 'insight', 'intimidation', 'perception', 'survival']
		},
		monk: {
			hitDice: 8,
			savingThrowProf: ['str','dex'],
			skillNumber: 2,
			skills: ['acrobatics', 'athletics', 'history', 'insight', 'religion', 'stealth']
		},
		paladin: {
			hitDice: 10,
			savingThrowProf: ['wis','cha'],
			skillNumber: 2,
			skills: ['athletics', 'insight', 'intimidation', 'medecine', 'persuasion', 'religion']
		},
		ranger: {
			hitDice: 10,
			savingThrowProf: ['str','dex'],
			skillNumber: 3,
			skills: ['animalHandling', 'athletics', 'insight', 'investigation', 'nature', 'perception', 'stealth', 'survival']
		},
		rogue: {
			hitDice: 8,
			savingThrowProf: ['dex','int'],
			skillNumber: 4,
			skills: ['acrobatics', 'athletics', 'deception', 'insight', 'intimidation', 'investigation', 'perception', 'performance', 'persuasion', 'sleightOfHand', 'stealth']
		},
		sorcerer: {
			hitDice: 6,
			savingThrowProf: ['con','cha'],
			skillNumber: 2,
			skills: ['arcana', 'deception', 'insight', 'intimidation', 'persuasion', 'religion']
		},
		warlock: {
			hitDice: 8,
			savingThrowProf: ['wis','cha'],
			skillNumber: 2,
			skills: ['arcana', 'deception', 'history', 'intimidation', 'investigation', 'nature', 'religion']
		},
		wizard: {
			hitDice: 6,
			savingThrowProf: ['int','wis'],
			skillNumber: 2,
			skills: ['arcana', 'history', 'insight', 'investigation', 'medecine', 'religion']
		}
	};

	$.each(classes, function(classe, value) {
		$('#class').append('<option value="' + classe + '">' + capitalizeFirstLetter(classe) + '</option>');
	});

	var bgs = {
		acolyte: {
			skills: ['insight', 'religion']
		},
		charlatan: {
			skills: ['deception', 'sleightOfHand']
		},
		criminal: {
			skills: ['deception', 'stealth']
		},
		entertainer: {
			skills: ['acrobatics', 'performance']
		},
		folkHero: {
			skills: ['animalHandling', 'survival']
		},
		guildArtisan: {
			skills: ['insight', 'persuasion']
		},
		hermit: {
			skills: ['medecine', 'religion']
		},
		noble: {
			skills: ['history', 'persuasion']
		},
		outlander: {
			skills: ['athletics', 'survival']
		},
		sage: {
			skills: ['arcana', 'history']
		},
		sailor: {
			skills: ['athletics', 'perception']
		},
		soldier: {
			skills: ['athletics', 'intimidation']
		},
		urchin: {
			skills: ['sleightOfHand', 'stealth']
		}
	};

	$.each(bgs, function(bg, value) {
		$('#bg').append('<option value="' + bg + '">' + capitalizeFirstLetter(spaceCamel(bg)) + '</option>');
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

	function displaySkillNumber() {
		var skillNumber = classes[$('#class').val()].skillNumber + 2 + races[$('#race').val()].skillNumber;
		skillNumber -= $('[id$="Trained"]:checked').length;
		var skillNumberStr;
		if (skillNumber == 0) {
			skillNumberStr = '';
		} else {
			skillNumberStr = '(' + skillNumber + ')';
		}
		$('#skillNumber').text(skillNumberStr);
	}

	function updateHPMax() {
		var level = parseInt($("#level").val());
		var classHitDice = classes[$('#class').val()].hitDice;
		var conMod = calculateMod($('#con').val(), false);
		var raceHitPoint = races[$('#race').val()].hitPoint;
		$('#hitPointMax').text(classHitDice + level * (conMod + raceHitPoint) + (level - 1) * (classHitDice / 2 + 1));
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

	function updateSkillList() {
		$.each(skillList, function(index, skill) {
			var el = $('#' + skill + 'Trained');
			el.prop('checked', false);
			el.prop('disabled', true);
		});
		$.each(classes[$('#class').val()].skills, function(index, skill) {
			$('#' + skill + 'Trained').prop('disabled', false);
		});
		$.each(bgs[$('#bg').val()].skills, function(index, skill) {
			var el = $('#' + skill + 'Trained');
			el.prop('checked', true);
			el.prop('disabled', true);
		});
		$.each(races[$('#race').val()].skills, function(index, skill) {
			var el = $('#' + skill + 'Trained');
			el.prop('checked', true);
			el.prop('disabled', true);
		});
		displaySkillNumber();
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
				displaySkillNumber();
			});
		});
	});

	var levelInput = $("#level");
	levelInput.change(function() {
		var level = levelInput.val();
		$('#profMod').text(toModString(calculateProf(level, true)));
		$('#numberHitDice').text(level);
		updateHPMax();
		updateST();
		updateSkill();
	});

	var classSelect = $('#class');
	classSelect.change(function() {
		$('#hitDice').text(classes[classSelect.val()].hitDice);
		updateHPMax();
		updateST();
		updateSkillList();
		updateSkill();
	});

	var bgSelect = $('#bg');
	bgSelect.change(updateSkillList);
	bgSelect.change(updateSkill);

	var raceSelect = $('#race');
	raceSelect.change(function() {
		var race = races[raceSelect.val()];
		$('#speed').text(race.speed);
		var abilityBonusArray = race.ability;
		$.each(abilityList, function(index, ability) {
			var abilityBonus = abilityBonusArray[index];
			var abilityBonusStr;
			if (abilityBonus == 0) {
				abilityBonusStr = '';
			} else {
				abilityBonusStr = '(+' + abilityBonus + ')';
			}
			$('#' + ability + 'Bonus').text(abilityBonusStr);
		});
		updateHPMax();
		updateSkillList();
		updateSkill();
	});

	$('#save').click(function() {
		var save = {};
		save['class'] = classSelect.val();
		save['level'] = levelInput.val();
		save['bg'] = bgSelect.val();
		save['race'] = raceSelect.val();
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
		levelInput.val(save['level']);
		bgSelect.val(save['bg']);
		raceSelect.val(save['race']);
		classSelect.change();
		levelInput.change();
		raceSelect.change();
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