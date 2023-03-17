/*let img  ;

function preload(){
  img = loadImage('TEST.png');
}*/
let prohBal = 0 ;
let kerch
let start = 0
let s = 0
let n = 0
let money = 100000
let magik = 0
let ban = 0
let poch = 6

function setup() {
    createCanvas(700, 600);
    
    
}

let Interval = setInterval(() => {
  Game.sendStatics()
}, 5000);

function draw() {
  background('skyblue');
  fill('white')
    rect(400, 0, 300, 600);
  //image(img, 0, 0); 
  if(start == 0){
    textSize(43);
     fill('black');
     textAlign(CENTER,CENTER);
     text('Гра Доброворець',200,200);
     textSize(64);
     text('ЗСУ',200,300);
     fill('yellow')
    rect(100, 400, 200, 50); 
     fill('black');
     textAlign(LEFT);
     textSize(43);
     text('Грати',140,425);
     
  }else{
    if(s < 1000 ){
      textAlign(LEFT);
      fill('black');
      textSize(21);
      text('Ти доброволець ЗСУ ,',400 ,22);
      text('тобі потрібно нищити орків ,',400 ,52);
      text('щоб вони не захопили Україну',400 ,82);
      text("Пам'ятай що у танках є орки ,",400 ,112);
      text("яких треба знищити також",400 ,142);
      s++
    }
    
  for (const balloon of Game.balloons) {
    balloon.display()
    balloon.move(Game.score)
    if (balloon.y < -100){
      balloon.burst(Game.index)
      Game.score +=20
    }
    if(prohBal == 2){
      noLoop()
      
     Game.balloons.length = 0
     let score = Game.score 
     Game.score= ''
     background(136,220,166);
     textSize(44);
     fill('white');
     textAlign(CENTER,CENTER);
     text('Ти',200,200);
     text('завершив війну',200,300);
     textSize(34);
     text('Score: ' + score, 200, 400);  
     fill('white')
    rect(400, 0, 300, 600);
    }
    if (balloon.y <= -balloon.size/2 && balloon.constructor.name != 'AngryBalloon'){
     noLoop()
     clearInterval(Interval)
     Game.balloons.length = 0
     let score = Game.score 
     Game.score= ''
     background(136,220,166);
     textSize(43);
     fill('white');
     textAlign(CENTER,CENTER);
     if( score >= 0 && (prohBal == 0 || money <100000)){
     text('Росіяни пройшли',200,200);
     textSize(40);
     text('але ми переможемо',200 ,300);
     }else if(score < 0){
      text('Ах ти москаль',200,200);
     textSize(40);
     text('для таких як ти БАН',200 ,300);
     ban = 1
     }else if(prohBal == 1 && money ==100000){
     text('Якщо ти не знав',200,200);
     textSize(30);
     text('ти можеш використовувати',200 ,270);
     text('зброю, вона з правого боку',200 ,330);
     }
     textSize(34);
     text('Score: ' + score, 200, 400);
     fill('white')
    rect(400, 0, 300, 600);
    }
  }
 
  if (prohBal > 0) {
    if(n < 300){
      textAlign(LEFT);
      fill('black');
      textSize(24);
      text('Ти зловив Гіркіна', 405, 400);
      text('За це тобі дають ГіркCoin', 405, 430);
      n ++
    }else if(n <1000){
      textAlign(LEFT);
      fill('black');
      textSize(24);
      text('Ти можеш використати ', 405, 370);
      text('ці гроші , для перемоги', 405, 400);
      text('у війні проти росії', 405, 430);
      n++
    }
    fill('red')
    rect(400, 500, 300, 49);
    rect(400, 550, 300, 49);
    ellipse(680,475 , 30);
    textAlign(LEFT);
      fill('black');
      textSize(33);
      text('В тебе :' + money,401 ,480);
      textSize(15);
      text('Запустити байрактар -- 25 000',401 ,525);
      text('Зброя масового знищення - 75 000',401 ,575);
      fill(70,250,150);
      ellipse(680,575 , 30);
      ellipse(680,525 , 30);
      
  }
  if(magik > 0){
    noFill()
    ellipse(mouseX,mouseY , 2*magik); 
  }
  textAlign(LEFT);
  textSize(32);
  fill('black')
  text(Game.score , 20, 40)
  if(Game.score < 50){
   Practik()
  }else if(Game.score > 49 && Game.score < 150){

   War()
  }else if(Game.score > 150 && Game.score < 200 && prohBal == 0){
    katchGirkin()
   }else if(Game.score > 150 && Game.score < 300 && prohBal == 1){
    War2()
   }else if(Game.score > 300){
    kPutin()
   }


  /*if (frameCount % 60 ==0){
    Game.addCommonBallon()
  }
  if (frameCount % 60 ==0){
    Game.addAngryBalloon()
  }
  if (frameCount % 60 ==0){
    Game.addUniqBallon()
  }*/
  console.log(s , Game.score);
 }
}
function mousePressed(){
  Game.countClick ++
  if(start == 0 ){
    start = 1
  }
  if (!isLooping() ) {
    Interval = setInterval(() => {
      Game.sendStatics()
    }, 5000);
    Game.score = 0
    Game.countBlack = 0
    Game.countDARK = 0
    Game.countBlue = 0
    Game.countClick = 0
  }
  
  if(!isLooping() && ban == 0){
    poch --
    
    if(poch < 1 ){
    loop()
    poch = 6
    n = 0
    money = 100000
    magik = 0
    s =0
    kerch = 0
    prohBal = 0
    
    
  }
  textAlign(LEFT);
  textSize(32);
  fill('black')
  text(poch , 20 + 40*poch, 40)
  }
  if(dist(680 ,475 ,mouseX, mouseY) <= 15){
    if(magik == 150){
     money +=25000
     magik -=150
    }else if(magik == 300){
      money +=50000
      magik =0 
    }else if(magik == 450){
      money +=75000
      magik =0 
    }else if(magik == 600){
      money +=100000
      magik =0 
    }
     if(magik > 1000){
      money +=75000
      magik =0 
    }
  }
  if (!(dist(680 ,525 ,mouseX, mouseY) <= 15 ) ){
  Game.checkIfBalloonBurst()
  }
  if (dist(680 ,525 ,mouseX, mouseY) <= 15 && money >=25000 ){
    magik += 150
    money -= 25000
  }else if(dist(680 ,575 ,mouseX, mouseY) <= 15 && money >=75000 ){
    magik = 10000
    money -=75000 
  }else{
    magik =0
  }
}
class Game {
    static countDARK = 0
    static countBlue = 0
    static countBlack = 0
    static balloons = []
    static score = 0
    static countClick = 0

