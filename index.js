// No peeking :(

var activities = [
    "some fun",
    "a party",
    "a game night",
    "some sleep",
    "another round",
    "a dance showdown",
    "a tour around the world",
    "some lunch",
    "a feast",
    "a round of Jackbox",
    "a match",
    "a one-on-one",
    "some pizza",
    "a rap battle",
    "a dip on the pool",
    "a chat",
    "some exercise",
    "a RPG campaign",
    "a Minecraft play session",
    "a ride",
    "a cookoff",
    "a lesson",
    "a bubble bath",
    "some shenanigans",
    "a game jam",
    "some chocolates",
    "some sweets",
    "another run",
    "another playthrough",
    "a beatbox beatoff",
    "a heist",
    "a race",
];

var actions = [
    "rule the world",
    "play some Minecraft",
    "become one with the earth",
    "sneak on some trash pandas"
]

var misc = [
    "Let's-a-goooo!!!",
    "Imma keep a 2 meter distance away from you",
];

function getRandomFromArray(arrayName) {
    return window[arrayName][Math.floor(Math.random() * window[arrayName].length)];
}

function generateTodo() {
    
    var texts = [
        "Let's have <activities>",
        "You up for <activities>?",
        "Imma go have <activities>",
        "We are gonna have <activities>!",
        "<misc>",
    ];

    var text = texts[Math.floor(Math.random() * texts.length)];
    
    // With help from https://stackoverflow.com/questions/6323417/regex-to-extract-all-matches-from-string-using-regexp-exec
    var re = /<(\w+)>/;
    var m;
    do {
        m = re.exec(text);
        if (m) {
            console.log(m[0], m[1])
            text = text.replace(m[0], getRandomFromArray(m[1]));
        }
    } while (m)

    return text;
}

function changeActionText() {
    
}

window.onload = function() {
    document.getElementById("actionText").innerHTML = generateTodo();
}