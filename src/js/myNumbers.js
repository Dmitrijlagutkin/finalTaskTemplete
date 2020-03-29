// NUMBERS

let firstNumber = document.querySelector('.firstNumber')
let secondNumber = document.querySelector('.secondNumber')
let thirdNumber = document.querySelector('.thirdNumber')
let forthNumber = document.querySelector('.forthNumber')
let fifthNumber = document.querySelector('.fifthNumber')

function chengeNumbers(nameNumber) {
	let number = +nameNumber.innerText
	let flag = true

	window.addEventListener('scroll', event => {

		if (flag === true) {
			let windowScroll = document.documentElement.scrollTop
			let i = 0
			if (windowScroll >= 1180) {
				setInterval(() => {
					flag = false
					if (i <= number) {
						nameNumber.innerText = i
						i++
					}
				}, 70)
			}
		}
	})
}

function mainNumbers() {
	chengeNumbers(firstNumber)
	chengeNumbers(secondNumber)
	chengeNumbers(thirdNumber)
	chengeNumbers(forthNumber)
	chengeNumbers(fifthNumber)
}

mainNumbers()