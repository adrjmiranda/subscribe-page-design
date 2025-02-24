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
