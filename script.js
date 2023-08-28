function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});




/*

	console.log('Its working')

	let theme = localStorage.getItem('theme')

	if(theme == null){
		setTheme('light')
	}else{
		setTheme(theme)
	}

	let themeDots = document.getElementsByClassName('theme-dot')


	for (var i=0; themeDots.length > i; i++){
		themeDots[i].addEventListener('click', function(){
			let mode = this.dataset.mode
			console.log('Option clicked:', mode)
			setTheme(mode)
		})
	}

	function setTheme(mode){
		if(mode == 'light'){
			document.getElementById('theme-style').href = 'default.css'
		}

		if(mode == 'blue'){
			document.getElementById('theme-style').href = 'blue.css'
		}

		if(mode == 'green'){
			document.getElementById('theme-style').href = 'green.css'
		}

		if(mode == 'purple'){
			document.getElementById('theme-style').href = 'purple.css'
		}

		localStorage.setItem('theme', mode)
	}
/*