// NUMBERS

let firstNumber = document.querySelector('.firstNumber')
let secondNumber = document.querySelector('.secondNumber')
let thirdNumber = document.querySelector('.thirdNumber')
let forthNumber = document.querySelector('.forthNumber')
let fifthNumber = document.querySelector('.fifthNumber')


let flag = true

window.addEventListener('scroll', event => {
	if (flag === true) {
		chengeNumbers(firstNumber)
		chengeNumbers(secondNumber)
		chengeNumbers(thirdNumber)
		chengeNumbers(forthNumber)
		chengeNumbers(fifthNumber)
	}
	flag = false
})


function chengeNumbers(nameNumber) {
	let number = +nameNumber.innerText
	let windowScroll = document.documentElement.scrollTop
	let i = 0
	if (windowScroll >= 1180) {
		setInterval(() => {
			if (i <= number) {
				nameNumber.innerText = i
				i++
			}
		}, 70)
	}

}