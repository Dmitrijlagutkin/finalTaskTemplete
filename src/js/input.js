let input = document.querySelector('.input_placeholder')
let btn = document.querySelector('.input_btn')



btn.addEventListener("click", event => {
	checkInput()
})

function checkInputVal(email) {
	let reg = /([A-Za-z0-9.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})/
	return reg.test(email)
}

function checkInput() {
	if (!checkInputVal(input.value)) {
		input.classList.add("inputError")
		input.value = "not right email"

	} else {
		input.classList.add("inputSuccess")
		input.value = "Thanks"
	}
}