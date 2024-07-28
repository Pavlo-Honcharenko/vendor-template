/*
(i) The code gets into the final file only when the function is called, 
for example, flsFunctions.spollers(); 
Or when the entire file is imported, 
for example, import "files/script.js"; 
Unused (not called) code does not get into the final file.

If we want to add a module, we should uncomment it.
*/

// Enable/Disable FLS (Full Logging System) (in work)
window['FLS'] = false;

// Connecting the main style file
import "../scss/style.scss";

//============================================================================================================================================================================================================================================
// React ========================================================================================================================================================================================================================================================
//============================================================================================================================================================================================================================================
// import Index from './react/Index.jsx';
//============================================================================================================================================================================================================================================

// ========================================================================================================================================================================================================================================================
// Functionality ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsFunctions from "./files/functions.js";

/* Check for webp support, adding the webp or no-webp class to HTML */
/* (i) necessary for correct display of webp with CSS */
// flsFunctions.isWebp();

/* Adding the touch class to HTML if the browser is mobile */
// flsFunctions.addTouchClass();

/* Adding the loaded class to HTML after the page is fully loaded */
// flsFunctions.addLoadedClass();

/* Module for working with the menu (Burger) */
// flsFunctions.menuInit();

/* Number formatting */
// import './libs/wNumb.min.js';

/*
Module "Spollers"
*/
flsFunctions.spollers();

/*
Tabes module
*/
// flsFunctions.tabs();

/*
The Module "Show more"
*/
flsFunctions.showMore();

/*
"Before/after" module
*/
// import './libs/beforeafter.js';

/*
The wave effect module
*/
// flsFunctions.rippleEffect();

/*
/*
Module "Custom Cursor"
*/
// flsFunctions.customCursor(true);

/*
Module "Running line" (Alpha)
*/
// import './libs/keywords.js'

/*
Popup module
*/
import './libs/popup.js'

/*
Paralax module
*/
// import './libs/parallax-mouse.js'

// ========================================================================================================================================================================================================================================================
// Working with forms ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsForms from "./files/forms/forms.js";

flsForms.formFieldsInit({
	viewPass: false,
	autoHeight: false
});

/* Sending the form */
flsForms.formSubmit();

/* The module of the form “quantity” */
// flsForms.formQuantity();

/* The star rating module */
flsForms.formRating();

/* The work module with select. */
// import './libs/select.js'

/* Calendar module */
import './files/forms/datepicker.js'

/* (In work) module of work with masks.*/
/*
Connection and Settings is performed in the file js/files/forms/inputmask.js
*/
import "./files/forms/inputmask.js";

/* Module range */
/*
Connection and Settings is performed in the file js/files/forms/range.js
Documentation on work in the template:
Documentation of the plugin: https://refreshless.com/nouislider/
*/
// import "./files/forms/range.js";

/* A module of work with clues (tippy) */
/*
Tippy.js plugin and settings are performed in the file js/files/tippy.js
Documentation on work in the template:
Documentation of the plugin: https://atomiks.github.io/tippyjs/
*/
// import "./files/tippy.js";

// ========================================================================================================================================================================================================================================================
// Working with slider (Swiper) ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Setting Slider Slider plugin and new sliders is performed in the file js/files/sliders.js
Documentation on work in a template: https://template.fls.guru/template-docs/rabota-so-slajderom-swiper.html
Documentation of the plugin: https://swiperjs.com/
*/
import "./files/sliders.js";

// ========================================================================================================================================================================================================================================================
// Page scrolling modules ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/*
Changing the design of the scrollbar
Documentation on work in a template: In html add to the block attribute data-simplebar
Documentation of the plugin: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
*/
// import './files/scroll/simplebar.js';

// Lazy (delayed) downloading pictures
// Documentation of the plugin: https://github.com/verlok/vanilla-lazyload
// import './files/scroll/lazyload.js';

// Observer for objects with the data-watch attribute
// import './libs/watcher.js'

// Full-page scrolling module
// import './libs/fullpage.js'

// Parallax module
// import './libs/parallax.js'

// Functions for working with scrolling
// import * as flsScroll from "./files/scroll/scroll.js";

// Smooth page navigation
// flsScroll.pageNavigation();

// Functionality for adding classes to the header during scrolling
// flsScroll.headerScroll();

// Digital counter animation module
// flsScroll.digitsCounter();

// ========================================================================================================================================================================================================================================================
// Галерея ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Documentation of the plugin: https://www.lightgalleryjs.com/docs/
*/
import "./files/gallery.js";





// ========================================================================================================================================================================================================================================================
// Other ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/* We connect the files with their code */
import "./files/script.js";
//============================================================================================================================================================================================================================================
