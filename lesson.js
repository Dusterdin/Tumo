// // import express from "express" ;
// // let app = express();

// // app.get("/", function(req, res){
// //      res.send("Привіт, світ");
// // });

// // app.get("/google/:name", function(req, res){
// //      let poshuk = req.params.name
// // /*console.log(req.params.name);
// // console.log(req.params.age);

// // res.send("Привіт, світ");*/
// // res.redirect('https://www.google.com/search?q='+poshuk)
// // });

// // app.listen(3000, function(){
// //      console.log("Екземпляр запущено через порт 3000");
// // });
// // import { appendFileSync, readFileSync } from "fs"
// // import express from "express"
// // let app = express();

// // app.get("/data/:name/:surname/:patronym", function (req, res) {
// //      appendFileSync('file.txt', 'Імя :' + req.params.name + '\n')
// //      appendFileSync('file.txt', 'Призвіще :' + req.params.surname + '\n')
// //      appendFileSync('file.txt', 'Побатькові :' + req.params.patronym + '\n')
// //      res.send("Тебе записано");
// // })
// // app.listen(3000, function () {
// //      console.log("Екземпляр запущено через порт 3000");
// // });
// // console.log(readFileSync('file.txt', 'utf-8'));
// const button = document.getElementById('button')

// function sendinfo(){
// let info = {
//      name:document.getElementById('name').value,
//      surname:document.getElementById('surname').value,
//      age:document.getElementById('age').value,
//      email:document.getElementById('email').value,
//      phone:document.getElementById('phone').value
// }
// console.log(info);
// fetch('/registration',{
//      method: 'POST',
//      headers:{
//           'Content-Type': 'application/json',
//      },
//      body : JSON.stringify(info)
// });
// }



// button.addEventListener('click',sendinfo)
