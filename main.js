const rootDiv = document.getElementById("maindiv");
const arrName = "Madhur.Jidnyass.Samadhan.Prasad.Priyanka.Om.Sanjana.Snehal.Yash.Aishwarya.Raunak"
const nameArr = arrName.split(".");
//["Submit","Clear","Cut","Copy"]
const timeArr =[]
timeArr.sort();
const recOpe =["Received","New Snap","Delivered","Typing","Opened","New Chat"]
const colRecOp =["/imgFold/receivedSnap.png","/imgFold/unopenedSnap.png","/imgFold/snapSend.png"]
for(let i = 0;i < nameArr.length;i++){
  
  var randTimeAgo  = Math.floor(Math.random()*1000);
  console.log(randTimeAgo);
  if(randTimeAgo > 59){
    var hourAgo = Math.floor(randTimeAgo / 60);
    timeArr.push(hourAgo+"h")
  }else{
   timeArr.push(randTimeAgo+"min");
  }
  
  
  const mySec =document.createElement("section");
    mySec.className="first-chat";
    mySec.id ="fct"
  
  
 const myImg =document.createElement("img");
    myImg.className="pro-ac";
    myImg.id=="pro-ac";
    myImg.src="https://i.postimg.cc/zXM2fmQG/Screenshot-2022-05-10-20-40-37-806-com-snapchat-android.png";
 const myPara =document.createElement("p");
    myPara.className="chat-name"
    myPara.id="msg-data"
    myPara.innerHTML=nameArr[i];
    mySec.value = myPara.innerHTML;
    console.log(mySec.value);
 const myPara2 =document.createElement("p");
    myPara2.className="all-data";
    myPara2.value = myPara.innerHTML
    
 const myImgDec=document.createElement("img");
  
  myImgDec.className="cngCol";
  const mySpan1 =document.createElement("span");
  mySpan1.className="newsnap";
  var randRecOp = Math.floor(Math.random()*10);
  //console.log(randRecOp);
  mySpan1.innerHTML = recOpe[randRecOp%recOpe.length];
  mySpan1.value = myPara.innerHTML
  const myImg2 =document.createElement("img");
  myImg2.className="cht-pc";
  myImg2.src="https://i.postimg.cc/MKMHBR9m/scrn.png" ;
  myImg2.value = myPara.innerHTML
  myImg2.addEventListener('click',()=>{
      loadAllData(i);
    })
  if(mySpan1.innerHTML==="Received"){
    mySpan1.style.color ="gray";
    myImgDec.src=colRecOp[0];
    mySec.addEventListener('click',()=>{
      loadAllData(i);
    })
  }
  else if(mySpan1.innerHTML==="New Snap"){
    myPara.style.fontWeight ="bold";
    mySpan1.style.fontWeight ="bold";
    mySec.value  = "New Snap";
    myImgDec.src=colRecOp[1];
    
    
    
    mySec.addEventListener('click',()=>{
      if(mySpan1.innerHTML==="New Snap"){
     //var replaySnapDecider = true ;
    // function AllSnapData(){
     //function reusedDisplay(){
//  var mySpan1 = document.getElementsByClassName("newsnap");
      mySpan1.innerHTML = "Received";
      
      myImgDec.src=colRecOp[0];
      myPara.style.fontWeight ="normal";
      mySpan1.style.fontWeight ="normal";
      mySpan1.style.color ="gray";
        
      //}
    //  reusedDisplay()
      
    displaySnap()
    setTimeout(clearSnap,5000);
    if(mySpan1.innerHTML === "Received"){
      mySec.addEventListener('click',()=>{
        goToChat();
       loadAllData(i);
       console.log("nete sahi ho tum!!!!");
      })
      
      }
    
    }
    // AllSnapData()
     
   
    }  
    )
  
  
    
  
 } else if(mySpan1.innerHTML==="New Chat"){
    myImgDec.src="/imgFold/unreadChat.png";
    myPara.style.fontWeight ="bold";
    mySpan1.style.fontWeight ="bold";
    mySpan1.style.color ="#87CEEB";
    
   mySec.addEventListener('click',()=>{
    myImgDec.src="/imgFold/receivedChatOpen.png";
    myPara.style.fontWeight ="normal";
    mySpan1.style.fontWeight ="normal";
    mySpan1.style.color ="gray";
    mySpan1.innerHTML  ="Received";
    localStorage.setItem("mainManus",nameArr[i])
    console.log("€€€€€€"+localStorage.getItem("mainManus"));
    //location.href ="chat.html";
    var dataBhetla =localStorage.getItem("mainManus");
    var chnageMsgName =document.getElementById("chat-show-name").innerHTML = dataBhetla;
    document.getElementById("chat-prof-img").src=colRecOp[i%colRecOp.length];
    displayChat();
    onChatSec(dataBhetla);
  })
  }else if(mySpan1.innerHTML==="Opened"){
myImgDec.src=colRecOp[2];
mySec.addEventListener('click',()=>{
  loadAllData(i);
  onChatSec();
})

  }
  
  const mySpan2 =document.createElement("span");
  
  mySpan2.className="time-ago";
  mySpan2.innerHTML ="&nbsp;&nbsp;•"+timeArr[i]+"•&nbsp;&nbsp;"
  mySpan2.value = myPara.innerHTML
  const mySpan3 =document.createElement("span");
  const randStreak = Math.floor(Math.random()*1000);
//  console.log(randStreak);
  mySpan3.innerHTML =randStreak+"🔥";
    mySpan3.value = myPara.innerHTML
    mySpan3.className="streak";

  
const myDivL =document.createElement("img");
    myDivL.className = "ver-line";
  
rootDiv.appendChild(mySec)
  mySec.appendChild(myImg)
  mySec.appendChild(myPara)
  mySec.appendChild(myImgDec)
  mySec.appendChild(myPara2)
    
    myPara2.appendChild(mySpan1)
    myPara2.appendChild(mySpan2)
    myPara2.appendChild(mySpan3)
  mySec.appendChild(myImg2)
  mySec.appendChild(myDivL)
  
}
//var ab = "5";
//var ba = "5";
//console.log(ab+ba);


