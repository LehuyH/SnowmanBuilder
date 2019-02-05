//==========Event Ears=========
document.getElementById('btn').addEventListener('click', start)
//pannel 1
document.getElementById('r1').addEventListener('click', r1)
document.getElementById('b1').addEventListener('click', b1)
document.getElementById('y1').addEventListener('click', y1)
document.getElementById('g1').addEventListener('click', g1)
document.getElementById('s1').addEventListener('click', s1)


  //===========================
//element grabbers
var floor = document.getElementById('main')
var h = document.getElementById('h')
var btn = document.getElementById('btn')
var p = document.getElementById('p')
var header = document.getElementById('header') //text
var pannel = document.getElementById('pnl') // pannel
var pannelcontent // will hold pannel content
var arm1
   var arm2
   var spinhat1
   var spinhat2

//settings
var texttochange // text change holder
var pannelnum = 1// pannel number to load


//SNOWMAN OBJECT
var snowman = 
{
color:'' ,
body:'',
face:'',
arms:'',
hat:'',
name:''
}

//start
function start(){
    btn.style.visibility = 'hidden' //hide button code by LH
    p.style.visibility = 'hidden' //hide p code by LH
h.style.backgroundColor = '#0D1A3D' //make it this color
setTimeout(setimg, 1000) //set img delay and make it a nice fade
setTimeout(textchange, 1000) //tigger text change
texttochange = "Snowman | Color"



}
function setimg(){
    h.style.backgroundImage = 'url("winter.jpg")'
    h.style.backgroundSize = 'cover'
}
function textchange(){
    var header = document.getElementById('header')
    header.style.fontSize = '0px'
    setTimeout(textchange2, 1000)
    
   //unhide pannel
   pannel.style.display = 'block'


}
function textchange2(){
     pannelcontent = document.getElementById(pannelnum)
pannelcontent.classList.add('hide')
header.innerText = texttochange;
    
header.style.fontSize = '32px'
//open pannel
pannel.classList.remove('hide') // show

pannelcontent.classList.remove('hide') // show
//inject content    
if(pannelnum == 2){

pannelcontent.innerHTML = "  <div  id='c2' style='background-color:"+ snowman.color + " 'class='circle'>Circle Body</div> <br><div  id='s2' style='background-color:"+ snowman.color + " 'class='square'>Square Body</div> <br> <div  id='o2' style='background-color:"+ snowman.color + " 'class='oval'>Oval-ish Body</div><br> <div  id='sl2' style='background-color:"+ snowman.color + " 'class='slim'>Slim Body</div>"
document.getElementById('c2').addEventListener('click', c2)
document.getElementById('s2').addEventListener('click', s2)
document.getElementById('o2').addEventListener('click', o2)
document.getElementById('sl2').addEventListener('click', sl2)

}
if(pannelnum == 3){
    pannelcontent.innerHTML = "<div id='n3'class='imgcontain'> <img src='snowmanimg/netural.png'> <p>Netural</p> </div> <div id='h3'class='imgcontain'> <img src='snowmanimg/happy.png'> <p>Happy</p> </div> <div id='c3' class='imgcontain'> <img src='snowmanimg/confused.png'> <p>Confused</p> </div> <div id='s3'class='imgcontain'> <img src='snowmanimg/surprised.png'> <p>Surprised</p> </div><div id='w3'class='imgcontain'> <img src='snowmanimg/what.png'> <p>???</p> </div>"
    document.getElementById('n3').addEventListener('click', n3)
    document.getElementById('h3').addEventListener('click', h3)
    document.getElementById('c3').addEventListener('click', c3)
    document.getElementById('s3').addEventListener('click', s3)
    document.getElementById('w3').addEventListener('click', w3)
}
if(pannelnum == 4){
    pannelcontent.innerHTML = "<div class='imgcontain'><div class='stick'id='s4'>Stick Arms</div> </div> <br> <div class='imgcontain'><div class='snow'id='sn4'> Bigger Stick Arms</div></div> </div>"
    document.getElementById('s4').addEventListener('click', s4)
    document.getElementById('sn4').addEventListener('click', sn4)
    
}
if(pannelnum == 5){
    pannelcontent.innerHTML = "<div id='f5'class='imgcontain'> <div class='hat'> </div> <div class='hat2'> </div> </div> Fedora <div id='s5'class='imgcontain'> <div class='santa'> </div> <div class='santa2'> </div> </div> Santa's Hat"
    document.getElementById('f5').addEventListener('click', f5)
    document.getElementById('s5').addEventListener('click', s5)
    
}
if(pannelnum == 6){
    pannelcontent.innerHTML = "<h2>Name your snowman!</h2><br><input id='i6'> <a class='btn' id='b6'>Submit</a>"
    
    document.getElementById('b6').addEventListener('click', b6)
    
}
if(pannelnum == 7){
    pannelcontent.innerHTML = "<a id='w7' class='button'>Wave</a> <a id='c7' class='button'>Cheer</a> <a id='sh7' class='button'>Spin Hat</a> <a id='s7' class='button'>Spin</a> <br> <br> <div id='hat1' class='" + snowman.hat + "'></div> <div id='hat2' class='" + snowman.hat+ "2'></div> <div class='" + snowman.body + "' style='background-image: url(snowmanimg/" + snowman.face + ".png); background-size:80%80%; background-repeat: no-repeat; background-position: center;background-color:" + snowman.color+ "' ;></div> <div class='inline'> <div id='arm1' style='display:inline-block;' class='"+ snowman.arms+"'></div> <div style='display:inline-block; background-color:" + snowman.color+ "' class='" + snowman.body + "'></div> <div id='arm2' style='display:inline-block;' class='"+ snowman.arms+"'></div> <br> <div style=' margin-top:0px;display:inline-block; background-color:" + snowman.color+ "' class='" + snowman.body + "'> </div> </div>"
   document.getElementById('m').play()
   document.getElementById('w7').addEventListener('click', w7)
   document.getElementById('c7').addEventListener('click', c7)
   document.getElementById('s7').addEventListener('click', s7)
   document.getElementById('sh7').addEventListener('click', sh7)
    arm1 = document.getElementById('arm1')
    arm2 = document.getElementById('arm2')
    spinhat1 = document.getElementById('hat1')
    spinhat2 = document.getElementById('hat2')
}
pannel.style.width = '50%'
pannel.style.height = '50%'
}
//Close pannel
function closepannel(){
  pannel.style.width = '0%'
pannel.style.height = '0%'
setTimeout(closepannel2, 200)
}
function closepannel2(){
    pannelcontent.classList.add('hide')
    pannelcontent.innerHTML = ''
    pannelnum = pannelnum + 1
}

