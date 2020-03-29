// ACCORDION

let accordionHead = document.querySelectorAll('.accordion_title')
let accordionBody = document.querySelectorAll('.accordion_text')
let acordionArrow = document.querySelectorAll(".arrow")


// Значение по умолчанию
accordionBody[0].classList.add("accordionBodyHeight")
accordionBody[0].classList.toggle("accordion_text", "accordionBodyHeight")
acordionArrow[0].classList.add("arrowRotate")
acordionArrow[0].classList.toggle("arrowRotate", "arrow")

function acordion(firstNum, secondNum, thirdNum) {
	accordionHead[firstNum].addEventListener("click", event => {
		accordionBody[firstNum].classList.add("accordionBodyHeight")
		accordionBody[secondNum].classList.remove("accordionBodyHeight")
		accordionBody[thirdNum].classList.remove("accordionBodyHeight")
		acordionArrow[firstNum].classList.add("arrowRotate")
		acordionArrow[secondNum].classList.remove("arrowRotate")
		acordionArrow[thirdNum].classList.remove("arrowRotate")
	})
}

function main() {
	acordion(0, 1, 2)
	acordion(1, 0, 2)
	acordion(2, 1, 0)
}

main()