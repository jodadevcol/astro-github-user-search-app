/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "selector",
	theme: {
		extend: {
			fontFamily: {
				mono: ["Space Mono", "monospace"],
			},
			colors: {
				shared: {
					100: "#0079FF",
					200: "#F74646",
					300: "#60ABFF",
					400: "#90A4D4",
					500: "#222731",
				},
				light: {
					100: "#697C9A",
					200: "#4B6A9B",
					300: "#2B3442",
					400: "#F6F8FF",
					500: "#FEFEFE",
				},
				dark: {
					100: "#FFFFFF",
					200: "#141D2F",
					300: "#1E2A47",
				},
			},
			fontSize: {
				h1: [
					"1.625rem",
					{
						lineHeight: "2.375rem",
						fontWeight: "700",
					},
				],
				h2: [
					"1.375rem",
					{
						lineHeight: "2.063rem",
						fontWeight: "700",
					},
				],
				h3: [
					"1rem",
					{
						lineHeight: "1.5rem",
						fontWeight: "400",
					},
				],
				h4: [
					"0.813rem",
					{
						lineHeight: "1.25rem",
						fontWeight: "400",
					},
				],
				body: [
					"0.938rem",
					{
						lineHeight: "1.563rem",
						fontWeight: "400",
					},
				],
			},
			maxWidth: {
				"screen-md": "49rem",
			},
			boxShadow: {
				"container-user": "0px 16px 30px -10px rgba(70,96,187,0.20)",
			},
		},
	},
	plugins: [],
}
