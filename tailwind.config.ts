import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Goorm Sans", ...defaultTheme.fontFamily.sans],
				mono: ["Goorm Sans Code", ...defaultTheme.fontFamily.mono],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
} satisfies Config;
