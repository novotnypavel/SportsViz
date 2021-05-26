// First version of football field in p5js
// Created using the p5js editor
// 

function setup() {
    createCanvas(600, 400);
    background(220, 220, 220);
}

function draw() {
    background(220);
    drawField();
    drawFieldLines();
}

// Draw the football field
function drawField() {
    fill(96, 128, 56);
    noStroke();
    rect(20, 20, 560, 360);
}

// Draw the lines on the football field
function drawFieldLines() {

    // draw the two goals
    stroke(0);
    fill(169, 169, 169);
    rect(0, (height / 2) - 105 / 4, 20, 105 / 2);
    rect(width - 20, (height / 2) - 105 / 4, 20, 105 / 2)

    // all lines are white except goals
    stroke(255, 255, 255);
    // none of the shapes, used to draw lines, need fills
    noFill();

    // draw the out-of-bounds line.
    rect(20, 20, 560, 360);

    // draw midfield line
    line(300, 20, 300, 380);

    // draw a circle at midfield
    ellipse(300, 200, 100, 100);

    // draw the kickoff marker, solid circle
    fill(255, 255, 255);
    ellipse(300, 200, 3, 3);
    noFill();

    // draw the two penalty boxes
    rect(20, (height / 2) - 220 / 2, 94, 220);
    rect(width - 20 - 94, (height / 2) - 220 / 2, 94, 220);

    // draw the two goal areas
    rect(20, (height / 2) - 105 / 2, 32, 105);
    rect(width - 20 - 32, (height / 2) - 105 / 2, 32, 105);

    // draw the two penalty spots
    fill(255, 255, 255);
    ellipse(20 + 62, height / 2, 3, 3);
    ellipse(width - 20 - 62, height / 2, 3, 3);
    noFill();

    // draw the two penalty arcs
    arc(20 + 62, 200, 100, 100, -.88, .88);
    arc(width - 20 - 62, 200, 100, 100, PI - 0.88, PI + 0.88);

    // draw the four corner-kick arcs
    arc(20, 20, 15, 15, 0, PI / 2);
    arc(20, height - 20, 15, 15, 1.5 * PI, 0);
    arc(width - 20, 20, 15, 15, PI / 2, PI);
    arc(width - 20, height - 20, 15, 15, PI, 1.5 * PI);
}