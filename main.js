img= "";

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#5EACBD");
    stroke("#5EACBD");
    noFill();
    text("Dog", 45, 75);
    rect(30, 60, 450, 350);
}

function preload(){
    img= loadImage('dog_cat.jpg');
}

function setup(){
    canvas= createCanvas(640, 420);
    canvas.center()
}