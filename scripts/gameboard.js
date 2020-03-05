// Game settings
var viewspeed = 500; // time the player can see the answers MS
var timeout = 1000;  // Time after all cards showed
var health = 5;
var level = 50;
var difficulty = 3;
var showcontent = false; // show numbers inside the cards
// Game settings end

var play_array = [];
var anim = 0; 
var y = 1;
var correct_answers = 0;


function initiate(){ // Call all the functions
    calc_difficulty();
    console.log(level);
    make_playground();
    randomized();
    animation();
    console.log(difficulty);
}

function calculateCardSize(level) {
    let sqrt = Math.sqrt(level);
    
    return 100/sqrt - 3;
}
// function animation(){
//     for(anim = 0; play_array.length > anim; anim++){
//         // document.getElementById(play_array[anim]).style.border = "3px solid green";
//         console.log(anim);
//         // $("#"+play_array[anim]).addClass('animations');

//         // setTimeout(function () { 
//         //     $("#"+play_array[anim]).removeClass('animations');
//         // }, 2000);
        
        
//         }
// }
function animation () {
    setTimeout(function () {
        $("#"+play_array[anim]).addClass('animations')
        anim++;              
        if (play_array.length > anim) {
           animation();
        }else{
            basic_timeout();
        }
    }, viewspeed)
 }
 function basic_timeout () {
    setTimeout(function () {
            $(".card").removeClass('animations');
    }, timeout)
 }
function clear_values(){
   play_array = [];
   randoms = null;
}
function calc_difficulty(){
    if (level < 9){ // The level value cannot be lower than 9.
        level = 9;
    } else{
        level = level + 1;
    }
    difficulty = (35/100) * level + difficulty; //calc the difficulty to scale with the level
    difficulty = Math.round(difficulty) // Makes the difficulty value a integer
}
function make_playground(){
    //Loop out cards on the playground
    let cardSize = calculateCardSize(level)
    var i;
    for (i = 1; i < level; i++) { //Creates a new div for each loop wth the attributes and content set below.
        var div = document.createElement('div');
        if(showcontent == true){
        div.textContent = i;
        }
        div.setAttribute('class', 'card');
        div.style.height = cardSize + '%';
        div.style.width = cardSize + '%';
        div.setAttribute('id', i);
        div.setAttribute('onClick', 'reply_click(this.id)'); // add an onClick event to the div that sends the id of it to the funcition reply_click()

        document.getElementById("wrapper").appendChild(div);
    }
}
function clear_playground(){ //When called, makes the playground empty
    document.getElementById("wrapper").innerHTML = "";
    clear_values();
} //hello

function randomized(){  // Fills the array with random numbers. Max number determines by level
        while(play_array.length < difficulty){
            var randoms = Math.floor(Math.random() * level) + 1;
            if(play_array.indexOf(randoms) === -1){ 
                play_array.push(randoms);
            }
        }
}

function reply_click(clicked_id){ // Grabs the value from the id on the div/card when it's clicked on.
    clicked_id = Number(clicked_id);
    console.log("level="+level+"\n difficulty="+difficulty+"\n array="+play_array+"\n clicked_id="+clicked_id); // Console info

    if(play_array.includes(clicked_id)){ // Takes the id from the div and searches in the array for it. Returns either true or false.
        document.getElementById(clicked_id).style.border = "3px solid green"; // Makes the div/cards border green
        document.getElementById(clicked_id).style.backgroundColor = "green";
        correct_answers++;
        if(play_array.length == correct_answers)
        {
            alert("You survived this round!");
        }
    }else{
        document.getElementById(clicked_id).style.border = "3px solid red"; // Makes the div/cards border red
        document.getElementById(clicked_id).style.backgroundColor = "red";
        health--;
        console.log("Liv: " + health);
        if(health == 0)
        {
            alert("Game over!");
        }
    }
    document.getElementById("alerted").innerHTML = clicked_id; // Just prints it out on the screen for testing
}         
/*
pseudocode:'
/
            if (exists) clicked_id= randomized[x] = true
                if (value already added skip(Done with array, if exists/contains)) = false
                    variable add 1
                        if variable(int) == all answers(int) = true
                            next round
                            add score
            else
                health - 1
                if health < 5
                    gameover
*/