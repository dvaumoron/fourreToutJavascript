function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function spaceCamel(string) {
	return string.replace(/([A-Z])/g, ' $1')
}

function toModString(mod) {
	var modStr = '';
	if (mod >= 0) {
		modStr += '+';
	}
	modStr += mod.toString();
	return modStr;
}

function calculateMod(score, warn) {
	if (warn && (score < 1 || score > 20)) {
		alert('score should be between 1 and 20');
	}
	return Math.floor((score - 10) / 2);
}

function calculateProf(level, warn) {
	if (warn && (level < 1 || level > 20)) {
		alert('level should be between 1 and 20');
	} 
	return 1 + Math.ceil(level / 4);
}

angular.module('DD5App',[])
	.controller('CharacterController', function($scope) {
		var character = this;

		character.level = 1;

		character.abilityList = ['str','dex','con','int','wis','cha'];

		character.skillByAbility = {
			str:['athletics'],
			dex:['acrobatics', 'sleightOfHand', 'stealth'],
			con:[],
			int:['arcana', 'history', 'investigation', 'nature', 'religion'],
			wis:['animalHandling', 'insight', 'medecine', 'perception', 'survival'],
			cha:['deception', 'intimidation', 'performance', 'persuasion']
		}

		character.skillList = [];
		angular.forEach(character.abilityList, function(ability) {
			angular.forEach(character.skillByAbility[ability], function(skill) {
				character.skillList.push(skill);
				character[skill + 'Name'] = capitalizeFirstLetter(spaceCamel(skill)) + '(' + capitalizeFirstLetter(ability) + ')';
			});
		});
		character.skillList.sort();

		character.races = [
			{
				name: 'Hill Dwarf',
				ability: [0, 0, 2, 0, 1, 0],
				speed: 25,
				hitPoint: 1,
				skillNumber: 0,
				skills: []
			},
			{
				name: 'Mountain Dwarf',
				ability: [2, 0, 2, 0, 0, 0],
				speed: 25,
				hitPoint: 0,
				skillNumber: 0,
				skills: []
			},
			{
				name: 'High Elf',
				ability: [0, 2, 0, 1, 0, 0],
				speed: 30,
				hitPoint: 0,
				skillNumber: 1,
				skills: ['perception']
			},
			{
				name: 'Wood Elf',
				ability: [0, 2, 0, 0, 1, 0],
				speed: 35,
				hitPoint: 0,
				skillNumber: 1,
				skills: ['perception']
			},
			{
				name: 'Drow',
				ability: [0, 2, 0, 0, 0, 1],
				speed: 30,
				hitPoint: 0,
				skillNumber: 1,
				skills: ['perception']
			},
			{
				name: 'Lightfoot Halfling',
				ability: [0, 2, 0, 0, 0, 1],
				speed: 25,
				hitPoint: 0,
				skillNumber: 0,
				skills: []
			},
			{
				name: 'Stout Halfling',
				ability: [0, 2, 1, 0, 0, 0],
				speed: 25,
				hitPoint: 0,
				skillNumber: 0,
				skills: []
			},
			{
				name: 'Human',
				ability: [1, 1, 1, 1, 1, 1],
				speed: 30,
				hitPoint: 0,
				skillNumber: 0,
				skills: []
			},
			{
				name: 'Dragonborn',
				ability: [2, 0, 0, 0, 0, 1],
				speed: 30,
				hitPoint: 0,
				skillNumber: 0,
				skills: []
			},
			{
				name: 'Forest Gnome',
				ability: [0, 1, 0, 2, 0, 0],
				speed: 25,
				hitPoint: 0,
				skillNumber: 0,
				skills: []
			},
			{
				name: 'Rock Gnome',
				ability: [0, 0, 1, 2, 0, 0],
				speed: 25,
				hitPoint: 0,
				skillNumber: 0,
				skills: []
			},
			{
				name: 'Half-Elf',
				ability: [0, 0, 0, 0, 0, 2],
				speed: 30,
				hitPoint: 0,
				skillNumber: 2,
				skills: []
			},
			{
				name: 'Half-Orc',
				ability: [2, 0, 1, 0, 0, 0],
				speed: 30,
				hitPoint: 0,
				skillNumber: 1,
				skills: ['intimidation']
			},
			{
				name: 'Tiefling',
				ability: [0, 0, 0, 1, 0, 2],
				speed: 30,
				hitPoint: 0,
				skillNumber: 0,
				skills: []
			}
		];
		character.race = character.races[0];

		character.classes = [
			{
				name: 'Barbarian',
				hitDice: 12,
				savingThrowProf: ['str','con'],
				skillNumber: 2,
				skills: ['animalHandling', 'athletics', 'intimidation', 'nature', 'perception', 'survival']
			},
			{
				name: 'Bard',
				hitDice: 8,
				savingThrowProf: ['dex','cha'],
				skillNumber: 3,
				skills: character.skillList
			},
			{
				name: 'Cleric',
				hitDice: 8,
				savingThrowProf: ['wis','cha'],
				skillNumber: 2,
				skills: ['history', 'insight', 'medecine', 'persuasion', 'religion']
			},
			{
				name: 'Druid',
				hitDice: 8,
				savingThrowProf: ['int','wis'],
				skillNumber: 2,
				skills: ['arcana', 'animalHandling', 'insight', 'medecine', 'nature', 'perception', 'religion', 'survival']
			},
			{
				name: 'Fighter',
				hitDice: 10,
				savingThrowProf: ['str','con'],
				skillNumber: 2,
				skills: ['acrobatics', 'animalHandling', 'athletics', 'history', 'insight', 'intimidation', 'perception', 'survival']
			},
			{
				name: 'Monk',
				hitDice: 8,
				savingThrowProf: ['str','dex'],
				skillNumber: 2,
				skills: ['acrobatics', 'athletics', 'history', 'insight', 'religion', 'stealth']
			},
			{
				name: 'Paladin',
				hitDice: 10,
				savingThrowProf: ['wis','cha'],
				skillNumber: 2,
				skills: ['athletics', 'insight', 'intimidation', 'medecine', 'persuasion', 'religion']
			},
			{
				name: 'Ranger',
				hitDice: 10,
				savingThrowProf: ['str','dex'],
				skillNumber: 3,
				skills: ['animalHandling', 'athletics', 'insight', 'investigation', 'nature', 'perception', 'stealth', 'survival']
			},
			{
				name: 'Rogue',
				hitDice: 8,
				savingThrowProf: ['dex','int'],
				skillNumber: 4,
				skills: ['acrobatics', 'athletics', 'deception', 'insight', 'intimidation', 'investigation', 'perception', 'performance', 'persuasion', 'sleightOfHand', 'stealth']
			},
			{
				name: 'Sorcerer',
				hitDice: 6,
				savingThrowProf: ['con','cha'],
				skillNumber: 2,
				skills: ['arcana', 'deception', 'insight', 'intimidation', 'persuasion', 'religion']
			},
			{
				name: 'Warlock',
				hitDice: 8,
				savingThrowProf: ['wis','cha'],
				skillNumber: 2,
				skills: ['arcana', 'deception', 'history', 'intimidation', 'investigation', 'nature', 'religion']
			},
			{
				name: 'Wizard',
				hitDice: 6,
				savingThrowProf: ['int','wis'],
				skillNumber: 2,
				skills: ['arcana', 'history', 'insight', 'investigation', 'medecine', 'religion']
			}
		];
		character.class = character.classes[0]; 

		character.bgs = [
			{
				name: 'Acolyte',
				skills: ['insight', 'religion']
			},
			{
				name: 'Charlatan',
				skills: ['deception', 'sleightOfHand']
			},
			{
				name: 'Criminal',
				skills: ['deception', 'stealth']
			},
			{
				name: 'Entertainer',
				skills: ['acrobatics', 'performance']
			},
			{
				name: 'Folk Hero',
				skills: ['animalHandling', 'survival']
			},
			{
				name: 'Guild Artisan',
				skills: ['insight', 'persuasion']
			},
			{
				name: 'Hermit',
				skills: ['medecine', 'religion']
			},
			{
				name: 'Noble',
				skills: ['history', 'persuasion']
			},
			{
				name: 'Outlander',
				skills: ['athletics', 'survival']
			},
			{
				name: 'Sage',
				skills: ['arcana', 'history']
			},
			{
				name: 'Sailor',
				skills: ['athletics', 'perception']
			},
			{
				name: 'Soldier',
				skills: ['athletics', 'intimidation']
			},
			{
				name: 'Urchin',
				skills: ['sleightOfHand', 'stealth']
			}
		];
		character.bg = character.bgs[0];

		character.updateHPMax = function() {
			var classHitDice = character.class.hitDice;
			var conMod = calculateMod(character.con, false);
			var raceHitPoint = character.race.hitPoint;
			character.hitPointMax = classHitDice + character.level * (conMod + raceHitPoint) + (character.level - 1) * (classHitDice / 2 + 1);
		}

		character.updateST = function() {
			var prof = calculateProf(character.level, false);
			var stProf = character.class.savingThrowProf;
			angular.forEach(character.abilityList, function(ability) {
				var mod = calculateMod(character[ability], false);
				if (stProf.indexOf(ability) != -1) {
					character[ability + 'ST'] = toModString(mod + prof);
				} else {
					character[ability + 'ST'] = toModString(mod);
				}
			});
		}

		character.displaySkillNumber = function() {
			var skillNumber = character.class.skillNumber + 2 + character.race.skillNumber;
			angular.forEach(character.skillList, function(skill) {
				if (character[skill + 'Trained']) {
					skillNumber -= 1;
				}
			});
			var skillNumberStr;
			if (skillNumber == 0) {
				skillNumberStr = '';
			} else {
				skillNumberStr = '(' + skillNumber + ')';
			}
			character.skillNumber = skillNumberStr;
		}

		character.updateSkill = function() {
			var prof = calculateProf(character.level, false);
			angular.forEach(character.abilityList, function(ability) {
				var mod = calculateMod(character[ability], false);
				angular.forEach(character.skillByAbility[ability], function(skill) {
					if (character[skill + 'Trained']) {
						character[skill + 'Mod'] = toModString(mod + prof);
					} else {
						character[skill + 'Mod'] = toModString(mod);
					}
				});
			});
		}

		character.updateSkillList = function() {
			angular.forEach(character.skillList, function(skill) {
				character[skill + 'Trained'] = false;
				character[skill + 'Disabled'] = true;
			});
			angular.forEach(character.class.skills, function(skill) {
				character[skill + 'Disabled'] = false;
			});
			angular.forEach(character.bg.skills, function(skill) {
				character[skill + 'Trained'] = true;
				character[skill + 'Disabled'] = true;
			});
			angular.forEach(character.race.skills, function(skill) {
				character[skill + 'Trained'] = true;
				character[skill + 'Disabled'] = true;
			});
			character.displaySkillNumber();
		}

		$scope.$watch('character.con', function(newValue, oldValue) {
			character.updateHPMax();
		});

		$scope.$watch("character.level", function(newValue, oldValue) {
			character.profMod = toModString(calculateProf(newValue, true));
			character.updateHPMax();
			character.updateST();
			character.updateSkill();
		});

		$scope.$watch("character.class", function(newValue, oldValue) {
			character.updateHPMax();
			character.updateST();
			character.updateSkillList();
			character.updateSkill();
		});

		$scope.$watch("character.bg", function(newValue, oldValue) {
			character.updateSkillList();
			character.updateSkill();
		});

		$scope.$watch("character.race", function(newValue, oldValue) {
			var abilityBonusArray = newValue.ability;
			var index = 0;
			angular.forEach(character.abilityList, function(ability) {
				var abilityBonus = abilityBonusArray[index];
				var abilityBonusStr;
				if (abilityBonus == 0) {
					abilityBonusStr = '';
				} else {
					abilityBonusStr = '(+' + abilityBonus + ')';
				}
				character[ability + 'Bonus'] = abilityBonusStr;
				index += 1;
			});
			character.updateHPMax();
			character.updateSkillList();
			character.updateSkill();
		});

		angular.forEach(character.abilityList, function(ability) {
			character[ability + 'Name'] = capitalizeFirstLetter(ability);
			character[ability] = 10;

			$scope.$watch('character.' + ability, function(newValue, oldValue) {
				var prof = calculateProf(character.level, false);
				var stProf = character.class.savingThrowProf;
				var mod = calculateMod(newValue, true);
				character[ability + 'Mod'] = toModString(mod);
				if (stProf.indexOf(ability) != -1) {
					character[ability + 'ST'] = toModString(mod + prof);
				} else {
					character[ability + 'ST'] = toModString(mod);
				}
				angular.forEach(character.skillByAbility[ability], function(skill) {
					if (character[skill + 'Trained']) {
						character[skill + 'Mod'] = toModString(mod + prof);
					} else {
						character[skill + 'Mod'] = toModString(mod);
					}
				});
			});

			angular.forEach(character.skillByAbility[ability], function(skill) {
				$scope.$watch('character.' + skill + 'Trained', function(newValue, oldValue) {
					var prof = calculateProf(character.level, false);
					var mod = calculateMod(character[ability], false);
					if (newValue) {
						character[skill + 'Mod'] = toModString(mod + prof);
					} else {
						character[skill + 'Mod'] = toModString(mod);
					}
					character.displaySkillNumber();
				});
			});
		});

		character.save = function() {
			var save = {};
			save.class = character.class;
			save.level = character.level;
			save.bg = character.bg;
			save.race = character.race;
			angular.forEach(character.abilityList, function(ability) {
				save[ability] = character[ability];
			});
			angular.forEach(character.skillList, function(skill) {
				save[skill] = character[skill + 'Trained'];
			});
			localStorage.setItem(character.name, JSON.stringify(save));
			alert(character.name + ' saved');
		};

		character.load = function() {
			var save = JSON.parse(localStorage.getItem(character.name));
			character.class = save.class;
			character.level = save.level;
			character.bg = save.bg;
			character.race = save.race;
			angular.forEach(character.abilityList, function(ability) {
				character[ability] = save[ability];
			});
			angular.forEach(character.skillList, function(skill) {
				character[skill + 'Trained'] = save[skill];
			});
		};

		character.remove = function() {
			localStorage.removeItem(character.name);
			alert(character.name + ' removed');
		};
	});
