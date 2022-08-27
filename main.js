song1="";
song2="";
leftWristx="";
leftWristy="";
rightWristx="";
rightWristy="";
song1s="";
song2="";
scorelw="";
scorerw="";
function setup( ) {
    canvas=createCanvas(450, 450)
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 450, 450)
    song1s=song1.isPlaying();
    song2s=song2.isPlaying();
    fill("red");
stroke("red");
if(scorerw>0.2){
    circle(rightWristx, rightWristy, 20)
    song2.stop();
    if(song1s==false){
        song1.play();
    }
}
if(scorelw>0.2){
    circle(leftWristx, lefttWristy, 20)
    song1.stop();
    if(song2s==false){
        song2.play();
    }
}

}


function preload() {
    song1=loadSound("music.mp3")
    song2=loadSound("music2.mp3")
}


function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function modelloaded() {
    console.log("loaded is model");
}

function gotPoses(results) {
    if(results.length>0){
        console.log(results);
        scorelw=results[0].pose.keypoints[9].score;
        scorerw=results[0].pose.keypoints[10].score;
        leftWristx=results[0].pose.leftWrist.x;
        leftWristy=results[0].pose.leftWrist.y;
        console.log("left wrist x ="+ leftWristx + "left wrist y =" + leftWristy);

        rightWristx=results[0].pose.rightWrist.x;
        rightWristy=results[0].pose.rightWrist.y;
        console.log("right wrist x ="+ rightWristx + "right wrist y =" + rightWristy);

    }

}