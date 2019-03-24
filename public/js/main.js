const circlesArr = [];

function onKeyDown(event) {
    const maxPoint = new Point(view.size.width, view.size.height);
    const point = maxPoint * Point.random();
    const circle = new Path.Circle(point, 100)
    circle.fillColor = 'pink';
    circlesArr.push(circle);
}

function onFrame(event){
    for (let i = 0; i < circlesArr.length; i ++){
        circlesArr[i].fillColor.hue += 1;
        circlesArr[i].scale(.9);
    }
}
