/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                '3-auto-300': 'repeat(3, minmax(0, 300px))',
            },
            center: {
                flex: 'flex items-center justify-center',
            },
            backgroundColor: {
                principal: 'var(--bg-principal)',
                secundary: 'var(--bg-secundary)',
                selected: 'var(--bg-selected)',
                banner: 'var(--banner-principal)',
                'line-default': 'var(--line-default)',
            },

            textColor: {
                secundary: 'var(--line-secundary)',
                principal: 'var(--text-principal)',
                'icon-selected': 'var(--icon-selected)',
            },
        },
    },
    plugins: [],
}
