/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{tsx,ts,js,tsx}"],
	theme: {
		extend: {
			colors: {
				// Primary

				Red: "hsl(0, 100%, 74%)",
				Green: "hsl(154, 59%, 51%)",

				// Accent

				Blue: "hsl(248, 32%, 49%)",

				// Neutral

				Dark_Blue: "hsl(249, 10%, 26%)",
				Grayish_Blue: "hsl(246, 25%, 77%)",
			},
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
};
