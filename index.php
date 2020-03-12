<html>

<head>
    <title>Blocks demo</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <!-- <link rel="stylesheet" href="style.css"> -->
    <link rel="stylesheet" href="cards.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
    <div id="start-the-game" onclick="initiate()">
        Start
    </div>
    <script src="scripts/gameboard.js"></script>

    <!-- particles.js library -->
    <script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
    <script src="scripts/particles.js"></script>
</body>

</html>