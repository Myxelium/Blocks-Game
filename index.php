
<html>
    <head>

              <title>My Electron Frameless Window</title>
			  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
              <link rel="stylesheet" href="style.css">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
    <body>
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
                <div id="wrapper"></div>
            </div>
            <button type="button" style="position:fixed" onclick="initiate()">Start</button>
            <button type="button" style="position:fixed; right: 300px;" onclick="clear_playground()">Clear</button>
            <div id="alerted"></div>
        
        <script src="scripts/gameboard.js"></script>
    </body>
</html>
