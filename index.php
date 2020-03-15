<html>

<head>
    <title>Blocks demo</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <!-- <link rel="stylesheet" href="style.css"> -->
    <link rel="stylesheet" href="cards.css">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0">
    
</head>
<style>
    #particles-js {
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -50;
        background-image: url(assets/textures/bg.png);
        background-size: cover;
    }
</style>
<div id="particles-js"></div>

<body>
<div class="sound_player">
    <audio id="menu_click">
        <source src="assets/sounds/menu_click.wav">
    </audio>
    </div>
    <div id="title-bar">
        <div id="title">
            Blocks
        </div>
        <div id="title-bar-btns">
            <button class="nav-btn-xe" id="min-btn"></button>
            <button class="nav-btn-xe" id="max-btn"></button>
            <button class="nav-btn-xe" id="close-btn"></button>
        </div>
    </div>
    <!--- <div loaded="template/window_settings.html"></div> --->

    <div class="flexwrap">
        <div class="stats">
            <div id="health"></div>
            <div id="container_r">Round:&nbsp;<div id="round"></div>
            </div>
            <div id="container_r">&nbsp;Score:&nbsp;<div id="score">0</div>
            </div>

        </div>
        <div id="wrapper">
            <div id="test-group"></div>
        </div>
    </div>
    <!-- <button type="button">Start</button>
            <button type="button" style="position:fixed; right: 300px;" onclick="clear_playground()">Clear</button> -->
    <div id="alerted"></div>
    <div id="start-the-game">
        <div onmouseover="menu_clicks();" onclick="initiate()">Start</div>
        <div onmouseover="menu_clicks();" onclick="when_clicked()" class="settings">Options</div>
    </div>
    <div id="options-window">
    <div class="cardspeed">
        <div>Card speed:</div>
        <div id="range-value">500</div>
        <input type="range" class="slider" onchange="cardspeed()" id="card-speed-number-value" min="10" max="2000">
    </div>
     <div class="shownumbers-button">
            <div class="button-icon">
                <img src="assets/textures/button_off.png" onclick="menu_clicks();check();document.getElementById('btn-off').style.display = 'none';document.getElementById('btn-on').style.display = 'block';" id="btn-off" alt="off">
                <img src="assets/textures/button_on.png" onclick="menu_clicks();uncheck();document.getElementById('btn-on').style.display = 'none';document.getElementById('btn-off').style.display = 'block';" style="display: none;" id="btn-on" alt="off">
            </div>
            <div id="button-text-01">
                Turn on card numbers
            </div>
     </div>
     <button onclick="menu_clicks();when_clicked_back();" class="menu-nav-button">Back</button>
    </div>
    <div class="overlay">
        <div class="narrator">

        </div>
    </div>
    
    <script src="scripts/gameboard.js"></script>
    <script src="scripts/sound.js"></script>
    <script src="scripts/options.js"></script>
    <!-- particles.js library -->
    <script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
    <script src="scripts/particles.js"></script>
</body>

</html>