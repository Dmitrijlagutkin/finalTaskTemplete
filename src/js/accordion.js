// ACCORDION

let accordionHead = document.querySelectorAll('.accordion_title')
let accordionBody = document.querySelectorAll('.accordion_text')
let acordionArrow = document.querySelectorAll(".arrow")
let savedNum = +window.localStorage.getItem("num") || 0

// Значение по умолчанию
accordionBody[savedNum].classList.add("accordionBodyHeight")
accordionBody[savedNum].classList.toggle("accordion_text", "accordionBodyHeight")
acordionArrow[savedNum].classList.add("arrowRotate")
acordionArrow[savedNum].classList.toggle("arrowRotate", "arrow")

function acordion(firstNum, secondNum, thirdNum) {
	accordionHead[firstNum].addEventListener("click", event => {

		accordionBody[firstNum].classList.add("accordionBodyHeight")
		savedNum = firstNum
		accordionBody[secondNum].classList.remove("accordionBodyHeight")
		accordionBody[thirdNum].classList.remove("accordionBodyHeight")
		acordionArrow[firstNum].classList.add("arrowRotate")
		acordionArrow[secondNum].classList.remove("arrowRotate")
		acordionArrow[thirdNum].classList.remove("arrowRotate")
		window.localStorage.setItem("num", savedNum)
	})
}

function main() {
	acordion(0, 1, 2)
	acordion(1, 0, 2)
	acordion(2, 1, 0)
}

main()