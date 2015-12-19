angular.module('DD5App',[])
	.controller('CharacterController', function($scope) {
		var character = this;

		$scope.capitalizeFirstLetter = function(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		};
		$scope.toModString = function(mod) {
			var modStr = '';
			if (mod >= 0) {
				modStr += '+';
			}
			modStr += mod.toString();
			return modStr;
		};
		function spaceCamel(string) {
			return string.replace(/([A-Z])/g, ' $1')
		}

		character.level = 1;

		$scope.abilityList = ['str','dex','con','int','wis','cha'];

		$scope.skillByAbility = {
			str:['athletics'],
			dex:['acrobatics', 'sleightOfHand', 'stealth'],
			con:[],
			int:['arcana', 'history', 'investigation', 'nature', 'religion'],
			wis:['animalHandling', 'insight', 'medecine', 'perception', 'survival'],
			cha:['deception', 'intimidation', 'performance', 'persuasion']
		}

		$scope.skillList = [];
		$scope.title = {};
		angular.forEach($scope.abilityList, function(ability) {
			angular.forEach($scope.skillByAbility[ability], function(skill) {
				$scope.skillList.push(skill);
				$scope.title[skill] = $scope.capitalizeFirstLetter(spaceCamel(skill)) + ' (' + $scope.capitalizeFirstLetter(ability) + ')';
			});
		});
		$scope.skillList.sort();

		$scope.races = [
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
		character.race = $scope.races[0];

		var standardFeatProgression = [4, 8, 12, 16, 19];

		$scope.classes = [
			{
				name: 'Barbarian',
				hitDice: 12,
				savingThrowProf: ['str','con'],
				skillNumber: 2,
				skills: ['animalHandling', 'athletics', 'intimidation', 'nature', 'perception', 'survival'],
				featProgression: standardFeatProgression,
				pathName: 'Primal Path',
				pathLevel: 3,
				paths: [
					{
						name: 'Path of the Berserker'
					},
					{
						name: 'Path of the Totem Warrior'
					}
				]
			},
			{
				name: 'Bard',
				hitDice: 8,
				savingThrowProf: ['dex','cha'],
				skillNumber: 3,
				skills: $scope.skillList,
				featProgression: standardFeatProgression,
				pathName: 'Bard College',
				pathLevel: 3,
				paths: [
					{
						name: 'College of Lore'
					},
					{
						name: 'College of Valor'
					}
				]
			},
			{
				name: 'Cleric',
				hitDice: 8,
				savingThrowProf: ['wis','cha'],
				skillNumber: 2,
				skills: ['history', 'insight', 'medecine', 'persuasion', 'religion'],
				featProgression: standardFeatProgression,
				pathName: 'Divine Domain',
				pathLevel: 1,
				paths: [
					{
						name: 'Knowledge Domain'
					},
					{
						name: 'Life Domain'
					},
					{
						name: 'Light Domain'
					},
					{
						name: 'Nature Domain'
					},
					{
						name: 'Tempest Domain'
					},
					{
						name: 'Trickery Domain'
					},
					{
						name: 'War Domain'
					}
				]
			},
			{
				name: 'Druid',
				hitDice: 8,
				savingThrowProf: ['int','wis'],
				skillNumber: 2,
				skills: ['arcana', 'animalHandling', 'insight', 'medecine', 'nature', 'perception', 'religion', 'survival'],
				featProgression: standardFeatProgression,
				pathName: 'Druid Circle',
				pathLevel: 2,
				paths: [
					{
						name: 'Circle of the Land'
					},
					{
						name: 'Circle of the Moon'
					}
				]
			},
			{
				name: 'Fighter',
				hitDice: 10,
				savingThrowProf: ['str','con'],
				skillNumber: 2,
				skills: ['acrobatics', 'animalHandling', 'athletics', 'history', 'insight', 'intimidation', 'perception', 'survival'],
				featProgression: [4, 6, 8, 12, 14, 16, 19],
				pathName: 'Martial Archetype',
				pathLevel: 3,
				paths: [
					{
						name: 'Champion'
					},
					{
						name: 'Battle Master'
					},
					{
						name: 'Eldricht Knight'
					}
				]
			},
			{
				name: 'Monk',
				hitDice: 8,
				savingThrowProf: ['str','dex'],
				skillNumber: 2,
				skills: ['acrobatics', 'athletics', 'history', 'insight', 'religion', 'stealth'],
				featProgression: standardFeatProgression,
				pathName: 'Monastic Tradition',
				pathLevel: 3,
				paths: [
					{
						name: 'Way of the Open Hand'
					},
					{
						name: 'Way of Shadow'
					},
					{
						name: 'Way of the Four Elements'
					}
				]
			},
			{
				name: 'Paladin',
				hitDice: 10,
				savingThrowProf: ['wis','cha'],
				skillNumber: 2,
				skills: ['athletics', 'insight', 'intimidation', 'medecine', 'persuasion', 'religion'],
				featProgression: standardFeatProgression,
				pathName: 'Sacred Oath',
				pathLevel: 3,
				paths: [
					{
						name: 'Oath of Devotion'
					},
					{
						name: 'Oath of the Ancients'
					},
					{
						name: 'Oath of Vengeance'
					}
				]
			},
			{
				name: 'Ranger',
				hitDice: 10,
				savingThrowProf: ['str','dex'],
				skillNumber: 3,
				skills: ['animalHandling', 'athletics', 'insight', 'investigation', 'nature', 'perception', 'stealth', 'survival'],
				featProgression: standardFeatProgression,
				pathName: 'Ranger Archetype',
				pathLevel: 3,
				paths: [
					{
						name: 'Hunter'
					},
					{
						name: 'Beast Master'
					}
				]
			},
			{
				name: 'Rogue',
				hitDice: 8,
				savingThrowProf: ['dex','int'],
				skillNumber: 4,
				skills: ['acrobatics', 'athletics', 'deception', 'insight', 'intimidation', 'investigation', 'perception', 'performance', 'persuasion', 'sleightOfHand', 'stealth'],
				featProgression: [4, 8, 10, 12, 16, 19],
				pathName: 'Roguish Archetype',
				pathLevel: 3,
				paths: [
					{
						name: 'Thief'
					},
					{
						name: 'Assassin'
					},
					{
						name: 'Arcane Trickster'
					}
				]
			},
			{
				name: 'Sorcerer',
				hitDice: 6,
				savingThrowProf: ['con','cha'],
				skillNumber: 2,
				skills: ['arcana', 'deception', 'insight', 'intimidation', 'persuasion', 'religion'],
				featProgression: standardFeatProgression,
				pathName: 'Sorcerous Origin',
				pathLevel: 1,
				paths: [
					{
						name: 'Draconic Bloodline'
					},
					{
						name: 'Wild Magic'
					}
				]
			},
			{
				name: 'Warlock',
				hitDice: 8,
				savingThrowProf: ['wis','cha'],
				skillNumber: 2,
				skills: ['arcana', 'deception', 'history', 'intimidation', 'investigation', 'nature', 'religion'],
				featProgression: standardFeatProgression,
				pathName: 'Otherworldly Patron',
				pathLevel: 1,
				paths: [
					{
						name: 'The Archfey'
					},
					{
						name: 'The Fiend'
					},
					{
						name: 'The Great Old One'
					}
				]
			},
			{
				name: 'Wizard',
				hitDice: 6,
				savingThrowProf: ['int','wis'],
				skillNumber: 2,
				skills: ['arcana', 'history', 'insight', 'investigation', 'medecine', 'religion'],
				featProgression: standardFeatProgression,
				pathName: 'Arcane Tradition',
				pathLevel: 2,
				paths: [
					{
						name: 'School of Abjuration'
					},
					{
						name: 'School of Conjuration'
					},
					{
						name: 'School of Divination'
					},
					{
						name: 'School of Enchantment'
					},
					{
						name: 'School of Evocation'
					},
					{
						name: 'School of Illusion'
					},
					{
						name: 'School of Necromancy'
					},
					{
						name: 'School of Transmutation'
					}
				]
			}
		];
		character.class = $scope.classes[0]; 

		$scope.bgs = [
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
		character.bg = $scope.bgs[0];

		character.updateHPMax = function() {
			character.hitPointMax = character.class.hitDice + character.level * (character.conMod + character.race.hitPoint) + (character.level - 1) * (character.class.hitDice / 2 + 1);
		}

		character.updateST = function() {
			angular.forEach($scope.abilityList, function(ability) {
				if (character.class.savingThrowProf.indexOf(ability) != -1) {
					character[ability + 'ST'] = character[ability + 'Mod'] + character.profMod;
				} else {
					character[ability + 'ST'] = character[ability + 'Mod'];
				}
			});
		}

		character.displaySkillNumber = function() {
			var skillNumber = character.class.skillNumber + 2 + character.race.skillNumber;
			angular.forEach($scope.skillList, function(skill) {
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
			angular.forEach($scope.abilityList, function(ability) {
				angular.forEach($scope.skillByAbility[ability], function(skill) {
					if (character[skill + 'Trained']) {
						character[skill + 'Mod'] = character[ability + 'Mod'] + character.profMod;
					} else {
						character[skill + 'Mod'] = character[ability + 'Mod'];
					}
				});
			});
		}

		character.updateSkillList = function() {
			angular.forEach($scope.skillList, function(skill) {
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

		character.updateFeatNumber = function() {
			var featNumber = 0;
			angular.forEach(character.class.featProgression, function(featLevel) {
				if (character.level >= featLevel) {
					featNumber += 1;
				}
			});
			character.featNumber = featNumber;
		};

		$scope.$watch('character.conMod', function(newValue, oldValue) {
			character.updateHPMax();
		});

		$scope.$watch("character.level", function(newValue, oldValue) {
			character.profMod = 1 + Math.ceil(newValue / 4);
			character.updateHPMax();
			character.updateST();
			character.updateSkill();
			character.updateFeatNumber();
		});

		$scope.$watch("character.class", function(newValue, oldValue) {
			character.path = newValue.paths[0].name; 
			character.updateHPMax();
			character.updateST();
			character.updateSkillList();
			character.updateSkill();
			character.updateFeatNumber();
		});

		$scope.$watch("character.bg", function(newValue, oldValue) {
			character.updateSkillList();
			character.updateSkill();
		});

		$scope.$watch("character.race", function(newValue, oldValue) {
			var index = 0;
			angular.forEach($scope.abilityList, function(ability) {
				var abilityBonus = newValue.ability[index];
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

		angular.forEach($scope.abilityList, function(ability) {
			character[ability] = 10;

			$scope.$watch('character.' + ability, function(newValue, oldValue) {
				var mod = Math.floor((newValue - 10) / 2);
				character[ability + 'Mod'] = mod;
				if (character.class.savingThrowProf.indexOf(ability) != -1) {
					character[ability + 'ST'] = mod + character.profMod;
				} else {
					character[ability + 'ST'] = mod;
				}
				angular.forEach($scope.skillByAbility[ability], function(skill) {
					if (character[skill + 'Trained']) {
						character[skill + 'Mod'] = mod + character.profMod;
					} else {
						character[skill + 'Mod'] = mod;
					}
				});
			});

			angular.forEach($scope.skillByAbility[ability], function(skill) {
				$scope.$watch('character.' + skill + 'Trained', function(newValue, oldValue) {
					if (newValue) {
						character[skill + 'Mod'] = character[ability + 'Mod'] + character.profMod;
					} else {
						character[skill + 'Mod'] = character[ability + 'Mod'];
					}
					character.displaySkillNumber();
				});
			});
		});

		character.save = function() {
			var save = {
				race: character.race.name,
				class: character.class.name,
				bg: character.bg.name,
				level: character.level,
				path: character.path
			};
			angular.forEach($scope.abilityList, function(ability) {
				save[ability] = character[ability];
			});
			save.skills = [];
			angular.forEach($scope.skillList, function(skill) {
				if (character[skill + 'Trained']) {
					save.skills.push(skill);
				}
			});
			localStorage.setItem(character.name, JSON.stringify(save));
			alert(character.name + ' saved');
		};

		character.load = function() {
			var save = JSON.parse(localStorage.getItem(character.name));
			angular.forEach($scope.races, function(race) {
				if (race.name == save.race) {
					character.race = race;
				}
			});
			angular.forEach($scope.classes, function(classe) {
				if (classe.name == save.class) {
					character.class = classe;
				}
			});
			character.path = save.path;
			angular.forEach($scope.bgs, function(bg) {
				if (bg.name == save.bg) {
					character.bg = bg;
				}
			});
			character.level = save.level;
			angular.forEach($scope.abilityList, function(ability) {
				character[ability] = save[ability];
			});
			angular.forEach($scope.skillList, function(skill) {
				character[skill + 'Trained'] = save.skills.indexOf(skill) != -1;
			});
		};

		character.remove = function() {
			localStorage.removeItem(character.name);
			alert(character.name + ' removed');
		};
	});
