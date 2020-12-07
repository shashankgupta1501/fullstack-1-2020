const time=document.querySelector("h1");
const greeting=document.querySelector("h3");
const day=document.querySelector("h4");
const name=document.querySelector("h2");
const body=document.querySelector("body");

function addZero(num){
    return num<10?"0"+num:num;
}
function amPM(hour) {
    return hour>=12?"pm":"am";
}
function setGreeting(hour) {
    if(hour>=17){return "good evening";}
    else if(hour>=12){return "good afternoon";}
    else{return "good morning";}
}
function setName(){
    name.innerHTML= localStorage.getItem('myName')==null?"[enter name]":localStorage.getItem('myName');
}
function saveName(e) {
    if(name.innerHTML==""){
        alert("empty String can't accepted");
        setName();
        return;
    }
    localStorage.setItem("myName",name.innerHTML);
    setName();
}
function setWallpaper(hour) {
    if(hour>=17){
        if(body.style.backgroundImage != 'url("../img/evening.jpg")') {
            body.style.backgroundImage = 'url("../img/evening.jpg")';
            body.style.color="white";
        }
    }
    else if(hour>=12){
        if(body.style.backgroundImage != 'url("../img/afternoon.jpg")') {
            body.style.backgroundImage = 'url("../img/afternoon.jpg")';
            body.style.color="black";
        }    
    }
    else{
        if(body.style.backgroundImage != 'url("../img/morning.jpg")') {
            body.style.backgroundImage = 'url("../img/morning.jpg")';
            body.style.color="black";
        }
    }
}
function setTime(){
    let date=new Date();
    let hour=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    time.innerHTML=`${addZero(hour%12||12)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPM(hour)}`;
    greeting.innerHTML=setGreeting(hour);
    setWallpaper(hour);
    day.innerHTML=date.toDateString();
    setTimeout(setTime,1000);
}

name.addEventListener("keypress",e =>{if(e.keyCode==13){name.blur();}});
name.addEventListener("blur",saveName);
setTime();
setName();