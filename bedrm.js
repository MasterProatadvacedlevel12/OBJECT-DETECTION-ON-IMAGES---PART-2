img = "";

function preload(){
    img = loadImage("bedrm.jpg");
}


function setup(){
    canvas = createCanvas(640,420);
    canvas.center();

    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw(){
    image(img, 0, 0, 640,420);
fill("#ff0400");
text("Bed", 50,55);
noFill();
stroke("#ff0400");
rect(30,60,450,350);
}



function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}


function gotResult(error, results){
if(error){
    console.log(error);
}
else if(results){
    console.log(results);
}
}