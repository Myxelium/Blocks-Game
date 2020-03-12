// Game settings
var viewspeed = 500; // time the player can see the answers MS
var timeout = 1000; // Time after all cards showed
var health = 5;
var newPlayground = 3; // replaces the level variable
var level = newPlayground * newPlayground;
var difficulty = -1;
var showcontent = false; // show numbers inside the cards
// Game settings end
var allow_click = 0;
var play_array = [];
var anim = 0;
var y = 1;
var correct_answers = 0;
var avoid_repeat = []; // When a card is clicked, the player cant click on same card more than once
var randoms = 0;
var room_level;
var no_fail_round = 0;
var round_values = 0;

function initiate() { // Call all the functions
    round_value();
    lifes();
    prep();
    calc_difficulty();
    console.log(level);
    make_playground();
    randomized();
    animation();
    console.log(difficulty);
}

function nextRound() {
    round_value();
    clear_playground();
    clear_values()
    calc_difficulty();
    console.log(level);
    make_playground();
    randomized();
    animation();
    console.log(difficulty);
}

function prep() { // handles everythiing before the game starts
    document.getElementById("start-the-game").style.visibility = "hidden"; //hides the start button
}

function round_value() {
    round_values++;
    document.getElementById("round").innerHTML = round_values;
}

function animation() { //Animations, shows what cards you click on
    setTimeout(function () {
        $("#" + play_array[anim]).addClass('animations')
        anim++;
        if (play_array.length > anim) {
            animation();
        } else {
            basic_timeout();
            allow_click = 1;
        }
    }, viewspeed)
}

function basic_timeout() { // small timeout before you can click and the shown cards disapear.
    setTimeout(function () {
        $(".card").removeClass('animations');
    }, timeout)
}

function lifes() {
    for (let lives = 0; lives < health; lives++) {
        document.getElementById("health").innerHTML += '<img src="assets/textures/heart.png" alt="health">';
    }
}

function clear_values() { // Resets the values for next round.
    newPlayground = newPlayground + 0.3;
    no_fail_round = 0;
    difficulty = -1;
    level = Math.ceil(newPlayground * newPlayground);
    play_array = [];
    randoms = 0;
    i = 0;
    card_ids = 0;
    y = 0;
    anim = 0;
    clicked_id = 0;
    allow_click = 0;
    avoid_repeat = [];
    correct_answers = 0;
    console.log("level=" + level + "\n difficulty=" + difficulty + "\n array=" + play_array + "\n clicked_id=" + clicked_id); // Console info
    calc_difficulty();
    // if (difficulty < level) {

    // }
}

function calc_difficulty() {
    if (level <= 9) { // The level value cannot be lower than 9.
        level = 9;
    } else {
        level = level + 1;
    }
    difficulty = (35 / 100) * level + difficulty; //calc the difficulty to scale with the level
    difficulty = Math.round(difficulty) // Makes the difficulty value a integer
}

function make_playground() {
    //Loop out cards on the playground
    var i = 0;
    var card_ids = 0;
    for (var y = 0; y < newPlayground; y++) {
        var row = document.createElement('div');
        row.setAttribute('id', 'card-row' + y);
        row.setAttribute('class', 'card-row');
        document.getElementById("test-group").appendChild(row);
        for (i = 0; i < newPlayground; i++) { //Creates a new div for each loop wth the attributes and content set below.
            card_ids++;
            var div = document.createElement('div');
            div.setAttribute('class', 'card');
            div.setAttribute('id', card_ids);
            div.setAttribute('onClick', 'reply_click(this.id)'); // add an onClick event to the div that sends the id of it to the funcition reply_click()
            document.getElementById('card-row' + y).appendChild(div);
            if (showcontent == true) {
                document.getElementById(card_ids).classList.add("printid");
            }
        }
    }
}

function clear_playground() { //When called, makes the playground empty
    document.getElementById("test-group").innerHTML = "";
    clear_values();
} //hello

function randomized() { // Fills the array with random numbers. Max number determines by level
    while (play_array.length < difficulty) {
        randoms = Math.floor(Math.random() * level);
        if (randoms != 0) {
            if (play_array.indexOf(randoms) === -1) {
                play_array.push(randoms);
            }
        }
    }
}

function reply_click(clicked_id) { // Grabs the value from the id on the div/card when it's clicked on.
    clicked_id = Number(clicked_id);
    console.log("level=" + level + "\n difficulty=" + difficulty + "\n array=" + play_array + "\n clicked_id=" + clicked_id); // Console info

    if (play_array.includes(clicked_id)) { // Takes the id from the div and searches in the array for it. Returns either true or false.
        // document.getElementById(clicked_id).style.border = "3px solid green"; // Makes the div/cards border green
        if (allow_click === 1) {
            if (!avoid_repeat.includes(clicked_id)) {
                document.getElementById(clicked_id).style.backgroundColor = "green";
                document.getElementById(clicked_id).style.backgroundImage = "url(assets/textures/crate-green.png)";
                avoid_repeat.push(clicked_id);
                correct_answers++;
                let x = document.getElementById("score").textContent;

                if (play_array.length == correct_answers) {
                    if (no_fail_round != 0) {
                        document.getElementById("score").innerHTML = parseInt(x) * 1 + 13;
                    } else {
                        document.getElementById("score").innerHTML = parseInt(x) * 2 + 30;
                    }
                    alert("You survived this round!");
                    nextRound();
                }
            }
        }
    } else {
        //Avoid repeat fix
        if (allow_click === 1) {
            if (!avoid_repeat.includes(clicked_id)) {
                // document.getElementById(clicked_id).style.border = "3px solid red"; // Makes the div/cards border red
                document.getElementById(clicked_id).style.backgroundColor = "red";
                document.getElementById(clicked_id).style.backgroundImage = "url(assets/textures/crate_bad.png)";

                avoid_repeat.push(clicked_id);

                health--;
                let list = document.getElementById("health");
                list.removeChild(list.childNodes[0]);
                no_fail_round = 1;
                console.log("Liv: " + health);
                if (health == 0) {
                    alert("Game over!");
                }
            }
        }

    }
    document.getElementById("alerted").innerHTML = clicked_id; // Just prints it out on the screen for testing
}