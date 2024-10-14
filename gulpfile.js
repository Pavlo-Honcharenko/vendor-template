// Import the main module
import gulp from "gulp";
// Import common plugins
import { plugins } from "./config/gulp-plugins.js";
// Import paths
import { pathtofiles } from "./config/gulp-settings.js";
// Import NodeJS functionality
import fs from 'fs';

// Pass values to a global variable
global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	isWebP: !process.argv.includes('--nowebp'), /* Automatic adding html code for Webp images, not needed */
	isImgOpt: !process.argv.includes('--noimgopt'), /* Image optimization, not needed */
	isFontsReW: process.argv.includes('--rewrite'), /* Re -create font files, not needed */
	gulp: gulp,
	path: pathtofiles,
	plugins: plugins
}

// Import tasks
import { reset } from "./config/gulp-tasks/reset.js";
import { html } from "./config/gulp-tasks/html.js";
import { css } from "./config/gulp-tasks/css.js";
import { js } from "./config/gulp-tasks/js.js";
import { jsDev } from "./config/gulp-tasks/js-dev.js";
import { WebP, imagesOptimize, copySvg } from "./config/gulp-tasks/images.js"; /* Used in the final assembly mode of the project, automatically converts images into smaller files, not needed */
import { ftp } from "./config/gulp-tasks/ftp.js"; /* Used in the final assembly mode of the project in cases if the delivery of foils is required by ftp, not needed */
import { zip } from "./config/gulp-tasks/zip.js"; /* not needed */
import { sprite } from "./config/gulp-tasks/sprite.js"; /* not needed */
import { gitignore } from "./config/gulp-tasks/gitignore.js";
import { otfToTtf, ttfToWoff2, woff2Copy, fontsStyle } from "./config/gulp-tasks/fonts.js"; /* Creation of fonts in other formats, not needed */

// Sequential font processing, not needed:
const fonts = gulp.series(reset, function (done) {
	// If the fonts folder exists
	if (fs.existsSync(`${app.path.srcFolder}/fonts`)) {
		gulp.series(otfToTtf, ttfToWoff2, woff2Copy, fontsStyle)(done);
	} else {
		done();
	}
});

// Task execution order for development mode, not needed:
const devTasks = gulp.series(fonts, gitignore);
// Task execution order for production mode
let buildTasks;
if (process.argv.includes('--nowebp')) {
	buildTasks = gulp.series(fonts, jsDev, js, gulp.parallel(html, css, gulp.parallel(WebP, imagesOptimize, copySvg), gitignore));
} else {
	buildTasks = gulp.series(fonts, jsDev, js, gulp.parallel(html, css, gulp.parallel(WebP, copySvg), gitignore));
}

// Export tasks
export { html }
export { css }
export { js }
export { jsDev }
export { fonts }  /* not needed */
export { sprite }  /* not needed */
export { ftp }  /* not needed */
export { zip }  /* not needed */

// Build task scripts
const development = devTasks;
const build = buildTasks;
const deployFTP = gulp.series(buildTasks, ftp);  /* not needed */
const deployZIP = gulp.series(buildTasks, zip);  /* not needed */

// Export scripts
export { development }
export { build }
export { deployFTP }  /* not needed */
export { deployZIP }  /* not needed */

// Default script execution
gulp.task('default', development);
