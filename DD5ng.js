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
				skills: [],
				features: [
					'Darkvision',
					'Dwarven Resilisence',
					'Dwarven Combat Training',
					'Tool Proficiency',
					'Stone Cunning'
				]
			},
			{
				name: 'Mountain Dwarf',
				ability: [2, 0, 2, 0, 0, 0],
				speed: 25,
				hitPoint: 0,
				skillNumber: 0,
				skills: [],
				features: [
					'Darkvision',
					'Dwarven Resilisence',
					'Dwarven Combat Training',
					'Tool Proficiency',
					'Stone Cunning',
					'Dwarven Armor Training'
				]
			},
			{
				name: 'High Elf',
				ability: [0, 2, 0, 1, 0, 0],
				speed: 30,
				hitPoint: 0,
				skillNumber: 1,
				skills: ['perception'],
				features: [
					'Darkvision',
					'Fey Ancestry',
					'Trance',
					'Elf Weapon Training',
					'Cantrip',
					'Extra Language'
				]
			},
			{
				name: 'Wood Elf',
				ability: [0, 2, 0, 0, 1, 0],
				speed: 35,
				hitPoint: 0,
				skillNumber: 1,
				skills: ['perception'],
				features: [
					'Darkvision',
					'Fey Ancestry',
					'Trance',
					'Elf Weapon Training',
					'Mask of the Wild'
				]
			},
			{
				name: 'Drow',
				ability: [0, 2, 0, 0, 0, 1],
				speed: 30,
				hitPoint: 0,
				skillNumber: 1,
				skills: ['perception'],
				features: [
					'Superior Darkvision',
					'Fey Ancestry',
					'Trance',
					'Sunlight Sensitivity',
					'Drow Magic',
					'Drow Weapon Training'
				]
			},
			{
				name: 'Lightfoot Halfling',
				ability: [0, 2, 0, 0, 0, 1],
				speed: 25,
				hitPoint: 0,
				skillNumber: 0,
				skills: [],
				features: [
					'Lucky',
					'Brave',
					'Halfling Nimbleness',
					'Naturally Stealthy'
				]
			},
			{
				name: 'Stout Halfling',
				ability: [0, 2, 1, 0, 0, 0],
				speed: 25,
				hitPoint: 0,
				skillNumber: 0,
				skills: [],
				features: [
					'Lucky',
					'Brave',
					'Halfling Nimbleness',
					'Stout Resilience'
				]
			},
			{
				name: 'Human',
				ability: [1, 1, 1, 1, 1, 1],
				speed: 30,
				hitPoint: 0,
				skillNumber: 0,
				skills: [],
				features: []
			},
			{
				name: 'Dragonborn',
				ability: [2, 0, 0, 0, 0, 1],
				speed: 30,
				hitPoint: 0,
				skillNumber: 0,
				skills: [],
				features: [
					'Draconic Ancestry',
					'Breath Weapon',
					'Damage Resistance'
				]
			},
			{
				name: 'Forest Gnome',
				ability: [0, 1, 0, 2, 0, 0],
				speed: 25,
				hitPoint: 0,
				skillNumber: 0,
				skills: [],
				features: [
					'Darkvision',
					'Gnome Cunning',
					'Natural Illusionist',
					'Speak with Small Beasts'
				]
			},
			{
				name: 'Rock Gnome',
				ability: [0, 0, 1, 2, 0, 0],
				speed: 25,
				hitPoint: 0,
				skillNumber: 0,
				skills: [],
				features: [
					'Darkvision',
					'Gnome Cunning',
					'Artificier\'s Lore',
					'Tinker'
				]
			},
			{
				name: 'Half-Elf',
				ability: [0, 0, 0, 0, 0, 2],
				speed: 30,
				hitPoint: 0,
				skillNumber: 2,
				skills: [],
				features: [
					'Darkvision',
					'Fey Ancestry'
				]
			},
			{
				name: 'Half-Orc',
				ability: [2, 0, 1, 0, 0, 0],
				speed: 30,
				hitPoint: 0,
				skillNumber: 1,
				skills: ['intimidation'],
				features: [
					'Darkvision',
					'Relentless Endurance',
					'Savage Attacks'
				]
			},
			{
				name: 'Tiefling',
				ability: [0, 0, 0, 1, 0, 2],
				speed: 30,
				hitPoint: 0,
				skillNumber: 0,
				skills: [],
				features: [
					'Darkvision',
					'Hellish Resistance',
					'Infernal Legacy'
				]
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
				features: [
					{
						level: 1,
						name: 'Rage'
					},
					{
						level: 1,
						name: 'Unarmored Defense'
					},
					{
						level: 2,
						name: 'Reckless Attack'
					},
					{
						level: 2,
						name: 'Danger Sense'
					},
					{
						level: 5,
						name: 'Extra Attack'
					},
					{
						level: 5,
						name: 'Fast Mouvement'
					},
					{
						level: 7,
						name: 'Feral Instinct'
					},
					{
						level: 9,
						name: 'Brutal Critical (1 Die)'
					},
					{
						level: 11,
						name: 'Relentless Rage'
					},
					{
						level: 13,
						name: 'Brutal Critical (2 Dice)'
					},
					{
						level: 15,
						name: 'Persistent Rage'
					},
					{
						level: 17,
						name: 'Brutal Critical (3 Dice)'
					},
					{
						level: 18,
						name: 'Indomitable Might'
					},
					{
						level: 20,
						name: 'Primal Champion'
					}
				],
				pathName: 'Primal Path',
				pathLevel: 3,
				paths: [
					{
						name: 'Path of the Berserker',
						features: [
							{
								level: 3,
								name: 'Frenzy'
							},
							{
								level: 6,
								name: 'Mindless Rage'
							},
							{
								level: 10,
								name: 'Intimidating Presence'
							},
							{
								level: 14,
								name: 'Retaliation'
							}
						]
					},
					{
						name: 'Path of the Totem Warrior',
						features: [
							{
								level: 3,
								name: 'Spirit Seeker'
							},
							{
								level: 3,
								name: 'Totem Spirit'
							},
							{
								level: 6,
								name: 'Aspect of the Beast'
							},
							{
								level: 10,
								name: 'Spirit Walker'
							},
							{
								level: 14,
								name: 'Totemic Attunement'
							}
						]
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
				features: [
					{
						level: 1,
						name: 'Spellcasting'
					},
					{
						level: 1,
						name: 'Bardic Inspiration (D6)'
					},
					{
						level: 2,
						name: 'Jack of All Trades'
					},
					{
						level: 2,
						name: 'Song of Rest (D6)'
					},
					{
						level: 3,
						name: 'Expertise'
					},
					{
						level: 5,
						name: 'Bardic Inspiration (D8)'
					},
					{
						level: 5,
						name: 'Font of Inspiration'
					},
					{
						level: 6,
						name: 'Countercharm'
					},
					{
						level: 9,
						name: 'Song of Rest (D8)'
					},
					{
						level: 10,
						name: 'Bardic Inspiration (D10)'
					},
					{
						level: 10,
						name: 'Expertise'
					},
					{
						level: 10,
						name: 'Magical Secrets'
					},
					{
						level: 13,
						name: 'Song of Rest (D10)'
					},
					{
						level: 14,
						name: 'Magical Secrets'
					},
					{
						level: 15,
						name: 'Bardic Inspiration (D12)'
					},
					{
						level: 17,
						name: 'Song of Rest (D12)'
					},
					{
						level: 18,
						name: 'Magical Secrets'
					},
					{
						level: 20,
						name: 'Superior Inspiration'
					}
				],
				pathName: 'Bard College',
				pathLevel: 3,
				paths: [
					{
						name: 'College of Lore',
						features: [
							{
								level: 3,
								name: 'Bonus Proficiencies'
							},
							{
								level: 3,
								name: 'Cutting Words'
							},
							{
								level: 6,
								name: 'Additional Magical Secrets'
							},
							{
								level: 14,
								name: 'Peerless Skill'
							}
						]
					},
					{
						name: 'College of Valor',
						features: [
							{
								level: 3,
								name: 'Bonus Proficiencies'
							},
							{
								level: 3,
								name: 'Combat Inspiration'
							},
							{
								level: 6,
								name: 'Extra Attack'
							},
							{
								level: 14,
								name: 'Battle Magic'
							}
						]
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
				features: [
					{
						level: 1,
						name: 'Spellcasting'
					},
					{
						level: 2,
						name: 'Channel Divinity (1/Rest)'
					},
					{
						level: 5,
						name: 'Destroy Undead (CR 1/2)'
					},
					{
						level: 6,
						name: 'Channel Divinity (2/Rest)'
					},
					{
						level: 8,
						name: 'Destroy Undead (CR 1)'
					},
					{
						level: 10,
						name: 'Divine Intervention'
					},
					{
						level: 11,
						name: 'Destroy Undead (CR 2)'
					},
					{
						level: 14,
						name: 'Destroy Undead (CR 3)'
					},
					{
						level: 17,
						name: 'Destroy Undead (CR 4)'
					},
					{
						level: 18,
						name: 'Channel Divinity (3/Rest)'
					},
					{
						level: 20,
						name: 'Divine Intervention Improvement'
					}
				],
				pathName: 'Divine Domain',
				pathLevel: 1,
				paths: [
					{
						name: 'Knowledge Domain',
						features: [
							{
								level: 1,
								name: 'Blessing of Knowledge'
							},
							{
								level: 2,
								name: 'Channel Divinity: Knowledge of the Ages'
							},
							{
								level: 6,
								name: 'Channel Divinity: Read Thoughts'
							},
							{
								level: 8,
								name: 'Potent Spellcasting'
							},
							{
								level: 17,
								name: 'Visions of the Past'
							}
						]
					},
					{
						name: 'Life Domain',
						features: [
							{
								level: 1,
								name: 'Bonus Proficiency'
							},
							{
								level: 1,
								name: 'Disciple of Life'
							},
							{
								level: 2,
								name: 'Channel Divinity: Preserve Life'
							},
							{
								level: 6,
								name: 'Blessed Healer'
							},
							{
								level: 8,
								name: 'Divine Strike'
							},
							{
								level: 17,
								name: 'Supreme Healing'
							}
						]
					},
					{
						name: 'Light Domain',
						features: [
							{
								level: 1,
								name: 'Bonus Cantrip'
							},
							{
								level: 1,
								name: 'Warding Flare'
							},
							{
								level: 2,
								name: 'Channel Divinity: Radiance of the Dawn'
							},
							{
								level: 6,
								name: 'Improved Flare'
							},
							{
								level: 8,
								name: 'Potent Spellcasting'
							},
							{
								level: 17,
								name: 'Coronna of Light'
							}
						]
					},
					{
						name: 'Nature Domain',
						features: [
							{
								level: 1,
								name: 'Acolyte of Nature'
							},
							{
								level: 1,
								name: 'Bonus Proficiency'
							},
							{
								level: 2,
								name: 'Channel Divinity: Charm Animals And Plants'
							},
							{
								level: 6,
								name: 'Dampen Elements'
							},
							{
								level: 8,
								name: 'Divine Strike'
							},
							{
								level: 17,
								name: 'Master of Nature'
							}
						]
					},
					{
						name: 'Tempest Domain',
						features: [
							{
								level: 1,
								name: 'Bonus Proficiencies'
							},
							{
								level: 1,
								name: 'Wrath of the Storm'
							},
							{
								level: 2,
								name: 'Channel Divinity: Destructive Wrath'
							},
							{
								level: 6,
								name: 'Thunderbolt Strike'
							},
							{
								level: 8,
								name: 'Divine Strike'
							},
							{
								level: 17,
								name: 'Storm Born'
							}
						]
					},
					{
						name: 'Trickery Domain',
						features: [
							{
								level: 1,
								name: 'Blessing of the Trickster'
							},
							{
								level: 2,
								name: 'Channel Divinity: Invoke Duplicity'
							},
							{
								level: 6,
								name: 'Channel Divinity: Cloak of Shadows'
							},
							{
								level: 8,
								name: 'Divine Strike'
							},
							{
								level: 17,
								name: 'Improved Duplicity'
							}
						]
					},
					{
						name: 'War Domain',
						features: [
							{
								level: 1,
								name: 'Bonus Proficiencies'
							},
							{
								level: 1,
								name: 'War Priest'
							},
							{
								level: 2,
								name: 'Channel Divinity: Guided Strike'
							},
							{
								level: 6,
								name: 'Channel Divinity: War God\'s Blessing'
							},
							{
								level: 8,
								name: 'Divine Strike'
							},
							{
								level: 17,
								name: 'Avatar of Battle'
							}
						]
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
				features: [
					{
						level: 1,
						name: 'Druidic'
					},
					{
						level: 1,
						name: 'Spellcasting'
					},
					{
						level: 2,
						name: 'Wild Shape'
					},
					{
						level: 4,
						name: 'Wild Shape Improvement'
					},
					{
						level: 8,
						name: 'Wild Shape Improvement'
					},
					{
						level: 18,
						name: 'Timeless Body'
					},
					{
						level: 18,
						name: 'Beast Spells'
					},
					{
						level: 20,
						name: 'Archdruid'
					}
				],
				pathName: 'Druid Circle',
				pathLevel: 2,
				paths: [
					{
						name: 'Circle of the Land',
						features: [
							{
								level: 2,
								name: 'Bonus Cantrip'
							},
							{
								level: 2,
								name: 'Natural Recovery'
							},
							{
								level: 3,
								name: 'Circle Spells'
							},
							{
								level: 6,
								name: 'Land\'s Stride'
							},
							{
								level: 10,
								name: 'Nature\'s Ward'
							},
							{
								level: 14,
								name: 'Nature\'s Sanctuary'
							}
						]
					},
					{
						name: 'Circle of the Moon',
						features: [
							{
								level: 2,
								name: 'Combat Wild Shape'
							},
							{
								level: 2,
								name: 'Circle Forms'
							},
							{
								level: 6,
								name: 'Primal Strike'
							},
							{
								level: 10,
								name: 'Elemental Wild Shape'
							},
							{
								level: 14,
								name: 'Thousand Forms'
							}
						]
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
				features: [
					{
						level: 1,
						name: 'Fighting Style'
					},
					{
						level: 1,
						name: 'Second Wind'
					},
					{
						level: 2,
						name: 'Action Surge (one use)'
					},
					{
						level: 5,
						name: 'Extra Attack'
					},
					{
						level: 9,
						name: 'Indomitable (one use)'
					},
					{
						level: 11,
						name: 'Extra Attack (2)'
					},
					{
						level: 13,
						name: 'Indomitable (two uses)'
					},
					{
						level: 17,
						name: 'Action Surge (two uses)'
					},
					{
						level: 17,
						name: 'Indomitable (three uses)'
					},
					{
						level: 20,
						name: 'Extra Attack (3)'
					}
				],
				pathName: 'Martial Archetype',
				pathLevel: 3,
				paths: [
					{
						name: 'Champion',
						features: [
							{
								level: 3,
								name: 'Improved Critical'
							},
							{
								level: 7,
								name: 'Remarkable Athlete'
							},
							{
								level: 10,
								name: 'Additional Fighting Style'
							},
							{
								level: 15,
								name: 'Superior Critical'
							},
							{
								level: 18,
								name: 'Survivor'
							}
						]
					},
					{
						name: 'Battle Master',
						features: [
							{
								level: 3,
								name: 'Combat Superiority'
							},
							{
								level: 3,
								name: 'Student of War'
							},
							{
								level: 7,
								name: 'Know Your Enemy'
							},
							{
								level: 10,
								name: 'Improved Combat Superiority'
							},
							{
								level: 15,
								name: 'Relentless'
							}
						]
					},
					{
						name: 'Eldricht Knight',
						features: [
							{
								level: 3,
								name: 'Spellcasting'
							},
							{
								level: 3,
								name: 'Weapon Bond'
							},
							{
								level: 7,
								name: 'War Magic'
							},
							{
								level: 10,
								name: 'Eldricht Strike'
							},
							{
								level: 15,
								name: 'Arcane Charge'
							},
							{
								level: 18,
								name: 'Improved War Magic'
							}
						]
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
				features: [
					{
						level: 1,
						name: 'Unarmored Defense'
					},
					{
						level: 1,
						name: 'Martial Arts'
					},
					{
						level: 2,
						name: 'Ki'
					},
					{
						level: 2,
						name: 'Unarmored Movement'
					},
					{
						level: 3,
						name: 'Deflect Missiles'
					},
					{
						level: 4,
						name: 'Slow Fall'
					},
					{
						level: 5,
						name: 'Extra Attack'
					},
					{
						level: 5,
						name: 'Stunning Strike'
					},
					{
						level: 6,
						name: 'Ki-Empowered Strike'
					},
					{
						level: 7,
						name: 'Evasion'
					},
					{
						level: 7,
						name: 'Stillness of Mind'
					},
					{
						level: 9,
						name: 'Unarmored Movement Improvement'
					},
					{
						level: 10,
						name: 'Purity of Body'
					},
					{
						level: 13,
						name: 'Tongue of the Sun and Moon'
					},
					{
						level: 14,
						name: 'Diamond Soul'
					},
					{
						level: 15,
						name: 'Timeless Body'
					},
					{
						level: 18,
						name: 'Empty Body'
					},
					{
						level: 20,
						name: 'Perfect Self'
					}
				],
				pathName: 'Monastic Tradition',
				pathLevel: 3,
				paths: [
					{
						name: 'Way of the Open Hand',
						features: [
							{
								level: 3,
								name: 'Open Hand Technique'
							},
							{
								level: 6,
								name: 'Wholeness of Body'
							},
							{
								level: 11,
								name: 'Tranquility'
							},
							{
								level: 17,
								name: 'Quivering Palm'
							}
						]
					},
					{
						name: 'Way of Shadow',
						features: [
							{
								level: 3,
								name: 'Shadow Arts'
							},
							{
								level: 6,
								name: 'Shadow Step'
							},
							{
								level: 11,
								name: 'Cloak of Shadows'
							},
							{
								level: 17,
								name: 'Opportunist'
							}
						]
					},
					{
						name: 'Way of the Four Elements',
						features: [
							{
								level: 3,
								name: 'Disciple of the Elements'
							}
						]
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
				features: [
					{
						level: 1,
						name: 'Divine Sense'
					},
					{
						level: 1,
						name: 'Lay of Hands'
					},
					{
						level: 2,
						name: 'Fighting Style'
					},
					{
						level: 2,
						name: 'Spellcasting'
					},
					{
						level: 2,
						name: 'Divine Strike'
					},
					{
						level: 3,
						name: 'Divine Health'
					},
					{
						level: 5,
						name: 'Extra Attack'
					},
					{
						level: 6,
						name: 'Aura of Protection'
					},
					{
						level: 10,
						name: 'Aura of Courage'
					},
					{
						level: 11,
						name: 'Improved Divine Strike'
					},
					{
						level: 14,
						name: 'Cleansing Touch'
					},
					{
						level: 18,
						name: 'Aura improvements'
					}
				],
				pathName: 'Sacred Oath',
				pathLevel: 3,
				paths: [
					{
						name: 'Oath of Devotion',
						features: [
							{
								level: 3,
								name: 'Channel Divinity: Sacred Weapon'
							},
							{
								level: 3,
								name: 'Channel Divinity: Turn the Unholy'
							},
							{
								level: 7,
								name: 'Aura of Devotion'
							},
							{
								level: 15,
								name: 'Purity of Spirit'
							},
							{
								level: 20,
								name: 'Holy Nymbus'
							}
						]
					},
					{
						name: 'Oath of the Ancients',
						features: [
							{
								level: 3,
								name: 'Channel Divinity: Nature\'s Wrath'
							},
							{
								level: 3,
								name: 'Channel Divinity: Turn the Faithless'
							},
							{
								level: 7,
								name: 'Aura of Warding'
							},
							{
								level: 15,
								name: 'Undying Sentinel'
							},
							{
								level: 20,
								name: 'Elder Champion'
							}
						]
					},
					{
						name: 'Oath of Vengeance',
						features: [
							{
								level: 3,
								name: 'Channel Divinity: Abjure Enemy'
							},
							{
								level: 3,
								name: 'Channel Divinity: Vow of Enemity'
							},
							{
								level: 7,
								name: 'Relentless Avenger'
							},
							{
								level: 15,
								name: 'Soul of Vengeance'
							},
							{
								level: 20,
								name: 'Avenging Angel'
							}
						]
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
				features: [
					{
						level: 1,
						name: 'Favored Enemy'
					},
					{
						level: 1,
						name: 'Natural Explorer'
					},
					{
						level: 2,
						name: 'Fighting Style'
					},
					{
						level: 2,
						name: 'Spellcasting'
					},
					{
						level: 3,
						name: 'Primal Awareness'
					},
					{
						level: 5,
						name: 'Extra Attack'
					},
					{
						level: 6,
						name: 'Favored Enemy and Natural Explorer improvements'
					},
					{
						level: 8,
						name: 'Land\'s Stride'
					},
					{
						level: 3,
						name: 'Primal Awareness'
					},
					{
						level: 10,
						name: 'Natural Explorer improvement'
					},
					{
						level: 14,
						name: 'Favored Enemy improvement'
					},
					{
						level: 14,
						name: 'Vanish'
					},
					{
						level: 18,
						name: 'Feral Senses'
					},
					{
						level: 20,
						name: 'Foe Slayer'
					}
				],
				pathName: 'Ranger Archetype',
				pathLevel: 3,
				paths: [
					{
						name: 'Hunter',
						features: [
							{
								level: 3,
								name: 'Hunter\'s Prey'
							},
							{
								level: 7,
								name: 'Defensive Tactics'
							},
							{
								level: 11,
								name: 'Multiattack'
							},
							{
								level: 15,
								name: 'Superior Hunter\'s Defense'
							}
						]
					},
					{
						name: 'Beast Master',
						features: [
							{
								level: 3,
								name: 'Ranger\'s Companion'
							},
							{
								level: 7,
								name: 'Exceptional Training'
							},
							{
								level: 11,
								name: 'Bestial Fury'
							},
							{
								level: 15,
								name: 'Share Spell'
							}
						]
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
				features: [
					{
						level: 1,
						name: 'Expertise'
					},
					{
						level: 1,
						name: 'Sneak Attack'
					},
					{
						level: 1,
						name: 'Thieves\' Cant'
					},
					{
						level: 2,
						name: 'Cunning Action'
					},
					{
						level: 5,
						name: 'Uncanny Dodge'
					},
					{
						level: 6,
						name: 'Expertise'
					},
					{
						level: 7,
						name: 'Evasion'
					},
					{
						level: 11,
						name: 'Reliable Talent'
					},
					{
						level: 14,
						name: 'Blindsense'
					},
					{
						level: 15,
						name: 'Slippery Mind'
					},
					{
						level: 18,
						name: 'Elusive'
					},
					{
						level: 20,
						name: 'Stroke of Luck'
					}
				],
				pathName: 'Roguish Archetype',
				pathLevel: 3,
				paths: [
					{
						name: 'Thief',
						features: [
							{
								level: 3,
								name: 'Fast Hands'
							},
							{
								level: 3,
								name: 'Second-Story Work'
							},
							{
								level: 9,
								name: 'Supreme Sneak'
							},
							{
								level: 13,
								name: 'Use Magic Device'
							},
							{
								level: 17,
								name: 'Thief\'s Reflexes'
							}
						]
					},
					{
						name: 'Assassin',
						features: [
							{
								level: 3,
								name: 'Bonus Proficiencies'
							},
							{
								level: 3,
								name: 'Assassinate'
							},
							{
								level: 9,
								name: 'Infiltration Expertise'
							},
							{
								level: 13,
								name: 'Impostor'
							},
							{
								level: 17,
								name: 'Death Strike'
							}
						]
					},
					{
						name: 'Arcane Trickster',
						features: [
							{
								level: 3,
								name: 'Spellcasting'
							},
							{
								level: 3,
								name: 'Mage Hand Legerdemain'
							},
							{
								level: 9,
								name: 'Magical Ambush'
							},
							{
								level: 13,
								name: 'Versatile Trickster'
							},
							{
								level: 17,
								name: 'Spell Thief'
							}
						]
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
				features: [
					{
						level: 1,
						name: 'Spellcasting'
					},
					{
						level: 2,
						name: 'Font of Magic'
					},
					{
						level: 3,
						name: 'Metamagic'
					},
					{
						level: 10,
						name: 'Metamagic'
					},
					{
						level: 17,
						name: 'Metamagic'
					},
					{
						level: 20,
						name: 'Sorcerous Restoration'
					}
				],
				pathName: 'Sorcerous Origin',
				pathLevel: 1,
				paths: [
					{
						name: 'Draconic Bloodline',
						features: [
							{
								level: 1,
								name: 'Dragon Ancestor'
							},
							{
								level: 1,
								name: 'Dragonic Resilience'
							},
							{
								level: 6,
								name: 'Elemental Affinity'
							},
							{
								level: 14,
								name: 'Dragon Wings'
							},
							{
								level: 18,
								name: 'Draconic Presence'
							}
						]
					},
					{
						name: 'Wild Magic',
						features: [
							{
								level: 1,
								name: 'Wild Magic Surge'
							},
							{
								level: 1,
								name: 'Tides of Chaos'
							},
							{
								level: 6,
								name: 'Bend Luck'
							},
							{
								level: 14,
								name: 'Controlled Chaos'
							},
							{
								level: 18,
								name: 'Spell Bombardment'
							}
						]
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
				features: [
					{
						level: 1,
						name: 'Pact Magic'
					},
					{
						level: 2,
						name: 'Eldritch Invocations'
					},
					{
						level: 3,
						name: 'Pact Boon'
					},
					{
						level: 11,
						name: 'Mystic Arcanum (6th Level)'
					},
					{
						level: 13,
						name: 'Mystic Arcanum (7th Level)'
					},
					{
						level: 15,
						name: 'Mystic Arcanum (8th Level)'
					},
					{
						level: 17,
						name: 'Mystic Arcanum (9th Level)'
					},
					{
						level: 20,
						name: 'Eldritch Master'
					}
				],
				pathName: 'Otherworldly Patron',
				pathLevel: 1,
				paths: [
					{
						name: 'The Archfey',
						features: [
							{
								level: 1,
								name: 'Expanded Spell List'
							},
							{
								level: 1,
								name: 'Fey Presence'
							},
							{
								level: 6,
								name: 'Misty Escape'
							},
							{
								level: 10,
								name: 'Beguiling Defenses'
							},
							{
								level: 14,
								name: 'Dark Delirium'
							}
						]
					},
					{
						name: 'The Fiend',
						features: [
							{
								level: 1,
								name: 'Expanded Spell List'
							},
							{
								level: 1,
								name: 'Dark One\'s Blessing'
							},
							{
								level: 6,
								name: 'Dark One\'s Own Luck'
							},
							{
								level: 10,
								name: 'Fiendish Resilience'
							},
							{
								level: 14,
								name: 'Hurl Through Hell'
							}
						]
					},
					{
						name: 'The Great Old One',
						features: [
							{
								level: 1,
								name: 'Expanded Spell List'
							},
							{
								level: 1,
								name: 'Awakened Mind'
							},
							{
								level: 6,
								name: 'Entropic Ward'
							},
							{
								level: 10,
								name: 'Thought Shield'
							},
							{
								level: 14,
								name: 'Create Thrall'
							}
						]
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
				features: [
					{
						level: 1,
						name: 'Spellcasting'
					},
					{
						level: 1,
						name: 'Arcane Recovery'
					},
					{
						level: 18,
						name: 'Spell Mastery'
					},
					{
						level: 20,
						name: 'Signature Spells'
					}
				],
				pathName: 'Arcane Tradition',
				pathLevel: 2,
				paths: [
					{
						name: 'School of Abjuration',
						features: [
							{
								level: 2,
								name: 'Abjuration Savant'
							},
							{
								level: 2,
								name: 'Arcane Ward'
							},
							{
								level: 6,
								name: 'Projected Ward'
							},
							{
								level: 10,
								name: 'Improved Abjuration'
							},
							{
								level: 14,
								name: 'Spell Resistance'
							}
						]
					},
					{
						name: 'School of Conjuration',
						features: [
							{
								level: 2,
								name: 'Conjuration Savant'
							},
							{
								level: 2,
								name: 'Minor Conjuration'
							},
							{
								level: 6,
								name: 'Benign Transposition'
							},
							{
								level: 10,
								name: 'Focused Conjuration'
							},
							{
								level: 14,
								name: 'Durable Summons'
							}
						]
					},
					{
						name: 'School of Divination',
						features: [
							{
								level: 2,
								name: 'Divination Savant'
							},
							{
								level: 2,
								name: 'Portent'
							},
							{
								level: 6,
								name: 'Expert Divination'
							},
							{
								level: 10,
								name: 'The Third Eye'
							},
							{
								level: 14,
								name: 'Greater Portent'
							}
						]
					},
					{
						name: 'School of Enchantment',
						features: [
							{
								level: 2,
								name: 'Enchantment Savant'
							},
							{
								level: 2,
								name: 'Hypntic Gaze'
							},
							{
								level: 6,
								name: 'Instinctive Charm'
							},
							{
								level: 10,
								name: 'Split Enchantment'
							},
							{
								level: 14,
								name: 'Alter Memories'
							}
						]
					},
					{
						name: 'School of Evocation',
						features: [
							{
								level: 2,
								name: 'Evocation Savant'
							},
							{
								level: 2,
								name: 'Sculpt Spells'
							},
							{
								level: 6,
								name: 'Potent Cantrip'
							},
							{
								level: 10,
								name: 'Empowered Evocation'
							},
							{
								level: 14,
								name: 'Overchannel'
							}
						]
					},
					{
						name: 'School of Illusion',
						features: [
							{
								level: 2,
								name: 'Illusion Savant'
							},
							{
								level: 2,
								name: 'Improved Minor Illusion'
							},
							{
								level: 6,
								name: 'Malleable Illusions'
							},
							{
								level: 10,
								name: 'Illusory Self'
							},
							{
								level: 14,
								name: 'Illusory Reality'
							}
						]
					},
					{
						name: 'School of Necromancy',
						features: [
							{
								level: 2,
								name: 'Necromancy Savant'
							},
							{
								level: 2,
								name: 'Grim Harvest'
							},
							{
								level: 6,
								name: 'Undead Thrall'
							},
							{
								level: 10,
								name: 'Inured To Death'
							},
							{
								level: 14,
								name: 'Command Undead'
							}
						]
					},
					{
						name: 'School of Transmutation',
						features: [
							{
								level: 2,
								name: 'Transmutation Savant'
							},
							{
								level: 2,
								name: 'Minor Alchemy'
							},
							{
								level: 6,
								name: 'Transmuter\'s Stone'
							},
							{
								level: 10,
								name: 'Shapechanger'
							},
							{
								level: 14,
								name: 'Master Transmuter'
							}
						]
					}
				]
			}
		];
		character.class = $scope.classes[0]; 

		$scope.pathByName = {};
		angular.forEach($scope.classes, function(classe) {
			angular.forEach(classe.paths, function(path) {
				$scope.pathByName[path.name] = path;
			});
		});

		$scope.bgs = [
			{
				name: 'Acolyte',
				skills: ['insight', 'religion'],
				feature: 'Shelter of the Faithfull'
			},
			{
				name: 'Charlatan',
				skills: ['deception', 'sleightOfHand'],
				feature: 'False Identity'
			},
			{
				name: 'Criminal',
				skills: ['deception', 'stealth'],
				feature: 'Criminal Contact'
			},
			{
				name: 'Entertainer',
				skills: ['acrobatics', 'performance'],
				feature: 'By Popular Demand'
			},
			{
				name: 'Folk Hero',
				skills: ['animalHandling', 'survival'],
				feature: 'Rustic Hospitality'
			},
			{
				name: 'Guild Artisan',
				skills: ['insight', 'persuasion'],
				feature: 'Guild Membership'
			},
			{
				name: 'Hermit',
				skills: ['medecine', 'religion'],
				feature: 'Discovery'
			},
			{
				name: 'Noble',
				skills: ['history', 'persuasion'],
				feature: 'Position of Privilege'
			},
			{
				name: 'Outlander',
				skills: ['athletics', 'survival'],
				feature: 'Wanderer'
			},
			{
				name: 'Sage',
				skills: ['arcana', 'history'],
				feature: 'Researcher'
			},
			{
				name: 'Sailor',
				skills: ['athletics', 'perception'],
				feature: 'Ship\'s Passage'
			},
			{
				name: 'Soldier',
				skills: ['athletics', 'intimidation'],
				feature: 'Military Rank'
			},
			{
				name: 'Urchin',
				skills: ['sleightOfHand', 'stealth'],
				feature: 'City Secrets'
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

		character.updateFeatures = function() {
			var features = [];
			angular.forEach(character.class.features, function(feature) {
				if (character.level >= feature.level) {
					features.push(feature);
				}
			});
			angular.forEach(character.path.features, function(feature) {
				if (character.level >= feature.level) {
					features.push(feature);
				}
			});
			character.features = features;
		};

		$scope.$watch('character.conMod', function(newValue, oldValue) {
			character.updateHPMax();
		});

		$scope.$watch('character.level', function(newValue, oldValue) {
			character.profMod = 1 + Math.ceil(newValue / 4);
			character.updateHPMax();
			character.updateST();
			character.updateSkill();
			character.updateFeatNumber();
			character.updateFeatures();
		});

		$scope.$watch('character.class', function(newValue, oldValue) {
			character.pathName = newValue.paths[0].name; 
			character.updateHPMax();
			character.updateST();
			character.updateSkillList();
			character.updateSkill();
			character.updateFeatNumber();
			character.updateFeatures();
		});

		$scope.$watch('character.pathName', function(newValue, oldValue) {
			character.path = $scope.pathByName[newValue];
		});

		$scope.$watch('character.path', function(newValue, oldValue) {
			character.updateFeatures();
		});

		$scope.$watch('character.bg', function(newValue, oldValue) {
			character.updateSkillList();
			character.updateSkill();
		});

		$scope.$watch('character.race', function(newValue, oldValue) {
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
				path: character.pathName
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
			character.pathName = save.path;
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
