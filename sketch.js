
let hs
let img
let snake
let playing =false
let angle =0
let goal = 180
let cnv
function preload(){
  hs = loadSound("hds.mp3")
  img = loadImage("hd.png")
  snake = loadImage("snake.png")

}

function setup() {
  // put setup code here
  cnv = createCanvas(500,500)
  let cx = floor((windowWidth - cnv.width) / 2);
  let cy =  floor((windowHeight - cnv.height) / 2);
  cnv.position(cx,cy)
  background(0)
  angleMode(DEGREES)
  imageMode(CENTER)
}

function mouseReleased(){
  print(playing)
  if(!playing){
    hs.play()
    playing = true
  } else{
    hs.stop()
    playing = false
  }
}

function draw() {
  background(0)
  push()
  translate(width/2,height/2)
  rotate(angle/3)
  tint(180,212,148,(50+angle/3))
  image(snake,0,0,500,500)
  pop()
  push()
  translate(width/2,height/2)
  rotate(angle)
  tint(255)
  image(img,0,0,350+(angle/2),250+angle/2)
  pop()
  if(playing){
  if (angle<goal){
    angle++
    angle%360

  }else if (angle>goal){
     
    if (angle>0){
      angle--
    }
  }

  else if (angle === goal){
    goal=floor(random(360))

  }
}
  
}
