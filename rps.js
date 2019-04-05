
document.addEventListener("DOMContentLoaded", function(event) { 
    //do work
    var choices = [
        {
            "name":"rock",
            "beats":"scissors"
        },
        {
            "name":"scissors",
            "beats":"paper"
        },
        {
            "name":"paper",
            "beats":"rock"
        }
    ];
    var randomNum;
    var computerChoice;
    var userChoice;
    var gameOver = false;
    function whoWins(computerChoice, userChoice){
        if (computerChoice.beats == userChoice){
            return "Failure. The machines win."
        } else if (computerChoice.name == userChoice) {
            return "You fought well. Now dust yourself off - tomorrow's another day."
        } else {
            return "Victory! The humans have beaten the machines. Thank you for your hard work."
        }
    }
    function playAgain(){
        document.querySelector('.choices').setAttribute('style','opacity: 1');
        document.getElementById('playAgain').setAttribute('style','opacity: 0');
        document.getElementById('result').setAttribute('style','opacity: 0;');
    }
    var userChoices = document.querySelectorAll('.choice img');
    for (i=0;i<userChoices.length;i++) {
        userChoices[i].addEventListener('click', function(){
            if (!gameOver) {
                randomNum = Math.floor(Math.random() * Math.floor(3));
                computerChoice = choices[randomNum];
                console.log("computer choice: " + computerChoice.name);
                userChoice = this.getAttribute('data');
                console.log('user choice: ' + userChoice);
                document.getElementById('result').innerHTML = whoWins(computerChoice, userChoice);
                // console.log(document.querySelectorAll('.choice img')[0].setAttribute('style','display: none'));
                document.querySelector('.choices').setAttribute('style','opacity: 0');
                document.getElementById('result').setAttribute('style','opacity: 1');
                document.getElementById('playAgain').setAttribute('style','opacity: 1;');

            }
            
        });
    }
    document.querySelector('#playAgain a').addEventListener('click',function(){
        playAgain();
    });
    
  });
