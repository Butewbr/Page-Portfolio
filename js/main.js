// PAUSE SCROLL
const everything = document.querySelector("html");

function pauseScroll() {
	everything.classList.toggle("pause");
}

// MENU
const burger = document.getElementById("burger");
const nav = document.getElementById("menu-nav");

function toggleMenu() {
	if (window.screen.width < 1025) {
		nav.classList.toggle("show");
		pauseScroll();
		// console.log("MENU!!!");
	}
}

burger.addEventListener("click", toggleMenu);

const menuButtons = document.getElementsByClassName("menu-item");

for (let menuButton of menuButtons) {
	menuButton.addEventListener("click", toggleMenu);
}

// SWIPER
var swiper = new Swiper(".mySwiper", {
	slidesPerView: "auto",
	spaceBetween: 30,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	scrollbar: {
		el: ".swiper-scrollbar",
		hide: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		900: {
			slidesPerView: 1.5,
			spaceBetween: 24,
		},
	},
});

// LINK ANCHORS
const anchors = document.getElementsByClassName("menu-item");

for (let anchor of anchors) {
	console.log(anchor.getAttribute("href"));
	anchor.addEventListener("click", () => {
		console.log("a");

		const destination = document.querySelector(anchor.getAttribute("name"));
		let y = destination.getBoundingClientRect().top + window.pageYOffset - 100;

		if (window.screen.width > 1025) {
			if (anchor.getAttribute("name") == "#sobre-nos-scroll") {
				console.log("sobre-nos");
				y = destination.getBoundingClientRect().top + window.pageYOffset - 200;
			} else {
				y = destination.getBoundingClientRect().top + window.pageYOffset - 50;
			}
		}

		console.log(y);

		window.scrollTo({ top: y });
	});
}
