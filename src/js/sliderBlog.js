// SLIDER

let slider = document.querySelector('.slider_blog_wrap')
let prev = document.querySelector('.blog_arrowLeft')
let next = document.querySelector('.blog_arrowRight')
let counter = +window.localStorage.getItem("savedNum") || 0

prev.addEventListener("click", event => {
	sliderLeft()
})

next.addEventListener("click", event => {
	sliderright()
})

window.addEventListener("load", event => {
	sliderLeft()
	sliderright()
})

function sliderLeft() {
	let sliderArr = document.querySelector('.slider_blog')
	counter = counter - sliderArr.offsetWidth

	if (counter === -(sliderArr.offsetWidth * 3)) {
		counter = 0
	}
	slider.style.left = counter + 'px'

	window.localStorage.setItem("savedNum", counter)
}

function sliderright() {
	let sliderArr = document.querySelector('.slider_blog')
	counter = counter + sliderArr.offsetWidth
	if (counter > 0) {
		counter = -(sliderArr.offsetWidth * 2)
	}
	slider.style.left = counter + 'px'
	window.localStorage.setItem("savedNum", counter)
}