    static sendStatics(){
      let stats ={
    countDARK: this.countDARK,
    countBlue: this.countBlue,
    countBlack: this.countBlack,
    countClick: this.countClick
      };
      fetch ('/stats',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
       },
     body : JSON.stringify(stats)
      })
    }
    static addCommonBallon(){
      let balloon = new CommonBallon(50,'blue', 2 ,2)
      this.balloons.push(balloon)
    }
    
    static addUniqBallon(){
      let balloon = new UniqBalloon(40,'green', 1 ,1)
      this.balloons.push(balloon)
    }

    static addAngryBalloon(){
      let balloon = new AngryBalloon(40,'black', 1 ,-20)
      this.balloons.push(balloon)
    }
    static addGirkin(){
      let balloon = new Girkin(30,'yellow', 7 ,1)
      this.balloons.push(balloon)
    }
    static addPutin(){
      let balloon = new Putin(200,'white', 1 ,1)
      this.balloons.push(balloon)
    }

    static checkIfBalloonBurst(){
      this.balloons.forEach((balloon,index) =>{
        let distance = dist(balloon.x ,balloon.y ,mouseX, mouseY)
        if(distance <= balloon.size/2 + magik){
          balloon.burst(index)
          
        }
      });
       
     }
}
 
class CommonBallon{
 constructor(size , color , speed , bal){
    this.x = random(400)
    this.y = random(600 - 10, 600 + 50)
    this.color = color
    this.size = size
    this.speed = speed
    this.bal = bal
    this.set = 0
    this.sped = 1
    this.sco1a = this.speed*2
    this.sco2a = this.speed*4
    this.spel = 0
  }
 
