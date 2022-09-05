/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			xs: "360px",
			...defaultTheme.screens,
		},
		extend: {
			backgroundImage: {
				hero: "url('/img/heroimg1.png')",
			},
		},
	},
	plugins: [],
};
