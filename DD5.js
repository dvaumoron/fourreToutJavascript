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

	$.each(classes, function(key, value) {
		$('#class').append('<option value="' + key + '">' + capitalizeFirstLetter(key) + '</option>')
	});

	var abilityList = ['str','dex','con','int','wis','cha'];

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
		$.each(abilityList, function(index, value) {
			var mod = calculateMod($('#' + value).val(), false);
			if ($.inArray(value, stProf) != -1) {
				$('#' + value + 'ST').text(toModString(mod + prof));
			} else {
				$('#' + value + 'ST').text(toModString(mod));
			}
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

	$.each(abilityList, function(index, value) {
		var el = $('#' + value);
		el.change(function () {
			var prof = calculateProf($("#level").val(), false);
			var stProf = classes[$('#class').val()].savingThrowProf;
			var mod = calculateMod(el.val(), true);
			$('#' + value + 'Mod').text(toModString(mod));
			if ($.inArray(value, stProf) != -1) {
				$('#' + value + 'ST').text(toModString(mod + prof));
			} else {
				$('#' + value + 'ST').text(toModString(mod));
			}
		});
		el.change();
	});

	var levelInput = $("#level");
	levelInput.change(function() {
		var level = levelInput.val()
		$('#profMod').text(toModString(calculateProf(level, true)));
		$('#numberHitDice').text(level);
	});
	levelInput.change();
	levelInput.change(updateHPMax);
	levelInput.change(updateST);
	

	var classSelect = $('#class');
	classSelect.change(function() {
		$('#hitDice').text(classes[classSelect.val()].hitDice);
	});
	classSelect.change();
	classSelect.change(updateHPMax);
	classSelect.change(updateST);
});