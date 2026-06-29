const text="Computer Science Undergraduate | University of Sri Jayewardenepura ";

let i=0;

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,60);

}

}

typing();

let btn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

btn.style.display="block";

}

else{

btn.style.display="none";

}

}

btn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}