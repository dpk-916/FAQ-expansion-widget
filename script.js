const togglers = document.querySelectorAll('.faq-toggle')


togglers.forEach(toggle => {
	toggle.addEventListener('click', () => {
		toggle.parentNode.classList.toggle('active')
	})
})