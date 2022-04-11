//Defines a global variable for the canvas, so it can easily
//be redrawn if necessary
var canvas = document.getElementById("grid"),
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

//Function to draw a new line on our graph
function drawLine() {
    //Clear the canvas so lines don't stack
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Redraw the canvas
    processCanvas();

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
}

window.onload = drawLine;