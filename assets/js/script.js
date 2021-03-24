document.querySelector(".toggle").addEventListener("click", function () {
    this.classList.add("animate");

    setTimeout(() => {
        this.classList.toggle("active");
        document.documentElement.classList.toggle('theme-dark');
    }, 150);

    setTimeout(() => this.classList.remove("animate"), 300);
});

document.addEventListener("DOMContentLoaded", () => {
	const $navbarBurgers = Array.prototype.slice.call(
		document.querySelectorAll(".navbar-burger"),
		0
	);

	if ($navbarBurgers.length > 0) {
		$navbarBurgers.forEach((el) => {
			el.addEventListener("click", () => {
				const target = el.dataset.target;
				const $target = document.getElementById(target);

				el.classList.toggle("is-active");
				$target.classList.toggle("is-active");
			});
		});
	}
});
