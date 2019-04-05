<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Rock Paper Scissors</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- <link rel="stylesheet" type="text/css" media="screen" href="main.css"> -->
    <script src="rps.js"></script>
    <style>
        .choice img {
            max-width: 200px;
            height: auto;
            float: none;
            display: block;
            margin: 0 auto;
        }
        .choice img:hover {
            cursor: crosshair;
        }
        .page-center {
            max-width: 900px;
            margin: 0 auto;
        }
        .choices {
            /* height: 200px; */
            display: flex;
        }
        .choice {
            flex-grow: 1;
        }
        #result {
            margin-top: 100px;
            text-align: center;
            opacity: 0;
        }
        #playAgain {
            opacity: 0;
            /* display: none; */
            text-align: center;
        }
        * {
            transition: opacity 2s ease;
        }
    </style>
</head>
<body>
    <div class="page-center">
        <div class="choices">
            <div class="choice">
                <img  data="rock" src="https://jooinn.com/images450_/rock-1.jpg">
            </div>
            
            <br>
            <div class="choice">
                    <img  data="paper" src="https://image.freepik.com/free-photo/top-view-pieces-paper-wooden-table_1232-744.jpg">
            </div>
            
            <br>
            <div class="choice">
                    <img  data="scissors" src="https://cdn.pixabay.com/photo/2016/03/31/23/11/scissors-1297454__340.png">
            </div>
            
            <br>
            
        </div>
    </div>
    <div class="page-center">
        <div id="result"></div>
        <div id="playAgain">
            <p>
                <a href="javascript:;">Play Again?</a>
            </p>
        </div>
    </div>
</body>
</html>