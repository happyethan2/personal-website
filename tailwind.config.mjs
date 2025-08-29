/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // category accent colors (pastel)
        bitcoin: "#FBBF24",   // amber-400
        keto: "#34D399",      // emerald-400
        stats: "#67E8F9",     // cyan-300
        meditation: "#C4B5FD" // violet-300
      },
      backgroundImage: {
        'grain': "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"120\" height=\"120\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"4\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.035\"/></svg>')"
      },
      boxShadow: {
        soft: "0 1px 0 0 rgba(255,255,255,0.03) inset, 0 10px 30px rgba(0,0,0,0.35)",
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
