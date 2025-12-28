/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/**/*.html'],
    theme: {
        extend: {
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1', letterSpacing: '0.05em', fontWeight: '400' }],
                sm: ['0.875rem', { lineHeight: '1.25', letterSpacing: '0.025em', fontWeight: '400' }],
                base: ['1rem', { lineHeight: '1.5', letterSpacing: '0em', fontWeight: '400' }],
                lg: ['1.125rem', { lineHeight: '1.75', letterSpacing: '0em', fontWeight: '400' }],
                xl: ['1.25rem', { lineHeight: '1.75', letterSpacing: '0em', fontWeight: '400' }],
                '2xl': ['1.5rem', { lineHeight: '2', letterSpacing: '-0.01em', fontWeight: '500' }],
                '3xl': ['1.875rem', { lineHeight: '2.25', letterSpacing: '-0.015em', fontWeight: '600' }],
                '4xl': ['2.25rem', { lineHeight: '2.5', letterSpacing: '-0.02em', fontWeight: '700' }],
                '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.025em', fontWeight: '700' }],
                '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '700' }],
                '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.035em', fontWeight: '700' }],
                '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.04em', fontWeight: '700' }],
                '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.045em', fontWeight: '700' }],
            },
            fontFamily: {
                heading: "playfair display",
                paragraph: "roboto"
            },
            colors: {
                terracotta: '#E07A5F',
                beige: '#F5E7D2',
                'mud-brown': '#8B4513',
                'clay-orange': '#D2691E',
                destructive: '#DC143C',
                'destructive-foreground': '#FFFFFF',
                background: '#F5F5DC',
                secondary: '#D2B48C',
                foreground: '#333333',
                'secondary-foreground': '#333333',
                'primary-foreground': '#FFFFFF',
                primary: '#A0522D'
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
}
