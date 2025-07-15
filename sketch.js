function setup() {
    let cnv = createCanvas(140, 400);
    cnv.parent('sketch-holder');
}

function draw() {
    background(255, 255, 255, 50);
    fill(0);
    ellipseMode(CENTER);
    // circle(200, 200+200*sin(frameCount/40+PI/2), 100);
    r = 100;
    circle(width/2, 
        height/2 + (height/2-r/2) * sin(frameCount / 40 + PI / 2), 
        r);
    
    // circle(200-200*sin(frameCount/40), 200, 100);
}