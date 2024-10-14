// Get the project folder name
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

// Paths to the source and build folders
const buildFolder = `./dist`;
const srcFolder = `./src`;

// Paths to the project folders and files
export const pathtofiles = {
	build: {
		html: `${buildFolder}/`,
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		files: `${buildFolder}/files/`
	},
	src: {
		html: `${srcFolder}/*.html`,
		pug: `${srcFolder}/pug/*.pug`,
		js: `${srcFolder}/js/app.js`,
		scss: `${srcFolder}/scss/style.scss`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		fonts: `${srcFolder}/fonts/*.*`,
		files: `${srcFolder}/files/**/*.*`,
		svgicons: `${srcFolder}/svgicons/*.svg`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	rootFolder: rootFolder,
	srcFolder: srcFolder,
	// Path to the desired folder on the remote server.
	ftp: ``
	// Example: upload to the 2022 folder, then into a folder named after the project
	// ftp: `2022/${rootFolder}`
};

// FTP connection settings
export const configFTP = {
	host: "", // FTP server address
	user: "", // Username
	password: "", // Password
	parallel: 5 // Number of simultaneous streams
}