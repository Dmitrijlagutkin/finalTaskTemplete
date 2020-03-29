// SLIDER

let slider = document.querySelector('.slider_blog_wrap')
let prev = document.querySelector('.blog_arrowLeft')
let next = document.querySelector('.blog_arrowRight')
let counter = 0


prev.addEventListener("click", event => {
	sliderLeft()
})

next.addEventListener("click", event => {
	sliderright()
})

function sliderLeft() {
	let sliderArr = document.querySelector('.slider_blog')
	counter = counter - sliderArr.offsetWidth
	if (counter === -(sliderArr.offsetWidth * 4)) {
		counter = 0
	}
	slider.style.left = counter + 'px'
}

function sliderright() {
	let sliderArr = document.querySelector('.slider_blog')
	counter = counter + sliderArr.offsetWidth
	if (counter > 0) {
		counter = -(sliderArr.offsetWidth * 3)

	}
	slider.style.left = counter + 'px'
}