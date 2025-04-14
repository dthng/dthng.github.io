(function () {
	"use strict";
	/* Initiate Pure Counter */
	new PureCounter();

	/* Initiate glightbox */
	const glightbox = GLightbox({
		selector: ".glightbox",
	});

	/* Init isotope layout and filters */
	document.querySelectorAll(".isotope-layout").forEach(function (isotopeItem) {
		let layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
		let filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
		let sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

		let initIsotope;
		imagesLoaded(isotopeItem.querySelector(".isotope-container"), function () {
			initIsotope = new Isotope(
				isotopeItem.querySelector(".isotope-container"),
				{
					itemSelector: ".isotope-item",
					layoutMode: layout,
					filter: filter,
					sortBy: sort,
				}
			);
		});

		isotopeItem
			.querySelectorAll(".isotope-filters li")
			.forEach(function (filters) {
				filters.addEventListener(
					"click",
					function () {
						isotopeItem
							.querySelector(".isotope-filters .filter-active")
							.classList.remove("filter-active");
						this.classList.add("filter-active");
						initIsotope.arrange({
							filter: this.getAttribute("data-filter"),
						});
						if (typeof aosInit === "function") {
							aosInit();
						}
					},
					false
				);
			});
	});

	/* Correct scrolling position upon page load for URLs containing hash links.*/
	window.addEventListener("load", function (e) {
		if (window.location.hash) {
			if (document.querySelector(window.location.hash)) {
				setTimeout(() => {
					let section = document.querySelector(window.location.hash);
					let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
					window.scrollTo({
						top: section.offsetTop - parseInt(scrollMarginTop),
						behavior: "smooth",
					});
				}, 100);
			}
		}
	});

	/* Navmenu Scrollspy */
	let navmenulinks = document.querySelectorAll(".navmenu a");

	function navmenuScrollspy() {
		navmenulinks.forEach((navmenulink) => {
			if (!navmenulink.hash) return;
			let section = document.querySelector(navmenulink.hash);
			if (!section) return;
			let position = window.scrollY + 200;
			if (
				position >= section.offsetTop &&
				position <= section.offsetTop + section.offsetHeight
			) {
				document
					.querySelectorAll(".navmenu a.active")
					.forEach((link) => link.classList.remove("active"));
				navmenulink.classList.add("active");
			} else {
				navmenulink.classList.remove("active");
			}
		});
	}
	window.addEventListener("load", navmenuScrollspy);
	document.addEventListener("scroll", navmenuScrollspy);

	/* Scroll to top */
	let mybutton = document.getElementById("btn-back-to-top");

	window.onscroll = function () {
		scrollFunction();
	};

	function scrollFunction() {
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20
		) {
			mybutton.style.display = "block";
		} else {
			mybutton.style.display = "none";
		}
	}

	mybutton.addEventListener("click", backToTop);

	function backToTop() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
})();
