// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";



// Button for showing all photos in the gallery:

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
	// Select the elements
	var galleryImages = document.querySelector('.gallery-images');
	var moreGallery = document.getElementById('more-gallery');

	// Check if the elements exist
	if (galleryImages && moreGallery) {
		// Get the original height of the galleryImages element
		var originalHeight = galleryImages.offsetHeight;

		// Calculate the new height (half of the original height)
		var newHeight = originalHeight / 2;

		// Set the new height as an inline style
		galleryImages.style.height = newHeight + 'px';

		// Add a click event listener to the moreGallery element
		moreGallery.addEventListener('click', function () {
			// Restore the original height of the galleryImages element
			galleryImages.style.height = originalHeight + 'px';

			// Add the class 'hidden' to the moreGallery element
			moreGallery.classList.add('hidden');

			// Remove the class 'bg-gradient'
			galleryImages.classList.remove('bg-gradient');
		});
	}
});

