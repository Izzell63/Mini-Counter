const Dec=document.getElementById("Dec");
const reset=document.getElementById("reset");
const In =document.getElementById("In");
const countlabel=document.getElementById("countlabel");
let count=0;
In.onclick=function(){
    count++;
    countlabel.textContent=count;
}
Dec.onclick=function(){
    count--
    countlabel.textContent=count;
}
reset.onclick=function(){
    count=0;
    countlabel.textContent=count;
}