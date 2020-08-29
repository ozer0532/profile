// No peeking :(

var iframe, src;

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
    "sneak on some trash pandas",
    "do some mafs",
    "watch Netflix and chill",
    "prank someone",
    "say tounge twisters ten times fast",
    "break the rules",
    "build a website",
    "make a game",
    "look for a unicorn",
    "climb the Eiffel tower",
    "surf tidal waves",
    "hide under a rock",
    "meet Batman",
    "find Davy Jones' Locker",
    "party party partaaayyyy",
    "swim with the fishes",
    "laze under the sun",
    "dissapear into the darkness",
    "whack some bandits",
    "dig up gold doubloons",
    "draw a masterpiece",
    "mix and jam",
    "jam out some tunes",
    "ride a rollercoaster",
    "drink avocado juice",
    "eat some pizza",
    "challenge death",
]

var misc = [
    "Let's-a-goooo!!!",
    "Imma keep a 2 meter distance away from you",
    "I ate the cake",
    "We'll be watching a pig fly",
    "You will stop pressing the refresh button to see more prompts",
    "...is a gift - that's why it's called the present",
    "...is my birthday!! No, jk :P",
    "You are going to blink",
    "Its gonna be high noon somewhere in the world",
    "I'm not an 😁zer... Who am I?",
    "I'll be Boops, Boops Boops",
    "I took a pill in Ibiza",
    "You are a pirate",
    "You shall not pass",
    "Let's finish him!",
    "...the weather forecast is: LEEERROOOYY JEENNKINS",
    "I took an arrow to the knee",
    "Let's do a barrel roll",
    "Imma go jump to a haystack from a building",
    "You go tell CJ that all he had to do was follow the damn train",
    "Mom told me to go play outside",
    "We have a news flash: A fat Italian Plumber can run for hours",
    "I'm running around at the speed of sound",
    "I can speak russian, cuz i bought CS:GO a week ago",
    "You came in to the wrong house, fool!",
    "I wanna be the very best",
    "We gotta catch 'em all",
    "Bagels",
    "I'm tired, let's schleep",
    "I let the dogs out",
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
        "Let's go <actions>!",
        "We shall <actions>",
        "I dare you to <actions>",
        "I wanna go <actions>",
        "<misc>",
    ];

    var text = texts[Math.floor(Math.random() * texts.length)];
    
    // With help from https://stackoverflow.com/questions/6323417/regex-to-extract-all-matches-from-string-using-regexp-exec
    var re = /<(\w+)>/;
    var m;
    do {
        m = re.exec(text);
        if (m) {
            text = text.replace(m[0], getRandomFromArray(m[1]));
        }
    } while (m)

    return text;
}

// Based on https://stackoverflow.com/questions/36388579/prevent-iframe-from-loading-on-mobile
function showIframe() {
    if (window.matchMedia("(min-width: 720px)").matches) {
        if (iframe.src !== src) {
            iframe.src = src;
        }
        iframe.hidden = false;
        document.getElementById("noGame").hidden = true;
    } else {
        iframe.hidden = true;
        document.getElementById("noGame").hidden = false;
    }
}

window.onload = function() {
    document.getElementById("actionText").innerHTML = generateTodo();

    iframe = document.getElementsByTagName("iframe")[0];
    src = iframe.dataset["src"];

    showIframe();
}

window.onresize = function() {
    showIframe();
}