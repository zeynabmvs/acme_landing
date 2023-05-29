/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
    content: ["./index.html"],
    mode: 'jit',
    theme: {
        fontSize: {
            sm: '15px',
            base: ['16px', '22px'],
            'xl': ['18px', '24px'],
            '2xl': ['22px', '24px'],
        },
        extend: {
            colors: {
                'co-white': '#FFFFFF',
                'co-white2': '#FFFAEB',
                'co-white-12': 'rgba(255, 255, 255, .12)',
                'co-yellow': '#F9B800',
                'co-blue': '#0052B4',
                'co-purple': '#9747FF',
                'co-red': '#D80027',
                'co-dark': '#262626',
                'co-dark-80': 'rgba(19, 19, 19, 0.8)',
                'co-dark-12': 'rgba(250,144,144,0.12)',
                'co-grey': '#787878',
                'co-light0': '#FFF1C9',
                'co-light1': '#FEEDBC',
                'co-light2': '#FFE18B',
                'co-light3': '#D3B970',
                'co-light4': '#FFBB45',
                'co-bg': '#FEEDBC',
                'co-bg2': '#FFFAEB',
                'co-shade': '#FFF6DA',
            },
            spacing: {
                '1p': '1px',
                '7p': '7px',
                '9p': '9px',
                '22p': '1.375rem',
                '17p': '17px',
                '18p': '18px',
                '30p': '1.875rem',
                '38p': '38px',
                '44p': '44px',
                '46p': '46px',
                '47p': '47px',
                '49p': '49px',
                '50p': '3.125rem',
                '52p': '3.25rem',
                '58p': '58px',
                '60p': '60px',
                '100p': '100px',
                '120p': '120px',
                '135p': '135px',
                '150p': '150px',
                '229p': '229px',
                '148p': '148px',
                '172p': '172px',
            },
            maxWidth: {
                '9': '90%',
                '95': '95%',
                '2/3': '70%',
            },
            borderRadius: {
                'mobile': '50px',
                'desktop': '100px',
                'box': '55px',
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),

    ],
}