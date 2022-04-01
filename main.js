var nose_x = 0;
var nose_y = 0;
var diferencia = 0;
var muneca_de_x = 0;
var muneca_iz_x = 0;
function setup(){
    div = createDiv();
    div.attribute("id", "divp5");
    video=createCapture(VIDEO);
    video.size(550, 500);
    video.parent(div);
    canvas=createCanvas(550, 400);
    canvas.position(650, 150);
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('posenet se ha inicializado');
}
function draw(){
    background('yellow');
    document.getElementById("lado_c").innerHTML="el ancho y alto del cuadrado sera: " + diferencia + "px";
    fill('green');
    stroke('greenyellow');
    square(nose_x, nose_y, diferencia);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x -200;
        nose_y = results[0].pose.nose.y -200;
        console.log("nariz_x: " + nose_x +"nariz_y: " + nose_y);
        muneca_de_x = results[0].pose.rightWrist.x;
        muneca_iz_x = results[0].pose.leftWrist.x;
        diferencia = floor(muneca_iz_x - muneca_de_x);
        console.log("muñeca izq es igual a " + muneca_iz_x + " y muñeca der es igual a " + muneca_de_x + "   la diferencia es de "+ diferencia);
    }
}