/**
 * Toggle Navbar Menu
 */

const toggleMenuButton = document.getElementById(
	'toggle-menu'
) as HTMLButtonElement;
const navbarMenu = document.querySelector('.navbar-menu') as HTMLUListElement;
const navbarMenuLinks = document.querySelectorAll(
	'.navbar-link'
) as NodeListOf<HTMLAnchorElement>;

const changeIcon = (): void => {
	const iconList = document.querySelectorAll(
		'#toggle-menu i'
	) as NodeListOf<HTMLElement>;

	iconList.length &&
		iconList.forEach((icon) => icon.classList.toggle('hidden'));
};

if (toggleMenuButton && navbarMenu && navbarMenuLinks.length) {
	toggleMenuButton.addEventListener('click', () => {
		navbarMenu.classList.toggle('show');
		changeIcon();
	});

	navbarMenuLinks.forEach((link) =>
		link.addEventListener('click', () => {
			navbarMenu.classList.toggle('show');
			changeIcon();
		})
	);
}

/**
 * Scroll Reveal Animation
 */
import ScrollReveal from 'scrollreveal';

const headerTextItems: Array<string> = [
	'header-title',
	'header-subtitle',
	'header-links',
];

for (let i = 0; i < headerTextItems.length; i++) {
	ScrollReveal().reveal(`.${headerTextItems[i]}`, {
		reset: false,
		opacity: 0,
		easing: 'ease-in-out',
		origin: 'bottom',
		distance: '30%',
		duration: 1550,
		delay: (i + 1) * 350,
	});
}
