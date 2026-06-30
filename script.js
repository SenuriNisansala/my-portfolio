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

const themeToggle = document.getElementById('theme-toggle');
if(themeToggle){
	const themeIcon = themeToggle.querySelector('i');

	const applyTheme = (theme) => {
		if(theme === 'dark'){
			document.body.classList.add('dark');
			if(themeIcon) themeIcon.classList.remove('fa-moon'), themeIcon.classList.add('fa-sun');
		} else {
			document.body.classList.remove('dark');
			if(themeIcon) themeIcon.classList.remove('fa-sun'), themeIcon.classList.add('fa-moon');
		}
		try{ localStorage.setItem('theme', theme); } catch(e){}
	};


	let saved = null;
	try{ saved = localStorage.getItem('theme'); } catch(e){}
	if(saved){
		applyTheme(saved);
	} else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
		applyTheme('dark');
	} else {
		applyTheme('light');
	}

	themeToggle.addEventListener('click', () => {
		const isDark = document.body.classList.contains('dark');
		applyTheme(isDark ? 'light' : 'dark');
	});
}