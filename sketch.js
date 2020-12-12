const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraints = Matter.Constraint;

var ground, stand1, stand2;
var engine, world;
//blocks for stand1
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;


function setup() {
    createCanvas(1200, 800);

    engine = Engine.create();
    world = engine.world;
    ground = new Ground(625, 1050, 1250, 100);
    //stand1 = new Ground(500, 500, 300, 10);
    stand2 = new Ground(900, 300, 200, 10);

    //blocks for stand 1
    block1 = new BaseClass(700, 255, 10, 50);
    /* block2 = new BaseClass(500, 360, 10, 50);
     block3 = new BaseClass(500, 370, 10, 50);
     block4 = new BaseClass(500, 380, 10, 50);
     block5 = new BaseClass(500, 390, 10, 50);
     block6 = new BaseClass(500, 400, 10, 50);
     block7 = new BaseClass(500, 410, 10, 50);
     block8 = new BaseClass(500, 420, 10, 50);
     block9 = new BaseClass(500, 430, 10, 50);
     block10 = new BaseClass(500, 440, 10, 50);*/
    //console.log(stand1);
    console.log(stand2);
    console.log(block1);
}



function draw() {
    background("Black");
    Engine.update(engine);
    ground.display();
    //stand1.display();
    stand2.display();

    block1.display();
    /*block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();*/
}