const names = [
    'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Coollastname',
  'enter_name_here',
];

const thoughts = [
    'I love the way the air smells after it rains.',
    'I think I might be addicted to coffee.',
    'I am so excited to start this new adventure!',
    'What small creative project could I take on to enhance my portfolio?',
    'I am so grateful for my friends and family.',
    'How can I measure my progress in becoming a developer beyond technical skills?',
    'How can I challenge myself by learning a new framework or API this month?',
'How has my perspective on development changed since starting the bootcamp?',
];

const friends = [
    'John',
    'Jane',
    'Jake',
    'Jill',
    'Jen',
    'Jim',
    'Joan',
    'Jared',
    'Jesse',
    'Jenny',
    'Jasmine',
    'Jaxon',
    'Jude',
    'Jules',
    'Julia',
    'Julian',
    'Julius',
    'Jude',
];

const reactions =[
     "Thank you so much!",
    "I appreciate your help!",
    "That's a great idea!",
    "I love that!",
    "I agree!",
    "I think you're right!",
    "I appreciate you!",
    "I'm grateful for you!",
    "I'm so glad you're here!",
    "You're the best!",
    "I'm so grateful for you!",
]
//gets a random array item
const getRandomArrItem = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

//funtion for getting a random name
const getRandomName = () => {
    return `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;
};

const getRandomThought = (init: number) => {
    let results = [];
    for (let i = 0; i < init; i++) {
        results.push({
            thoughtText: getRandomArrItem(thoughts),
            username: getRandomName(),
        });
    }
    return results;
};

//function for getting random friends

const getRandomFriends = (init: number) => {
    let results = [];
    for (let i = 0; i < init; i++) {
        results.push({
            username: getRandomArrItem(friends),
        });
    }
    return results;
};

//function for getting random reactions
const getRandomReactions = (init: number) => {
    let results = [];
    for (let i = 0; i < init; i++) {
        results.push({
            reactionBody: getRandomArrItem(reactions),
            username: getRandomName(),
        });
    }
    return results;
};

