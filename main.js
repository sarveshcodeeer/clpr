lwx = 0 ;
rwx = 0 ;  
difference = 0 ;

function preload() {

}

function setup() {
    video = createCapture(VIDEO) ; 
    video.position(165 , 150) ; 
    video.size(300 , 300 ) ; 
    pn = ml5.poseNet(video , modelLoaded) ; 
    pn.on("pose" , gotResults ) ; 
canvas = createCanvas(300 , 300) ; 
canvas.center() ; 
}



function modelLoaded() {
   console.log("model has loaded commander") ;
}  

function draw() {
    background('#FFA500') ;
text("Sarvesh" , 55 , 55) ; 
textSize(difference) ; 


}

function gotResults(results){

if(results.length>0){
console.log(results) ; 
lwx = Math.floor(results[0].pose.leftWrist.x  ) ; 
rwx = Math.floor(results[0].pose.rightWrist.x  ) ; 
difference = lwx-rwx ; 




}


}