var sketch = function(p)  {

    p.range;
    p.node;
    p.table;
    p.input_data;
    p.document;
    p.slider;
    p.canvas;
    p.canvasPosX;
    p.canvasPosY;

    /* p.slider = p.document.getElementById(p.range); // access slider value and store it in a js variable.
    p.value = p.slider.value;

    // Update the current slider value (each time you drag the slider handle)
    p.slider.oninput = function() {
        p.value = p.slider.value;
        console.log(value);
        p.redraw()
    }  
 */
    

    p.preload = function() {
        p.table = p.loadTable(p.input_data,"csv","header")
        p.console.log(table)
    };  

    p.setup = function() {
        p.canvas = p.createCanvas(600, 400)
        p.canvas.position(p.canvasPosX,p.canvasPosY);
        p.fill(0,0,255,10)
        p.noLoop()
    };
  
    p.draw = function() {
        p.background(220)
        p.drawField()
        p.drawFieldLines()
        p.textSize(18)
        p.text(`seconds before the goal = ${p.value}`, 10, 20)
        
        p.rows = p.table.getRows()
        for (var r = 0; r < p.rows.length; r++) {

            //p.X = p.rows[r].getNum("X")
            p.X = 100-p.rows[r].getNum("X")
            p.Y = p.rows[r].getNum("Y")
            if (p.rows[r].getString("Event_Team")=="Croatia") {
              p.X = 100-p.X;
              p.Y = 100-p.Y;
            }
            p.x = p.map(p.X,0,100,20,580)
            p.y = p.map(p.Y,0,100,380,20)
        
            //if (p.rows[r].getNum("Sec_Before_Goal") >= -p.value) {
              if (p.rows[r].getString("Event_Tag")=="Goal" && ((p.X != 100 && p.Y != 100) && (p.X != 0 && p.Y != 0)) ) {
                p.stroke(p.color(0, 0, 0)); 
                p.fill(0, 0, 0);
              }
              else if (p.rows[r].getString("Event_Name")=="Pass") {
                p.stroke(p.color(0, 0, 255)); 
                p.fill(0, 0, 255,10);
              }
              else if (p.rows[r].getString("Event_Tag")=="Goal" && p.p.rows[r].getString("Event_Tag")) {
                p.stroke(p.color(0, 0, 0)); 
                p.fill(0, 0, 0);
              }
              else if (p.rows[r].getString("Event_Name")=="Free Kick") {
                p.stroke(p.color(255, 0, 0)); 
                p.fill(255, 0, 0,10);
              }
              else if (p.rows[r].getString("Event_Name")=="Shot") {
                p.stroke(p.color(255, 255, 0)); 
                p.fill(255, 255, 0,10);
              }
              
          
              if (p.rows[r].getString("Event_Team")=="France") {
                p.ellipse(p.x,p.y,5,5)
              }
              else if (p.rows[r].getString("Event_Team")=="Croatia") {
                p.square(p.x,p.y,5)
              }
            //}
          } 
    };

    // Draw the football field
    p.drawField = function() {
        p.fill(100, 230, 100);
        p.noStroke();
        p.rect(20, 20, 560, 360);
    };

    // Draw the lines on the football field
     p.drawFieldLines = function() {

        // draw the two goals
        p.stroke(0);
        p.fill(169,169,169);
        p.rect (0, (p.height/2) - 105/4, 20, 105/2);
        p.rect (p.width-20, (p.height/2) - 105/4, 20, 105/2 )

        // all lines are white except goals
        p.stroke(255, 255, 255);
        // none of the shapes, used to draw lines, need fills
        p.noFill();

        // draw the out-of-bounds line.
        p.rect(20, 20, 560, 360);

        // draw midfield line
        p.line(300, 20, 300, 380);

        // draw a circle at midfield
        p.ellipse(300, 200, 100, 100);

        // draw the kickoff marker, solid circle
        p.fill(255, 255, 255);
        p.ellipse(300, 200, 3, 3);
        p.noFill();

        // draw the two penalty boxes
        p.rect(20, (p.height /2) - 220/2, 94, 220);
        p.rect(p.width - 20 - 94, (p.height /2) - 220/2, 94, 220);

        // draw the two goal areas
        p.rect(20, (p.height / 2) - 105/2, 32, 105);
        p.rect(p.width - 20 - 32, (p.height / 2) - 105/2, 32, 105);

        // draw the two penalty spots
        p.fill(255, 255, 255);
        p.ellipse(20+62, p.height/2, 3, 3);
        p.ellipse (p.width-20 - 62, p.height/2, 3, 3);
        p.noFill();

        // draw the two penalty arcs
        p.arc(20 + 62, 200, 100, 100, -.88, .88);
        p.arc(p.width - 20 - 62, 200, 100, 100, p.PI - 0.88, p.PI + 0.88);

        // draw the four corner-kick arcs
        p.arc(20, 20, 15, 15, 0, p.PI / 2);
        p.arc(20, p.height-20, 15, 15, 1.5 * p.PI, 0);
        p.arc(p.width-20, 20, 15, 15, p.PI / 2, p.PI);
        p.arc(p.width-20, p.height - 20, 15, 15, p.PI, 1.5 * p.PI);
     }; 

};

var myp5 = new p5(sketch);
var myp5_2 = new p5(sketch);
var myp5_3 = new p5(sketch);
var myp5_4 = new p5(sketch);
var myp5_5 = new p5(sketch);
var myp5_6 = new p5(sketch);

myp5.canvasPosX = 20;
myp5.canvasPosY = 150;
myp5_2.canvasPosX = 20;
myp5_2.canvasPosY = 670;
myp5_3.canvasPosX = 20;
myp5_3.canvasPosY = 2*670-150;
myp5_4.canvasPosX = 20;
myp5_4.canvasPosY = 3*670-2*150;
myp5_5.canvasPosX = 20;
myp5_5.canvasPosY = 4*670-3*150;
myp5_6.canvasPosX = 20;
myp5_6.canvasPosY = 5*670-4*150;

myp5.input_data = "final_goal01_mandzukic.csv";
myp5_2.input_data = "final_goal02_perisic.csv";
myp5_3.input_data = "final_goal03_griezman.csv";
myp5_4.input_data = "final_goal04_pogba.csv";
myp5_5.input_data = "final_goal05_mbappe.csv";
myp5_6.input_data = "final_goal06_mandzukic.csv";


  