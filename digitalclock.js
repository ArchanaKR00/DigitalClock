

const hours=document.querySelector("#hours")
const minutes=document.querySelector("#minutes")
const seconds=document.querySelector("#seconds")
const section=document.querySelector("#section")


const displayTime=()=>{

let time=new Date()
let hrs=time.getHours()
let min=time.getMinutes()
let sec=time.getSeconds()
 
if(hrs>=12){
    section.innerHTML="PM"
}else{
    section.innerHTML="AM"
}

if(hrs>12){
    hrs=hrs-12
}
if(hrs<10){
    hrs="0"+hrs
}
if(min<10){
    min="0"+min
}
if(sec<10){
   sec="0"+sec
}
hours.innerHTML=hrs
minutes.innerHTML=min
seconds.innerHTML=sec

}
setInterval(displayTime,10)
