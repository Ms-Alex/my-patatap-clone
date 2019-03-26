// var keyData = require("./assets/keyData.js");
var soundData = document.getElementById("keyData").text;
var circlesArr = [];
console.log("hi", soundData);
function onKeyDown(event) {
    var maxPoint = new Point(view.size.width, view.size.height);
    var point = maxPoint * Point.random();
    var circle = new Path.Circle(point, 100)
    circle.fillColor = 'red';
    circlesArr.push(circle);
}

function onFrame(event){
    for (var i = 0; i < circlesArr.length; i ++){
        circlesArr[i].fillColor.hue += 1;
        circlesArr[i].scale(.9);
    }
}



    
