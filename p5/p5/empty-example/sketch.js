var y=100;
var d=80;


function setup() {
    createCanvas(400, 900);
}


function draw() {
    background(0,0,0);
    
    textSize(32);
    fill(255,255,255);
    text("Conscientiousness", 10, 40);
        textSize(12);
        text("val", 40, 150);
        text("val", 160,150);
        text("val", 290,150);
    fill(135,206,235);
    ellipse(50,y,d,d);
    ellipse(170,y,d,d);
    ellipse(300,y,d,d);
    
    textSize(32);
    fill(255,255,255);
    text("Agreeableness", 10, 195);
        textSize(12);
        text("val", 40, 300);
        text("val", 160,300);
        text("val", 290,300);
    fill (46,139,87);
    ellipse(50,250,d,d);
    ellipse(170,250,d,d);
    ellipse(300,250,d,d);
    
    textSize(32);
    fill(255,255,255);
    text("Neuroticism", 10, 350);
        textSize(12);
        text("val", 40, 450);
        text("val", 160,450);
        text("val", 290,450);
    fill (255,255,5);
    ellipse(50,400,d,d);
    ellipse(170,400,d,d);
    ellipse(300,400,d,d);
    
    textSize(32);
    fill (255,255,255);
    text("Openess", 10, 520);
        textSize(12);
        text("val", 40, 620);
        text("val", 160,620);
        text("val", 290,620);
    fill(255,69,0);
    ellipse(50,570,d,d);
    ellipse(170,570,d,d);
    ellipse(300,570,d,d);
  
    
    textSize(32);
    fill (255,255,255);
    text("Extravertism", 10, 690);
        textSize(12);
        text("val", 40, 800);
        text("val", 160,800);
        text("val", 290,800);
    fill(255,0,0);
    ellipse(50,750,d,d);
    ellipse(170,750,d,d);
    ellipse(300,750,d,d);

    
  // put drawing code here
    
}