var bPageY = window.pageYOffset;
window.onscroll = function () { 
  var attPageY = window.pageYOffset;
  var navBar = document.getElementById("nav-bar");
  if (attPageY > bPageY) {
    navBar.style.top = -70 + "px";
  }
  else {
    navBar.style.top = 0 + "px";
  }
  bPageY = attPageY
}
var imgCount = 2;
function  slideShow (){

  document.getElementById("img-gallery").style.backgroundImage = "url('img" + imgCount +".jpg')";
  imgCount++
  if (imgCount == 8) {
    imgCount = 1
  }
  
}
 var page = document.getElementsByTagName("body")[0].getAttribute("id")
 if (page === "loginPage" | page === "home-login-page") {}
 else{
  window.setInterval(slideShow,3000)
}


  function showEmail () {
  var loginEmail = document.getElementById("login-email").value
  console.log(loginEmail)
  document.getElementById("email-show").innerHTML = loginEmail

  if (loginEmail ===  "9111143@senaimgdocente.com.br") {
  document.getElementById("profile-pic").style.backgroundImage = "url('caio.jpg')";
} else {
   document.getElementById("profile-pic").style.backgroundImage = "url('profile-default.jpg')"
}
}
var tank_1 = 0;
var tank_2 = 0;
var tank_3 = 0;
var tank_4 = 0;
var tank_1_value = 0;
var tank_2_value = 0;
var tank_3_value = 0;
var tank_4_value = 0;
  function tankLevel () {
    
  var tanque = 1;
  while(tanque <= 4) {
    var nivelTank = toRandom(0,100,0,2);
    var tank = document.getElementById("level-tank_" + tanque);
    tank.style.height = (nivelTank/100*400)+"px";
    console.log(nivelTank);
    switch (tanque){
      case 1:
       document.getElementById("Nível-tank_"+ tanque).innerHTML += (nivelTank/100*6).toPrecision(2) + " metros"
      break
       case 2:
       document.getElementById("Nível-tank_"+ tanque).innerHTML += (nivelTank/100*8).toPrecision(2)+ " metros"
      break
       case 3:
       document.getElementById("Nível-tank_"+ tanque).innerHTML += (nivelTank/100*8).toPrecision(2)+ " metros"
      break
       case 4:
       document.getElementById("Nível-tank_"+ tanque).innerHTML += (nivelTank/100*10).toPrecision(2)+ " metros"
      break

    }
   
    tanque++
  }
}
function toRandom (max, min,real,precision) {
var abc=Math.random();
if (real == 1) {
  if (abc < 0.5) {
    return ((Math.random()*(max - min))+min).toPrecision(precision)*-1
  }else{
    return ((Math.random()*(max - min))+min).toPrecision(precision)
  }
}else{
    return ((Math.random()*(max - min))+min).toPrecision(precision)
    console.log("maior que 0.5",abc)
}
//return ((Math.random()*(max - min))+min).toPrecision(precision)
} 
