//Defines a global variable for the canvas, so it can easily
//be redrawn if necessary
var canvas = document.getElementById("alien"),
    ctx = canvas.getContext("2d");

//Function to process the grid 
function processCanvas() {

    //Draws the grid
    for (let i = 0; i < 500; i = i + 50) {
        ctx.beginPath();

        if (i != 250) {
            ctx.strokeStyle = "#A9A9A9";
        } else {
            ctx.strokeStyle = "#000000";
        }

        ctx.moveTo(i, 0);
        ctx.lineTo(i, 500);

        ctx.moveTo(0, i);
        ctx.lineTo(500, i);

        ctx.stroke();
    }

    for (let j = 0; j < 500; j = j + 50) {
        ctx.font = "12px Arial";
        ctx.fillText(j / 50 - 5, j + 2, 265);
    }

    for (let k = 0; k < 500; k = k + 50) {
        ctx.font = "12px Arial";
        ctx.fillText(-(k / 50 - 5), 252, k + 15);
    }



}

function addAlien() {
    processCanvas();

    alien_logo = new Image();
    alien_logo.src = "images/alienStock.jpg";
    alien_logo.onload = function() {
        ctx.drawImage(alien_logo, 150, 200, 50, 50);
    }

}

function gameOver() {
    processCanvas();

    var count = 10;
    ctx.font = '48px serif';

    timer = setTimeout(function() {
        count--;
        if (count % 2 == 1) {
            ctx.fillStyle = "#000000";
            ctx.fillText('Game Over! You Won!', 30, 50);
        } else {
            ctx.fillStyle = "#ffffff"
        }
        if (count == 0) clearInterval(timer);
    }, 1000);
}

//Function to draw a new line on our graph
function drawLine() {
    //Clear the canvas so lines don't stack
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Define the slope/y-int from user input
    var slope = document.getElementById("slope").value * 250;
    var yInt = document.getElementById("yint").value * 50;

    //Defines the starting point for our line, aka our laser beam 
    var x = 0,
        y = 500;

    //Draws our newly specified line
    ctx.beginPath();
    ctx.moveTo(0, 250 + slope - yInt);
    ctx.lineTo(y, 250 - slope - yInt);
    ctx.strokeStyle = "blue";
    ctx.stroke();

    //If our alien is hit, show game over
    if (slope / 250 == -1 && yInt / 50 == -1) {
        gameOver();
    } else {
        //Redraw the canvas
        addAlien();
    }
}

window.onload = addAlien;