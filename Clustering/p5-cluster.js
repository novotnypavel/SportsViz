// Structure of the code:
// 1. Declaration of variables;
// 2. Function setup();
// 3. Function draw();
// 4. Functions();

// 1. Declaration of variables;
// ----------------------------

let data = [];
let calculated = false;
let kmeans;
let slider;
let sliderLabel;
let dataLabel;
let positions = [];

function preload() {
    positions = loadTable("BE_EN_FIN_DEF.csv", "header");
}

// 2. Function setup();
// --------------------

function setup() {
    canvas = createCanvas(600, 400);
    canvas.parent('jumbo-cluster');
    background(96, 128, 56);
    //The soccer field is drawn first
    drawField();
    drawFieldLines();
    //Player-positions are added to the field to be clustered
    addPositions();

    // HSB allows to add saturation and brightness next to color;
    colorMode(HSB);

    //A button is added to cluster the data;
    let calculateButton = createButton('Cluster');
    calculateButton.parent('jumbo-cluster')
    calculateButton.mouseClicked(cluster);
    //A slider is added to let the user adjust the number of clusters;
    //Maximum number of clusters = 6;
    slider = createSlider(1, 6, 1, 1);
    slider.parent('jumbo-cluster')
    slider.input(sliderAdjusted);
    sliderLabel = createP('Number of Clusters: ' + slider.value());
    sliderLabel.parent('jumbo-cluster');
    noStroke();
    ellipseMode(CENTER);


}

// 3. Function draw();
// --------------------

function draw() {

    if (calculated) {
        for (i = 0; i < kmeans.dataset.length; i++) {
            let centroid = kmeans.dataset[i].centroid;
            let datapointx = kmeans.dataset[i][0];
            let datapointy = kmeans.dataset[i][1];
            //Once the results are in we recolor the data-points based on their centroid 
            fill(centroid * 25, 100, 100);
            ellipse(datapointx, datapointy, 20, 20);
            //We also add a label to the output, so it could be interpreted without the color
            fill(0);
            textAlign(CENTER, CENTER);
            text(centroid + 1, datapointx, datapointy);
        }
    }
}

// 4. Functions();
//----------------

// 4.1 Function sliderAdjusted();
// 4.2 Function mousePressed(); to test the clustering
// 4.3 Function addPositions();
// 4.3 Function cluster();
// 4.4 Function clustersCalculated();
// 4.5 Function drawField();
// 4.6 Function drawFieldLines();

//On update of the slider, the label is adjusted
function sliderAdjusted() {
    sliderLabel.html('Number of Clusters : ' + slider.value())
}
//If the mouse is clicked, the coordinates get added to the data array and drawn to the canvas.
// ToDo: replace this function by a function that adds data from a csv file to the data array and draw those to the canvas;
// function mousePressed() {
//     if (mouseY < height) {
//         data.push({ x: mouseX, y: mouseY });
//         fill(255);
//         ellipse(mouseX, mouseY, 5, 5);
//     }
// }

// The player positions are loaded into the data array and drawn to the canvas;
function addPositions() {
    for (i = 0; i < positions.getRowCount(); i++) {
        var posX = positions.getNum(i, "X1");
        var posY = positions.getNum(i, "Y1");
        data.push({ x: posX, y: posY });
        fill(255);
        ellipse(posX, posY, 5, 5);
    }
}

//On click of the cluster button we create our kmeans object with:
// - the data we collected;
// - the number of clusters from our slider;
// - two other options: maximum iterations and pixel treshold;
function cluster() {
    const options = {
        k: slider.value(),
        maxIter: 100,
        threshold: 0.9,
    };
    // Using the ml5.js library to calculate kmeans;
    kmeans = ml5.kmeans(data, options, clustersCalculated);
}

function clustersCalculated() {
    calculated = true;
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