// PROGRESS

const progress = document.querySelector('.progress')

window.addEventListener('scroll', progressBar)

function progressBar(event) {
	let windowScroll = Math.trunc(document.documentElement.scrollTop)
	let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
	let progressValuePercent = windowScroll / windowHeight * 100
	progress.style.width = progressValuePercent + '%'
}