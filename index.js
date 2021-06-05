function toggleNav() {
	document.getElementById('nav').classList.toggle('show--mobilenav');
	let mobileNavIcon = document.getElementById('hamburger');
	if (mobileNavIcon.classList.contains('nav__toggle')) {
		mobileNavIcon.classList.remove('nav__toggle');
		mobileNavIcon.classList.add('nav__close');
	} else {
		mobileNavIcon.classList.remove('nav__close');
		mobileNavIcon.classList.add('nav__toggle');
	}
}

function dropDown(str) {
	document.getElementById(str).classList.toggle('show--dropdown');

	switch (str) {
		case 'productDropdown':
			document.querySelector('#productarrow').classList.toggle('rotate--icon');
			break;
		case 'companyDropdown':
			document.querySelector('#companyarrow').classList.toggle('rotate--icon');
			break;
		case 'connectDropdown':
			document.querySelector('#connectarrow').classList.toggle('rotate--icon');
			break;
		default:
			return;
	}
}

window.addEventListener('click', function (ev) {
	if (!ev.target.matches('.nav__item')) {
		let dropDowns = document.getElementsByClassName('dropdown');
		let i;
		for (i = 0; i < dropDowns.length; i++) {
			let openSharedown = dropDowns[i];
			if (openSharedown.classList.contains('show--dropdown')) {
				openSharedown.classList.remove('show--dropdown');
			}
		}
	}
});
