// NUMBERS

let firstNumber = document.querySelector('.firstNumber')
let secondNumber = document.querySelector('.secondNumber')
let thirdNumber = document.querySelector('.thirdNumber')
let forthNumber = document.querySelector('.forthNumber')
let fifthNumber = document.querySelector('.fifthNumber')


let flag = true

window.addEventListener('scroll', event => {
	let windowScroll = document.documentElement.scrollTop

	if (windowScroll >= 1180) {
		if (flag === true) {
			chengeNumbers(firstNumber)
			chengeNumbers(secondNumber)
			chengeNumbers(thirdNumber)
			chengeNumbers(forthNumber)
			chengeNumbers(fifthNumber)
			flag = false
		}
	}


})


function chengeNumbers(nameNumber, scloll) {
	let number = +nameNumber.innerText
	let i = 0

	setInterval(() => {
		if (i <= number) {
			nameNumber.innerText = i
			i++
		}
	}, 70)

}