img = "";
status = "";

function preload(){
    img = loadImage("bed = good.jpeg");
    
}

function draw(){
    image(img,0,0,600,420);
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status: detectiong object";
}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;

    objectDetector.detect(img , gotResults);
}


function gotResults(error , results){
    if(error){
        console.error(error);
    }

    else{
        console.log(results);
    }
}