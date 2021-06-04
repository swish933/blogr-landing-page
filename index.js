function dropDown(str) {
	document.getElementById(str).classList.toggle('show--dropdown');

	// switch (str) {
	// 	case 'productDropdown':
	// 		document.getElementById('productarrow').classList.toggle('rotate--icon');
	// 		break;
	// 	case 'companyDropdown':
	// 		document.getElementById('companyarrow').classList.toggle('rotate--icon');
	// 		break;
	// 	case 'connectDropdown':
	// 		document.getElementById('connectarrow').classList.toggle('rotate--icon');
	// 		break;
	// 	default:
	// 		return;
	// }

	// document.get;
}

function toggleNav() {
	document.getElementById('nav').classList.toggle('show--mobilenav');
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
