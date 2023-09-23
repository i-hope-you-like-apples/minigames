let names = [
    "Adorable Artist",
    "Adorable Assistant",
    "Adorable Comedian",
    "Adorable Deer",
    "Adorable Ogre",
    "Adult Assistant",
    "Adult Giant",
    "Adult Hero",
    "Ancient Philosopher",
    "Angry Aborigine",
    "Angry Archer",
    "Angry Artist",
    "Angry Friend",
    "Angry Hunter",
    "Angry Singer",
    "Annoyed Archer",
    "Annoyed Deer",
    "Annoyed Enemy",
    "Annoyed Fighter",
    "Annoyed Foe",
    "Annoyed Kitty",
    "Annoyed Nurse",
    "Annoyed Pastor",
    "Annoyed Worm",
    "Arrogant Horde",
    "Arrogant Mermaid",
    "Arrogant Nymph",
    "Arrogant Phantom",
    "Awoken Aborigine",
    "Awoken Archer",
    "Awoken Witch",
    "Beautiful Baby",
    "Beautiful Blacksmith",
    "Biased Barbarian",
    "Biased Bard",
    "Biased Puppy",
    "Black Bear",
    "Blazed Bard",
    "Blazed Bird",
    "Blazed Blacksmith",
    "Blazed Bug",
    "Blazed Cat",
    "Bloody Baby",
    "Bloody Bard",
    "Blue Baby",
    "Blue Baker",
    "Blue Bear",
    "Blue Bird",
    "Blue Bug",
    "Blue Devil",
    "Blue Overlord",
    "Bored Artist",
    "Bored Boar",
    "Bored Singer",
    "Brave Baby",
    "Brave Baker",
    "Brave Barbarian",
    "Brave Enemy",
    "Brave Pastor",
    "Broken Bard",
    "Broken Governor",
    "Busy Baker",
    "Busy Singer",
    "Cheerful Camper",
    "Cheerful Cat",
    "Cheerful Farmer",
    "Cheerful Thief",
    "Clever Bear",
    "Clever Cat",
    "Clever Pastor",
    "Confused Camper",
    "Confused Comedian",
    "Confused Friend",
    "Confused Guru",
    "Crazed Captain",
    "Crazed Necromant",
    "Crazy Captain",
    "Crazy Cat",
    "Crazy Dog",
    "Crazy Tyrant",
    "Creepy Assistant",
    "Creepy Bug",
    "Cruel Captain",
    "Cruel Cow",
    "Cruel Giant",
    "Cruel Worm",
    "Curious Baby",
    "Curious Camper",
    "Curious Captain",
    "Curious Cat",
    "Curious Horde",
    "Cute Captain",
    "Cute Inhabitant",
    "Cute Sheep",
    "Cute Spectator",
    "Cute Troll",
    "Dead Blacksmith",
    "Dead Ogre",
    "Drunk Assistant",
    "Drunk Dancer",
    "Drunk Deer",
    "Drunk Mage",
    "Drunk Ogre",
    "Drunk Thief",
    "Drunk Worker",
    "Eastern Chief",
    "Eastern Enemy",
    "Eastern Singer",
    "Eastern Tyrant",
    "Eating Sheep",
    "Eating Villain",
    "Embarrassed Butterfly",
    "Embarrassed Comedian",
    "Embarrassed Enemy",
    "Embarrassed Farmer",
    "Energetic Enemy",
    "Energetic Guy",
    "Energetic Lady",
    "Energetic Loser",
    "Energetic Nymph",
    "Energetic Phantom",
    "Energetic Sheep",
    "Energetic Thief",
    "Evil Butterfly",
    "Evil Enemy",
    "Evil Guardian",
    "Evil Lady",
    "Evil Man",
    "Evil Thief",
    "Excited Wanderer",
    "Famous Bird",
    "Famous Dog",
    "Famous Ghoul",
    "Famous Hunter",
    "Famous Jurist",
    "Famous Ogre",
    "Fighting Bug",
    "Fighting Camper",
    "Fighting Jurist",
    "Flying Bug",
    "Flying Comedian",
    "Flying Foe",
    "Flying Kitty",
    "Flying Wife",
    "Foolish Guru",
    "Gigantic Captain",
    "Gigantic Ghoul",
    "Gigantic Giant",
    "Gigantic Governor",
    "Glamorous Guardian",
    "Glamorous King",
    "Glamorous Mermaid",
    "Glorious Giant",
    "Glorious Guy",
    "Glorious Lumberjack",
    "Good Guru",
    "Good Guy",
    "Green Dancer",
    "Green Giant",
    "Green Guru",
    "Green Guy",
    "Happy Guy",
    "Happy Horse",
    "Happy Laborer",
    "Happy Witch",
    "Hidden Hound",
    "Hidden Hunter",
    "Huge Dog",
    "Huge Horse",
    "Huge Hound",
    "Huge Optimist",
    "Hunting Hunter",
    "Hunting Puppy",
    "Innocent Enemy",
    "Innocent Sheep",
    "Invisible Dancer",
    "Invisible Hunter",
    "Invisible Islander",
    "Invisible Lord",
    "Invisible Trickster",
    "Jealous Cat",
    "Jealous Necromant",
    "Jealous Trickster",
    "Kind Ghoul",
    "Kind Monk",
    "Lively Laborer",
    "Lively Lady",
    "Lively Lord",
    "Lively Warrior",
    "Lonely Laborer",
    "Lonely Lord",
    "Lonely Puppy",
    "Lovely Lord",
    "Mad Enemy",
    "Mad Man",
    "Mad Singer",
    "Mad Worm",
    "Magic Man",
    "Mighty Aborigine",
    "Mighty Merchant",
    "Mighty Miner",
    "Mysterious Barbarian",
    "Mysterious Captain",
    "Mysterious Cat",
    "Nervous Baker",
    "Nervous Cow",
    "Nervous Dog",
    "Nervous Lady",
    "Nervous Merchant",
    "Nervous Nymph",
    "Nervous Worker",
    "Northern Giant",
    "Northern Guardian",
    "Northern Nanny",
    "Northern Nymph",
    "Offensive Baker",
    "Offensive Captain",
    "Offensive Ogre",
    "Offensive Optimist",
    "Offensive Overlord",
    "Offensive Witch",
    "Orange Thief",
    "Pink Philosopher",
    "Polite Camper",
    "Poor Prisoner",
    "Powerful Fighter",
    "Powerful Poet",
    "Powerful Puppy",
    "Proud Giant",
    "Proud Guardian",
    "Proud Monk",
    "Proud Phantom",
    "Purple Assistant",
    "Purple Philosopher",
    "Purple Puppy",
    "Quick Bear",
    "Quick Comedian",
    "Quick Giant",
    "Quick Worm",
    "Random Necromant",
    "Random Wanderer",
    "Rich Captain",
    "Rich Enemy",
    "Rich Horse",
    "Rich Hound",
    "Rich Lady",
    "Rich Mage",
    "Rich Prisoner",
    "Rich Rabbit",
    "Rich Worker",
    "Rough Aborigine",
    "Rough Barbarian",
    "Rough Beauty",
    "Rough Sheep",
    "Running Engineer",
    "Running Rabbit",
    "Secret Artist",
    "Secret Lord",
    "Secret Nurse",
    "Secret Philosopher",
    "Secret Soldier",
    "Secret Spectator",
    "Secret Trickster",
    "Secret Wanderer",
    "Secret Worm",
    "Short Bard",
    "Short Cow",
    "Short Singer",
    "Silly Captain",
    "Silly Dog",
    "Silly Sheep",
    "Smiling Bear",
    "Smiling Fighter",
    "Smiling Sheep",
    "Smiling Spectator",
    "Southern Comedian",
    "Strange Blacksmith",
    "Strange Cow",
    "Strange Dancer",
    "Strange Soldier",
    "Strange Spectator",
    "Strange Troll",
    "Strange Zombie",
    "Strong Artist",
    "Strong Bear",
    "Strong Jurist",
    "Strong Spectator",
    "Sweet Sheep",
    "Sweet Soldier",
    "Talented Giant",
    "Talented Nanny",
    "Talented Rabbit",
    "Talented Thief",
    "Talented Tyrant",
    "Tall Jurist",
    "Tall Philosopher",
    "Tall Thief",
    "Tall Trickster",
    "Tall Tyrant",
    "Tearful Beauty",
    "Tearful Thief",
    "Tearful Trickster",
    "Thoughtful Peacock",
    "Thoughtful Troll",
    "Thoughtful Tyrant",
    "Thoughtful Zombie",
    "Tiny Baker",
    "Tiny Phantom",
    "Tiny Troll",
    "Tired Guru",
    "Tired Lumberjack",
    "Ugly Baby",
    "Ugly Dancer",
    "Ugly Lord",
    "Upset Deer",
    "Upset Loser",
    "Walking Wanderer",
    "Wandering Enemy",
    "Wandering Hunter",
    "Wandering Wanderer",
    "Western Prisoner",
    "White Horse",
    "Wild Merchant",
    "Wild Wanderer",
    "Wonderful Hunter",
    "Wonderful Tyrant",
    "Worried Barbarian",
];

export function generateRandomName() {
    return names[Math.floor(Math.random() * names.length)];
}