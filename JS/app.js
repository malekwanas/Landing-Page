// Global Variables
const navList = document.querySelector('#navbar__list');
const footer = document.querySelector('footer');
const header = document.querySelector('.page__header');
const sections = document.querySelectorAll('section');

// Build Dynamic NavBar
const navBarMarkUp = [...sections]
	.map(
		(section) =>
			`<li><a href="#${section.id}" class="menu__link">${section.dataset.nav}</a></li>`,
	)
	.join('');

navList.insertAdjacentHTML('afterbegin', navBarMarkUp);

// Scroll Smooth Behaviour
const menuLinks = document.querySelectorAll('.menu__link'); // Here We Should Select The Links after creating the NavBar so we Couldn't but this In Global Variables
menuLinks.forEach((link) =>
	link.addEventListener('click', (event) => {
		event.preventDefault();
		const clickedSection = document.querySelector(
			event.target.getAttribute('href'),
		);
		window.scrollTo({
			top: clickedSection.offsetTop,
			behavior: 'smooth',
		});
	}),
);

// Add ActiveClass According to Section in VP
window.addEventListener('scroll', function addActiveClass() {
	sections.forEach((section, index) => {
		const sectionBoundaries = section.getBoundingClientRect();
		if (sectionBoundaries.top <= 350 && sectionBoundaries.bottom >= 350) {
			section.classList.add('your-active-class');
			menuLinks[index].classList.add('active_button');
		} else {
			section.classList.remove('your-active-class');
			menuLinks[index].classList.remove('active_button');
		}
	});
});
