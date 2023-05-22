/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    mode: 'jit',
    theme: {
        extend: {
            colors: {
                'white': '#FFFFFF',
                'white2': '#FFFAEB',
                'white-12': 'rgba(255, 255, 255, .12)',
                'yellow': '#F9B800',
                'blue': '#0052B4',
                'purple': '#9747FF',
                'red': '#D80027',
                'dark': '#262626',
                'dark-80': 'rgba(19, 19, 19, 0.8)',
                'dark-12': 'rgba(19, 19, 19, 0.12)',
                'grey': '#787878',
                'light0': '#FFF1C9',
                'light1': '#FEEDBC',
                'light2': '#FFE18B',
                'light3': '#D3B970',
                'light4': '#FFBB45',
                'bg': '#FEEDBC',
                'bg2': '#FFFAEB',
                'shade': '#FFF6DA',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),

    ],
}