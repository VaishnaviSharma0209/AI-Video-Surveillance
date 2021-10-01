video="";
status="";
object=[];
function preload(){
    video=createVideo("video.mp4");
    video.hide();
}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
}
function draw(){
    image(video,0,0,400,400);
    if(status!=""){
    objectDectecter.detect(video,gotResults)
    for(i=0; i<object.length; i++){
        document.getElementById("status").innerHTML="Status: Object Detected";
        document.getElementById("number-of-objects").innerHTML="No: of obkects detected= "+ object.length;
        fill("red");
        noFill();
        stroke("red")
        percent=floor(object[i].confidence*100);
        text(object[i].label + percent + "%",object[i].x+15,object[i].y+15);
        rect(object[i].x-15,object[i].y,object[i].width,object[i].height);
    }
}
}
function start(){
    objectDectecter=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Dectecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded!")
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
function gotResults(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results)
        object=results;
    }
}