//GLOBAL VARIABLES
var mySec = document.getElementById("fct");
var myPara = document.getElementById("msg-data");
var myImg = document.getElementById("pro-ac");
var mySpan1 = document.getElementsByClassName("newsnap");
var mySpan2 = document.getElementsByClassName("time-ago");
var mySpan3 = document.getElementsByClassName("streak");
var myImg2 = document.getElementsByClassName("cht-pc");
var myImgDec = document.getElementsByClassName("cngCol");

let bt=document.querySelectorAll("#fct");
Array.from(bt).forEach((but)=>{
but.addEventListener('click', (e)=>{
  //location.href="chat.html";
var ab =e.target.value;
console.log(ab);


})
})
    




function displaySnap(){
  const snapDiv = document.getElementById("snapDiv");
  rootDiv.style.display ="none";
  snapDiv.style.display  = "block";
  const createImg = document.createElement("img");
  snapDiv.className ="snapDiv";
  createImg.src ="/Snapchat-242964874.jpg";
  createImg.className ="mySnapSeen";
  createImg.id = "remcreateImg";
  createImg.addEventListener('click',()=>{
    clearSnap()
  })
  snapDiv.appendChild(createImg);
}
function clearSnap(){
  rootDiv.style.display ="block";
  const snapDiv = document.getElementById("snapDiv");
  
  snapDiv.style.display  = "none";
  var remcreateImg = document.getElementById("remcreateImg");
  snapDiv.removeChild(remcreateImg);
}



//imgFold/chatSent.png
console.log("mad"-"2");