  display(){
    fill(this.color)
    ellipse(this.x, this.y, this.size);
    line(this.x ,this.y + this.size/2 ,this.x ,this.y + this.size*2 )

  }
  move(score){
    /*if(score < 10){
      
    }else if (score > 100 && score <200){
      this.speed = this.sco1a + this.spel
    }else if (score > 200){
      this.speed = this.sco2a + this.spel
    }*/
    if(this.set == this.sped){
    this.y -= this.speed + this.spel
    this.set=0
    }else{
      this.set++
    }
    
  }
  burst(index){
    Game.score += this.bal
    if(this.color == 'green'){
    Game.balloons.splice(index, 1)
    }else{
      this.color = 'green'
      this.size -=10
      this.spel = -1
      this.bal = 1
    }
  
  }
}
class Girkin extends CommonBallon{
  constructor(color, size, speed , bal){
    super(color, size, speed , bal)
    this.x = 200
    this.y = 570
    this.gyrcoin = 0 
    this.rand = 1
    this.hup
    this.rep = 0;
} 
   move(score){
  if(this.set == this.sped){
    if(this.gyrcoin == 0){
    if((((this.y - this.size/2) < 0 && (((this.x > 197) && (this.x < 204)) || this.x < 0 || this.x > 400))||(((this.y + this.size/2) > 601 && (this.y + this.size/2) < 607) && (((this.x > 197) && (this.x < 204)) || this.x < 0 || this.x > 400))||((this.x + this.size/2) < 400 && (((this.y > 297) && (this.y < 304)) || this.y < 0 || this.y > 600))||((this.x - this.size/2) > 0 && (((this.y > 297) && (this.y < 304)) || this.y < 0 || this.y > 600))||(this.y == 300 && this.x == 200))&& this.gyrcoin == 0){
      this.hup = random(1,4) 
      console.log(this.hup);
      if(this.hup > 3.5 && this.hup < 4.5){
        this.rand = 4
      }
      if(this.hup > 2.5 && this.hup < 3.5){
        this.rand = 3
      }
      if(this.hup > 1.5 && this.hup < 2.5){
        this.rand = 2
      }
      if(this.hup < 1.5){
        this.rand = 1
      }
    }
    
    if(this.rand == 1 && (this.y) > 0){
  this.y -= this.speed + this.spel
  this.set=0
  console.log(this.y + this.size/2);
  }else if(this.rand == 2 && (this.y ) < 600){
    this.y += this.speed + this.spel
    this.set=0 
    console.log(this.rand);
    }else if(this.rand == 3 && (this.x ) > 0){
      this.x -= this.speed + this.spel
      this.set=0
      }else if(this.rand == 4 && (this.x ) < 400){
        this.x += this.speed + this.spel
        this.set=0
        }
      }else if((this.x > 196 || this.x < 204)&& this.rep > 0){
        this.y -= this.speed
      }else{
      if(this.x < 198){
       this.x +=5
      }else if(this.x > 202){
        this.x -=5
       }
       if(this.y < 600){
        this.y +=10
       }else{
         this.rep ++
       }
       if(this.size < 70){
        this.size +=10
       }
      }
  }else{
    this.set++
  }
  if(this.color == 'yellow'){
    textAlign(LEFT);
    textSize(32);
    fill('black')
    text("Злови Гіркіна",410 ,112);
  }else{
    textAlign(LEFT);
    textSize(32);
    fill('black')
    text("Тепер добий",410 ,112);
  }
}
     burst(index){
      Game.score += this.bal
     if(this.color == 'red'){
      this.size -=2
      if(this.size < 8){
      Game.balloons.splice(index, 1)
       prohBal++
      }
     }else{
      this.color = 'red'
      this.spel = -1
      this.speed = 1
      this.bal = 1
      this.gyrcoin = 1
      
  }
  Game.countDARK++
 }
}
class UniqBalloon extends CommonBallon {
  constructor(color, size, speed , bal){
       super(color, size, speed , bal)
  }
  burst(index){
    Game.score += this.bal
    Game.balloons.splice(index, 1)
    Game.countBlue++
  
  }
}
  class AngryBalloon extends CommonBallon {
    constructor(color, size, speed , bal){
         super(color, size, speed , bal)
    }
    burst(index){
      Game.score += this.bal
      Game.balloons.splice(index, 1)
      if(this.y > -75){
     s = 1001
      }
      Game.countBlack++
    }
}
 class Putin extends CommonBallon {
    constructor(color, size, speed , bal){
         super(color, size, speed , bal)
  this.scar =0
  this.x = 200
  this.typ = 0
}
move(score){
  if(this.color == 'white'){
    textAlign(LEFT);
    textSize(24);
    fill('black')
    text("Помстись путіну за все ,",410 ,22); 
    text("що він зробив проти нас",410 ,57); 
    textSize(44);
    text("Бий його!!",410 ,112); 
  }else if(this.scar == 1){
    fill('black')
    textSize(44);
    text("Молодець",410 ,112); 
  }else if(this.color == 'red'){
    fill('black')
    textSize(44);
    text("Давай ще раз",410 ,52); 
    text("Бий його!!",410 ,112); 
  }else if(this.color == 'blue' && kerch <100){
    fill('black')
    textSize(42);
    text("Захищайся від",410 ,52); 
    text("його армії",410 ,112); 
    textSize(22)
    text("Можеш використати",410 ,152); 
    text("зброю масового знищення ",410 ,182);
  }else if(kerch>= 100){
    fill('black')
    textSize(42);
    text("Обережно",410 ,52); 
    textSize(32);
    text("путін наближається",410 ,112); 
  }
  /*if(score < 10){
    
  }else if (score > 100 && score <200){
    this.speed = this.sco1a + this.spel
  }else if (score > 200){
    this.speed = this.sco2a + this.spel
  }*/
  if(this.set == this.sped){
    if(this.scar == 1) {
      if(this.size < 200){
        this.size += 10
      }
      if(this.y < 600){
      this.y += 10
      this.set=0
      }else{
        this.scar = 0
      }
    }else if(this.color != 'blue' || kerch >= 100){
      if(this.color == 'blue'){
        this.sped = 2
      }
  this.y -= this.speed + this.spel
  this.set=0
    }
  }else{
    this.set++
  }
  
}
burst(index){
  Game.score += this.bal
 if(this.color == 'red'){
  if (this.size < 50) {
    this.color = 'blue'
    this.scar= 1
    kerch = 1
  }
  this.size -=2
  if(this.size < 8){
  Game.balloons.splice(index, 1)
   prohBal++
  }
 }else{
  if (this.size <100 && this.color == 'white') {
    this.color = 'red'
    this.scar= 1
  }
  if(this.size < 8){
    Game.balloons.splice(index, 1)
     prohBal++
    }  
  this.size -=2
}
}
 }
 function Practik() {
  if(s < 1500 && s > 1000){
    textAlign(LEFT);
      fill('black');
      textSize(21);
      text('Мирних громадян ',405 ,22);
      text('не треба вбивати',405 ,52);
      s++
    }
  if (frameCount % 120 ==0){
    Game.addCommonBallon()
  }
  if (frameCount % 60 ==0){
    Game.addUniqBallon()
  }
  
 }
 function War() {  
  if(s < 1500){
  textAlign(LEFT);
    fill('black');
    textSize(21);
    text('Мирних громадян ',405 ,22);
    text('не треба вбивати',405 ,52);
    s++
  }
  if (frameCount % 120 ==0){
    Game.addCommonBallon()
  }
  if (frameCount % 60 ==0){
    Game.addUniqBallon()
  }
  if (frameCount % 89 ==0){
    Game.addAngryBalloon()
  }
  
  
 }
 function katchGirkin(){
  if(Game.balloons == 0){
  Game.addGirkin()
 }
 }
 function War2() {
  if(s < 1500){
    textAlign(LEFT);
      fill('black');
      textSize(21);
      text('Мирних громадян ',405 ,22);
      text('не треба вбивати',405 ,52);
      s++
    }
  if (frameCount % 100 ==0){
    Game.addCommonBallon()
  }
  if (frameCount % 30 ==0){
    Game.addUniqBallon()
  }
  if (frameCount % 89 ==0){
    Game.addAngryBalloon()
  }
}
 function kPutin(){
  if(Game.balloons == 0){
    Game.addPutin()
   }
   if(kerch > 0 && kerch < 100){
    if (frameCount % 70 ==0){
      Game.addCommonBallon()
      kerch++
    }
    if (frameCount % 25 ==0){
      Game.addUniqBallon()
      kerch++
    }

   }
   console.log(kerch);
 }
