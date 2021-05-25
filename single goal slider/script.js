let slider = document.getElementById("myRange"); // access slider value and store it in a js variable.
let value = slider.value;

// let slider = document.getElementById("myRange"); // access slider value and store it in a js variable.
// let seconds = slider.value;                        // You can now use the value of the slider in js to update your visualization
var table;

function preload() {
  table = loadTable("final_goal04_pogba.csv","csv","header")
  console.log(table);
}

// Update the current slider value (each time you drag the slider handle)
 slider.oninput = function() {
    value = slider.value;
    console.log(value);
    redraw()
} 

function setup() {
  createCanvas(600, 400);
  fill(0,0,255,10)
  noLoop()
}

function draw() {
  background(220);
  drawField();
  drawFieldLines();
  textSize(18);
  text(`seconds before the goal = ${value}`, 10, 20);

  var rows = table.getRows()

  for (var r = 0; r < rows.length; r++) {

    var X = 100 - rows[r].getNum("X");
    var Y = rows[r].getNum("Y")

    if (rows[r].getString("Event_Team")=="Croatia") {
      X = 100-X;
      Y = 100-Y;
    }
    var x = map(X,0,100,20,580)
    var y = map(Y,0,100,380,20)

    var mouseXMin = mouseX - 25
    var mouseXMax = mouseX + 25
    var minSec = map(mouseXMin,0,180,0,180)
    var maxSec = map(mouseXMax,0,180,0,180)

    if (rows[r].getNum("Sec_Before_Goal") >= -value && ((X != 100 && Y != 100) && (X != 0 && Y != 0))) {

      if (rows[r].getString("Event_Tag")=="Goal") {
        stroke(color(0, 0, 0)); 
        fill(0, 0, 0);
      }
      if (rows[r].getString("Event_Name")=="Pass") {
        stroke(color(0, 0, 255)); 
        fill(0, 0, 255,10);
      }
      else if (rows[r].getString("Event_Name")=="Free Kick") {
        stroke(color(255, 0, 0)); 
        fill(255, 0, 0,10);
      }
      else if (rows[r].getString("Event_Name")=="Shot") {
        stroke(color(255, 255, 0)); 
        fill(255, 255, 0,10);
      }
  
      if (rows[r].getString("Event_Team")=="France") {
        ellipse(x,y,5,5)
      }
      else if (rows[r].getString("Event_Team")=="Croatia") {
        square(x,y,5)
      }




    }
  } 
}

// Draw the football field
function drawField() {
fill(100, 230, 100);
noStroke();
rect(20, 20, 560, 360);
}

// Draw the lines on the football field
function drawFieldLines(){

// draw the two goals
stroke(0);
fill(169,169,169);
rect (0, (height/2) - 105/4, 20, 105/2);
rect (width-20, (height/2) - 105/4, 20, 105/2 )

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
rect(20, (height /2) - 220/2, 94, 220);
rect(width - 20 - 94, (height /2) - 220/2, 94, 220);

// draw the two goal areas
rect(20, (height / 2) - 105/2, 32, 105);
rect(width - 20 - 32, (height / 2) - 105/2, 32, 105);

// draw the two penalty spots
fill(255, 255, 255);
ellipse(20+62, height/2, 3, 3);
ellipse (width-20 - 62, height/2, 3, 3);
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
