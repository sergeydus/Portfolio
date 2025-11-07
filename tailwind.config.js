module.exports = {
    theme: {
        darkmode: 'class',
        extend: {
            colors: {
                primary: 'var(--color-primary)', // Use the CSS variable,
                secondary: 'var(--color-cyan-500)',
                text: 'var(--color-text-primary)',
                rootBackground: 'var(--root-background)',
                // orange: {
                //     50:  '#fff7ed',
                //     100: '#ffedd5',
                //     200: '#fed7aa',
                //     300: '#fdba74',
                //     400: '#fb923c',
                //     500: '#f97316',
                //     600: '#ea580c',
                //     700: '#c2410c',
                //     800: '#9a3412',
                //     900: '#7c2d12',
                // },
            },
        },
    },
    content: [
        './public/**/*.svg',
    ],
    plugins: [],
}