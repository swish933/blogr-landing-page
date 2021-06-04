function dropDown(str) {
	document.getElementById(str).classList.toggle('show');
}

function toggleNav() {
	document.getElementById('nav').classList.toggle('show__mobilenav');
}

window.addEventListener('click', function (ev) {
	if (!ev.target.matches('.nav__item')) {
		let dropDowns = document.getElementsByClassName('dropdown');
		let i;
		for (i = 0; i < dropDowns.length; i++) {
			let openSharedown = dropDowns[i];
			if (openSharedown.classList.contains('show')) {
				openSharedown.classList.remove('show');
			}
		}
	}
});