//=====PANNEL 1 FUNCTIONS
function r1(){
    pannelcontent.innerHTML = '';
    closepannel()
snowman.color = '#d63031'



texttochange = "Snowman | Body"
setTimeout(textchange, 1000)

}
function b1(){
    closepannel()
snowman.color = '#74b9ff'



texttochange = "Snowman | Body"
setTimeout(textchange, 1000)

}
function g1(){
    closepannel()
snowman.color = '#00b894'



texttochange = "Snowman | Body"
setTimeout(textchange, 1000)

}
function y1(){
    closepannel()
snowman.color = '#ffeaa7'



texttochange = "Snowman | Body"
setTimeout(textchange, 1000)

}
function s1(){
    closepannel()
snowman.color = '#dfe6e9'



texttochange = "Snowman | Body"
setTimeout(textchange, 1000)

}
//=====PANNEL 2 FUNCTIONS
function c2(){
    closepannel()
    snowman.body = 'circle'
    
    texttochange = "Snowman | Face"
    setTimeout(textchange, 1000)

}
function s2(){
    closepannel()
    snowman.body = 'square'
    
    texttochange = "Snowman | Face"
    setTimeout(textchange, 1000)


}
function o2(){
    closepannel()
    snowman.body = 'oval'
    
    texttochange = "Snowman | Face"
    setTimeout(textchange, 1000)


}
function sl2(){
    closepannel()
    snowman.body = 'slim'
    
    texttochange = "Snowman | Face"
    setTimeout(textchange, 1000)


}
//=====PANNEL 3 FUNCTIONS
function n3(){
    closepannel()
    snowman.face = 'netural'
    
    texttochange = "Snowman | Arms"
    setTimeout(textchange, 1000)


}
function h3(){
    closepannel()
    snowman.face = 'happy'
    
    texttochange = "Snowman | Arms"
    setTimeout(textchange, 1000)


}
function c3(){
    closepannel()
    snowman.face = 'confused'
    
    texttochange = "Snowman | Arms"
    setTimeout(textchange, 1000)


}
function s3(){
    closepannel()
    snowman.face = 'surprised'
    
    texttochange = "Snowman | Arms"
    setTimeout(textchange, 1000)


}
function w3(){
    closepannel()
    snowman.face = 'what'
    
    texttochange = "Snowman | Arms"
    setTimeout(textchange, 1000)


}
//=====PANNEL 4 FUNCTIONS
function s4(){
    closepannel()
    snowman.arms = 'stick'
    
    texttochange = "Snowman | Hat"
    setTimeout(textchange, 1000)


}
function sn4(){
    closepannel()
    snowman.arms = 'snow'
    
    texttochange = "Snowman | Hat"
    setTimeout(textchange, 1000)


}
//=====PANNEL 5 FUNCTIONS
function f5(){
    closepannel()
    snowman.hat = 'hat'
    
    texttochange = "Snowman | Name"
    setTimeout(textchange, 1000)


}
function s5(){
    closepannel()
    snowman.hat = 'santa'
    
    texttochange = "Snowman | Name"
    setTimeout(textchange, 1000)


}
//=====PANNEL 6 FUNCTIONS
function b6(){
    closepannel()
    var name = document.getElementById('i6').value
    snowman.name = name
    
    texttochange = name
    setTimeout(textchange, 1000)


}
//=================PANNEL 7 FUNCTIONS
function w7(){
    arm2.style.animation = ''
    arm1.style.animation = ''
    pannelcontent.style.animation = ''
    arm2.style.animation = 'wave 2s'
    document.getElementById('w7').style.display = 'none'
    document.getElementById('c7').style.display = 'none'
    document.getElementById('s7').style.display = 'none'
    document.getElementById('sh7').style.display = 'none'
    setTimeout(reset,2000)
}
function c7(){
    arm2.style.animation = ''
    arm1.style.animation = ''
    pannelcontent.style.animation = ''
    arm1.style.animation = 'cheer 2s'
    arm2.style.animation = 'cheer2 2s'
    document.getElementById('w7').style.display = 'none'
    document.getElementById('c7').style.display = 'none'
    document.getElementById('s7').style.display = 'none'
    document.getElementById('sh7').style.display = 'none'
    setTimeout(reset,2000)
    
    
}
function s7(){
    arm2.style.animation = ''
    arm1.style.animation = ''
    pannelcontent.style.animation = ''
   pannelcontent.style.animation = 'spin 2s'
   document.getElementById('w7').style.display = 'none'
   document.getElementById('c7').style.display = 'none'
   document.getElementById('s7').style.display = 'none'
   document.getElementById('sh7').style.display = 'none'
   setTimeout(reset,2000)
   
    
}
function reset(){
    arm2.style.animation = ''
    arm1.style.animation = ''
    pannelcontent.style.animation = ''
    spinhat1.style.animation = ''
    spinhat2.style.animation = ''
    document.getElementById('w7').style.display = 'inline'
    document.getElementById('c7').style.display = 'inline'
    document.getElementById('s7').style.display = 'inline'
    document.getElementById('sh7').style.display = 'inline'
}
function sh7(){
    arm2.style.animation = ''
    arm1.style.animation = ''
    pannelcontent.style.animation = ''
    spinhat1.style.animation = ''
   spinhat2.style.animation = ''
   arm1.style.animation = 'spinhatarm 2s'
   spinhat1.style.animation = 'spinhat 3s'
   spinhat2.style.animation = 'spinhat 3s'
   document.getElementById('w7').style.display = 'none'
   document.getElementById('c7').style.display = 'none'
   document.getElementById('s7').style.display = 'none'
   document.getElementById('sh7').style.display = 'none'
   setTimeout(reset,2000)
}
    