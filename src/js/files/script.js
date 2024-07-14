// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";



// document.addEventListener("DOMContentLoaded", (function () {
// 	var galleryImages = document.querySelector(".gallery-images");
// 	var moreGallery = document.getElementById("more-gallery");
// 	if (galleryImages && moreGallery) {
// 		var originalHeight = galleryImages.offsetHeight;
// 		var newHeight = originalHeight / 2;
// 		galleryImages.style.height = newHeight + "px";
// 		moreGallery.addEventListener("click", (function () {
// 			galleryImages.style.height = originalHeight + "px";
// 			moreGallery.classList.add("hidden");
// 			galleryImages.classList.remove("bg-gradient");
// 		}));
// 	}
// }));