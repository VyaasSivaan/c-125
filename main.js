noseX=0;
noseY=0;
rightWristX=0;
leftWristX=0;
difference=0;

function setup() {
canvas=createCanvas(400,400);
canvas.position(850,100);
video=createCapture(VIDEO);
video.size(400,400);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);

}
function modelLoaded() {
console.log('poseNet is initialized');
}
function gotPoses(results) {
if(results.length>0) {
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX="+noseX+"noseY="+noseY);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    console.log("leftWristX="+leftWristX+"rightWristX="+rightWristX+"difference="+difference);

}


} 
function draw() {
background('#50F0C7');
document.getElementById("square_side").innerHTML="Width and height of a square will be"+difference+"px";
fill('#34429D');
stroke('#ADD3AF');
square(noseX,noseY,difference);
}