// gameboard.js required


function when_clicked(){
    document.getElementById("particles-js").style.backgroundImage = "url(assets/textures/options.png)";
    document.getElementById("start-the-game").style.display = "none";
    document.getElementById("options-window").style.display = "flex";
}
function when_clicked_back(){
    document.getElementById("particles-js").style.backgroundImage = "url(assets/textures/bg.png)";
    document.getElementById("start-the-game").style.display = "flex";
    document.getElementById("options-window").style.display = "none";
}
function check() {
    showcontent = true;
    document.getElementById("button-text-01").innerHTML = "Turn off card numbers";
  }
function uncheck() {
    showcontent = false;
    document.getElementById("button-text-01").innerHTML = "Turn on card numbers";
}
function cardspeed(){
       viewspeed = document.getElementById("card-speed-number-value").value;
       document.getElementById("range-value").innerText = document.getElementById("card-speed-number-value").value;
}