//NAVIGATION OF PAGES
function goToProf(){
  var indexpage = document.getElementById("maindiv");
  indexpage.style.display="none";
  var profpage = document.getElementById("prof_div");
  profpage.style.display="block";
  
}
function goToChat(){
  var indexpage = document.getElementById("maindiv");
  indexpage.style.display="none";
  /*var chatPage = document.getElementById("prof_div");
  chatPage.style.display="block";*/
  
}
function gotoIndex(){
  window.location.href ="index.html";
}






function loadAllData(i){
  localStorage.setItem("mainManus", nameArr[i])
  console.log("€€€€€€" + localStorage.getItem("mainManus"));
  //location.href ="chat.html";
  var dataBhetla = localStorage.getItem("mainManus");
  var chnageMsgName =document.getElementById("chat-show-name").innerHTML = dataBhetla;
    document.getElementById("chat-prof-img").src=colRecOp[1];
    displayChat();
}
function onChatSec(dataBhetla){
  var chatSec = document.getElementById("chat-msg-sec");
  var paidSec = document.createElement("p");
  var divSec = document.createElement("div");
   var paidSec1 = document.createElement("p");
   paidSec1.innerHTML =dataBhetla;
   paidSec1.className = "deep-sky-blue1";
   paidSec1.id ="msg-chi-id1";
 /*  paidSec1.style.fontSize = "12pt";
   paidSec1.style.marginTop = "2px";*/
  chatSec.appendChild(divSec);
  divSec.appendChild(paidSec1);
  
  divSec.appendChild(paidSec);
  
  divSec.className = "div-chat-sec1"
  paidSec.className = "div-chat-p"
  paidSec.innerHTML  ="Hii SnapChat!!!!";
}
function sendIt(){
  var inputText=document.getElementById("inptxt").value;
  var chatSec = document.getElementById("chat-msg-sec");
  var paidSec = document.createElement("p");
  var divSec = document.createElement("div");
   var paidSec1 = document.createElement("p");
   paidSec1.innerHTML ="Me";
   paidSec1.className = "deep-sky-blue";
   paidSec1.style.color="red"
   paidSec1.id ="msg-chi-id";
 /*  paidSec1.style.fontSize = "12pt";
   paidSec1.style.marginTop = "2px";*/
  chatSec.appendChild(divSec);
  divSec.appendChild(paidSec1);
  
  divSec.appendChild(paidSec);
  
  divSec.className = "div-chat-sec";
  divSec.style.borderColor="red";
  paidSec.className = "div-chat-p"
  paidSec.innerHTML  =inputText;
  var inputText1=document.getElementById("inptxt");
  inputText1.value = '';
  
    function getMsgF(inputText){
    var inputText=document.getElementById("inptxt").value;
  var chatSec = document.getElementById("chat-msg-sec");
  var paidSec = document.createElement("p");
  var divSec = document.createElement("div");
   var paidSec1 = document.createElement("p");
   paidSec1.innerHTML = "Me";
   paidSec1.className = "deep-sky-bluef";
 /*  paidSec1.style.fontSize = "12pt";
   paidSec1.style.marginTop = "2px";*/
  chatSec.appendChild(divSec);
  divSec.appendChild(paidSec1);
  
  divSec.appendChild(paidSec);
  
  divSec.className = "div-chat-secf"
  paidSec.className = "div-chat-pf"
  paidSec.innerHTML = inputText;
  
  }

 //const timeot = setTimeout(getMsgF,500);
}

function displayChat(){
  var indexpage = document.getElementById("maindiv");
  indexpage.style.display="none";
  var chatPage = document.getElementById("chat-div-body");
  chatPage.style.display="block";
  
}
function goToInd(){
  var indexpage = document.getElementById("maindiv");
  indexpage.style.display="block";
  var chatPage = document.getElementById("chat-div-body");
  chatPage.style.display ="none";
}
if(navigator.online ==="true"){
 console.log(true);
}
else{
 console.log(false);
}

