function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	
	document.getElementById("menu-bg").classList.toggle("change-bg");
}

/*-------------------------------colour pallete--------------------------------*/


const a= document.getElementById('color1')
const b= document.getElementById('color2')
const c= document.getElementById('color3')
const d= document.getElementById('color4')
const colorvar = '--primary'

const colorvar1 =  '--c1'
const colorvar2 =  '--c2'
const colorvar3 =  '--c3'
const colorvar4 =  '--c4'

a.addEventListener('click', _ =>{
	document.documentElement.style.setProperty(colorvar,' #7b325f')
})
b.addEventListener('click', _ =>{
	document.documentElement.style.setProperty(colorvar,' rgb(93, 120, 65)')
})
c.addEventListener('click', _ =>{
	document.documentElement.style.setProperty(colorvar,' #8e8226')
})
d.addEventListener('click', _ =>{
	document.documentElement.style.setProperty(colorvar,'rgb(10, 105, 115)')
})
