// Connecting common functionality
import { isMobile } from "./functions.js";
// Connecting the list of active modules
import { flsModules } from "./modules.js";



// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
	// Get the element with id 'submit-review'
	var submitReviewButton = document.getElementById('submit-review');
	var mobileRating = document.getElementById('mobile-rating');

	// Check if the mobile rating id exists
	if (mobileRating) {

		// Get all elements with class 'rating__item' inside setRatingPC
		const ratingItems = mobileRating.querySelectorAll('.rating__item');

		// Add click event listener to each 'rating__item'
		ratingItems.forEach((item, index) => {
			item.addEventListener('click', () => {

				// Get the element with id 'rating-hidden-fild-popup'
				var setRatingElement = document.getElementById('rating-hidden-fild-popup');

				// Check if the element exists
				if (setRatingElement) {
					// Set the data-rating-value attribute to 5
					var indexNumber = index + 1;
					document.getElementById('rating-hidden-fild-popup').value = indexNumber;
				}

				var setRatingElementPopup = document.getElementById('set-rating-popup');
				// Get all elements with class 'rating__item' inside 'set-rating-popup'
				var ratingItems = setRatingElementPopup.getElementsByClassName('rating__item');
				var activeCount = indexNumber;
				// Add class 'rating__item--active' to the first activeCount number of elements
				for (var i = 0; i < activeCount && i < ratingItems.length; i++) {
					ratingItems[i].classList.add('rating__item--active');
				}
			});
		});
	}


	// Check if the submit button exists
	if (submitReviewButton) {
		// Add click event listener to the submit button
		submitReviewButton.addEventListener('click', function () {
			// Get the element with id 'leave-review-in-popup'
			var leaveReviewElement = document.getElementById('leave-review-in-popup');

			// Check if the element exists
			if (leaveReviewElement) {
				// Get all elements with class 'rating__item--active' inside 'leave-review-in-popup'
				var activeRatingItems = leaveReviewElement.getElementsByClassName('rating__item--active');

				// Count the number of active rating items
				var activeCount = activeRatingItems.length;

				if (activeCount) {
					document.getElementById('rating-hidden-fild-popup').value = activeCount;

					// Get the element with id 'set-rating-popup'
					var setRatingElementPopup = document.getElementById('set-rating-popup');

					// Check if the element exists
					if (setRatingElementPopup) {
						// Set the data-rating-value attribute to 5
						setRatingElementPopup.setAttribute('data-rating-value', activeCount);

						// Get all elements with class 'rating__item' inside 'set-rating-popup'
						var ratingItems = setRatingElementPopup.getElementsByClassName('rating__item');

						// Add class 'rating__item--active' to the first activeCount number of elements
						for (var i = 0; i < activeCount && i < ratingItems.length; i++) {
							ratingItems[i].classList.add('rating__item--active');
						}
					}
				}

			}
		});
	}

	// Select all elements with the class 'role'
	const roleElements = document.querySelectorAll('.role');

	// Add a click event listener to each element
	roleElements.forEach(element => {
		element.addEventListener('click', function () {
			// Get all radio buttons with the name 'role'
			const roles = document.getElementsByName('role');

			// Check which radio button is selected
			roles.forEach(role => {
				if (role.checked) {
					let roleParent = role.closest('.role');
					roleParent.classList.add('selected');
				} else {
					let roleParent = role.closest('.role');
					roleParent.classList.remove('selected');
				}
			});
		});
	});

	const uploadButtonPopup = document.getElementById('upload-photos-button-popup');
	const photoUploadFieldsPopup = document.getElementById('photo-upload-fields-popup');

	uploadButtonPopup.addEventListener('click', function () {
		photoUploadFieldsPopup.style.display = 'block';
	});

	const uploadButtonPC = document.getElementById('upload-photos-button-pc');
	const photoUploadFieldsPC = document.getElementById('photo-upload-fields-pc');

	// ---> Check for existence:
	if (uploadButtonPC) {
		uploadButtonPC.addEventListener('click', function () {
			photoUploadFieldsPC.style.display = 'block';
		});
	}





	var setRatingPopup = document.getElementById('set-rating-popup');

	// Check if the submit button exists
	if (setRatingPopup) {
		// Get all elements with class 'rating__item' inside setRatingPC
		const ratingItems = setRatingPopup.querySelectorAll('.rating__item');

		// Add click event listener to each 'rating__item'
		ratingItems.forEach((item, index) => {
			item.addEventListener('click', () => {
				// Log the index of the clicked element + 1 (to make it 1-based)
				console.log(`Clicked on element ${index + 1}`);

				// Get the element with id 'rating-hidden-fild-popup'
				var setRatingElement = document.getElementById('rating-hidden-fild-popup');

				// Check if the element exists
				if (setRatingElement) {
					// Set the data-rating-value attribute to 5
					var indexNumber = index + 1;
					document.getElementById('rating-hidden-fild-popup').value = indexNumber;
				}
			});
		});
	}

	// var submitReviewButton = document.getElementById('submit-review');
	const hideFields = document.getElementById('hide-fields');
	const submitButtonPC = document.getElementById('submit-pc');

	// Add event listener to the submit button
	// ---> Check for existence:
	if (submitButtonPC) {
		submitButtonPC.addEventListener('click', function (event) {
			// Check if any of the hideFields have the class 'hidden'
			if (hideFields.classList.contains('hide')) {
				event.preventDefault();
				hideFields.classList.remove('hide');
			}
		});
	}


	var setRatingPC = document.getElementById('set-rating-pc');

	// Check if the setRatingPC exists
	if (setRatingPC) {
		// Get all elements with class 'rating__item' inside setRatingPC
		const ratingItems = setRatingPC.querySelectorAll('.rating__item');

		// Add click event listener to each 'rating__item'
		ratingItems.forEach((item, index) => {
			item.addEventListener('click', () => {

				// Get the element with id 'rating-hidden-fild-pc'
				var setRatingElement = document.getElementById('rating-hidden-fild-pc');

				// Check if the element exists
				if (setRatingElement) {
					// Set the data-rating-value attribute to 5
					var indexNumber = index + 1;
					document.getElementById('rating-hidden-fild-pc').value = indexNumber;
				}

				hideFields.classList.remove('hide');
			});
		});
	}



	// Check if the element with ID 'leave-review-checkbox-popup' exists
	const checkboxPopup = document.getElementById('checkbox-popup');
	if (checkboxPopup) {
		checkboxPopup.addEventListener('click', () => {
			// Check if the checkbox with the class 'checkbox__input' is checked
			const checkedCheckbox = checkboxPopup.querySelector('.checkbox__input:checked');
			if (checkedCheckbox) {
				var lvForm = document.querySelector('#leave-review-popup-form');
				if (lvForm) {
					lvForm.classList.add('checked');
				}
			} else {
				var lvForm = document.querySelector('#leave-review-popup-form');
				if (lvForm) {
					lvForm.classList.remove('checked');
				}
			}
		});
	}



	const checkboxPC = document.getElementById('checkbox-pc');
	if (checkboxPC) {
		checkboxPC.addEventListener('click', () => {
			// Check if the checkbox with the class 'checkbox__input' is checked
			const checkedCheckbox = checkboxPC.querySelector('.checkbox__input:checked');
			if (checkedCheckbox) {
				var lvForm = document.querySelector('#leave-review-form');
				if (lvForm) {
					lvForm.classList.add('checked');
				}
			} else {
				var lvForm = document.querySelector('#leave-review-form');
				if (lvForm) {
					lvForm.classList.remove('checked');
				}
			}
		});
	}


	// A script for choosing no more than 3 checkboxes in a contact form for PC
	const containerPC = document.querySelector('.contact-form-PC.max-3-checkboxes');

	if (containerPC) {
		const checkboxes = containerPC.querySelectorAll('.checkbox__input');
		const maxChecked = 3;

		if (checkboxes.length > 0) {
			// Add a change processor for each checkbox
			checkboxes.forEach(checkbox => {
				checkbox.addEventListener('change', () => {
					// We count the number of selected checkboxes
					const checkedCount = containerPC.querySelectorAll('.checkbox__input:checked').length;

					// If exactly 3 checkboxes are selected, disable the unchecked ones
					if (checkedCount >= maxChecked) {
						checkboxes.forEach(cb => {
							if (!cb.checked) {
								cb.classList.add('disabled');
								cb.disabled = true;

								// Add the 'disabled' class to the next element (label)
								const nextElement = cb.nextElementSibling;
								if (nextElement) {
									nextElement.classList.add('disabled');
								}
							}
						});
					} else {
						// If less than 3 are selected, enable all checkboxes
						checkboxes.forEach(cb => {
							cb.classList.remove('disabled');
							cb.disabled = false;

							// Remove the 'disabled' class from the next element (label)
							const nextElement = cb.nextElementSibling;
							if (nextElement) {
								nextElement.classList.remove('disabled');
							}
						});
					}
				});
			});
		}
	}



	// A script for choosing no more than 3 checkboxes in a contact form fpr mobile devices
	const containerMobile = document.querySelector('.contact-form-mob.max-3-checkboxes');

	if (containerMobile) {
		const checkboxes = containerMobile.querySelectorAll('.checkbox__input');
		const maxChecked = 3;

		if (checkboxes.length > 0) {
			// Add a change processor for each checkbox
			checkboxes.forEach(checkbox => {
				checkbox.addEventListener('change', () => {
					// We count the number of selected checkboxes
					const checkedCount = containerMobile.querySelectorAll('.checkbox__input:checked').length;

					// If exactly 3 checkboxes are selected, disable the unchecked ones
					if (checkedCount >= maxChecked) {
						checkboxes.forEach(cb => {
							if (!cb.checked) {
								cb.classList.add('disabled');
								cb.disabled = true;

								// Add the 'disabled' class to the next element (label)
								const nextElement = cb.nextElementSibling;
								if (nextElement) {
									nextElement.classList.add('disabled');
								}
							}
						});
					} else {
						// If less than 3 are selected, enable all checkboxes
						checkboxes.forEach(cb => {
							cb.classList.remove('disabled');
							cb.disabled = false;

							// Remove the 'disabled' class from the next element (label)
							const nextElement = cb.nextElementSibling;
							if (nextElement) {
								nextElement.classList.remove('disabled');
							}
						});
					}
				});
			});
		}
	}





	const locationSelect = document.querySelector('#find-vendors-filter-location');
	const categorySelect = document.querySelector('#find-vendors-filter-cathegory');
	const locationDropdown = document.querySelector('#find-vendors-filter-locations');
	const categoryDropdown = document.querySelector('#find-vendors-filter-cathegories');

	// Check if elements exist before using them
	if (locationSelect && categorySelect && locationDropdown && categoryDropdown) {

		locationSelect.addEventListener('click', function () {
			console.log('click locationSelect');
			// Add _active and _visible class for location
			locationSelect.classList.add('_active');
			locationDropdown.classList.add('_visible');

			// Remove classes for category
			categorySelect.classList.remove('_active');
			categoryDropdown.classList.remove('_visible');
		});

		categorySelect.addEventListener('click', function () {
			console.log('click categorySelect');
			// Add _active and _visible class for category
			categorySelect.classList.add('_active');
			categoryDropdown.classList.add('_visible');

			// Remove classes for location
			locationSelect.classList.remove('_active');
			locationDropdown.classList.remove('_visible');
		});
	}









});