var canvas = document.getElementById("svg");
var reset = document.getElementById("reset");

var first = 1;
var x1 = 0;
var y1 = 0;

var draw = function(e){
    var x2 = e.offsetX;
    var y2 = e.offsetY;

    var line = document.createElementNS('http://www.w3.org/2000/svg','line');
    line.setAttribute('x1',x1);
    line.setAttribute('y1',y1);
    line.setAttribute('x2',x2);
    line.setAttribute('y2',y2);
    line.setAttribute('stroke','black');
    if (first == 0){
	canvas.appendChild(line);
    }
    var circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
    circle.setAttribute('cx',x2);
    circle.setAttribute('cy',y2);
    circle.setAttribute('r','10');
    circle.setAttribute('fill','black');
    circle.setAttribute('stroke','black');
    canvas.appendChild(circle);
    x1 = x2;
    y1 = y2;
    first = 0;
}

var clear = function(e){
    canvas.innerHTML="";
    first = 1;
}

canvas.addEventListener('click',draw);
reset.addEventListener('click',clear);

    
