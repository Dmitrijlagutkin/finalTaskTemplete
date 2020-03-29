let input = document.querySelector('.input_placeholder')
let btn = document.querySelector('.input_btn')
let reg = /([A-Za-z0-9.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})/


btn.addEventListener("click", event => {
	checkInput()
})

input.addEventListener("focus", event => {
	input.classList.remove("inputError")
	input.classList.remove("inputSuccess")
})

function checkInput() {
	let inputValue = input.value
	if (reg.test(inputValue) == false) {
		input.classList.add("inputError")
		input.value = "not right email"
		input.addEventListener("focus", event => {
			input.classList.remove("inputError")
			input.value = ""
		})
	} else {
		input.value = "Thanks"
		input.classList.add("inputSuccess")
		input.addEventListener("focus", event => {
			input.classList.remove("inputError")
			input.value = ""
		})
	}
}