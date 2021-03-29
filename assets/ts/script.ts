// Implement Sticky/fixed navigation bar on scroll
let navbar: HTMLElement = document.querySelector(".navbar");

window.onscroll = () => {
	if (window.scrollY > 100) {
		navbar.classList.add("is-fixed-top");
		navbar.classList.add("navbar-fixed");
	} else {
		navbar.classList.remove("is-fixed-top");
		navbar.classList.remove("navbar-fixed");
	}
};

// Implement smooth scrolling on Anchor elements.
document
	.querySelectorAll('a[href^="#"]')
	.forEach((anchor: HTMLAnchorElement) => {
		anchor.addEventListener("click", function (event: MouseEvent) {
			event.preventDefault();

			document.querySelector(this.getAttribute("href")).scrollIntoView({
				behavior: "smooth",
			});
		});
	});

// Dark or Light theme handler
document.querySelector(".toggle").addEventListener("click", function () {
	this.classList.add("animate");

	setTimeout(() => {
		this.classList.toggle("active");
		document.documentElement.classList.toggle("theme-dark");
	}, 150);

	setTimeout(() => this.classList.remove("animate"), 300);
});

// Mobile navigation bar functionality
document.addEventListener("DOMContentLoaded", () => {
	const $navbarBurgers: Array<string> = Array.prototype.slice.call(
		document.querySelectorAll(".navbar-burger"),
		0
	);

	if ($navbarBurgers.length > 0) {
		$navbarBurgers.forEach((el: any) => {
			el.addEventListener("click", () => {
				const target: string = el.dataset.target;
				const $target: HTMLElement = document.getElementById(target);

				el.classList.toggle("is-active");
				$target.classList.toggle("is-active");
			});
		});
	}
});
