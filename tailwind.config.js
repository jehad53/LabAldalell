/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0ea5e9', // Sky 500
                    dark: '#0284c7', // Sky 700
                },
                secondary: {
                    DEFAULT: '#10b981', // Emerald 500
                    dark: '#059669', // Emerald 700
                },
            },
            fontFamily: {
                sans: ['Cairo', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '1rem',
                screens: {
                    sm: '600px',
                    md: '728px',
                    lg: '984px',
                    xl: '1240px',
                    '2xl': '1496px',
                },
            },
        },
    },
    plugins: [],
}
