module.exports = {
  important: true,
  purge: {
    content: ['./src/**/*.vue'],
    options: {
      safelist: [/^text-case/, /^bg-process/, /^delay-/, /^z-/],
    },
  },
  theme: {
    screens: {
      xs: { max: '743px' },
      sm: { min: '744px', max: '1023px' },
      md: { min: '1024px', max: '1199px' },
      lg: { min: '1200px', max: '1919px' },
      xl: { min: '1920px' },
    },
    borderRadius: {
      default: '0.25rem',
      none: '0',
      3: '3px',
      5: '5px',
      8: '8px',
      10: '10px',
      12: '12px',
      15: '15px',
      16: '16px',
      20: '20px',
      32: '32px',
      25: '25px',
      30: '30px',
      45: '45px',
      60: '60px',
      100: '100px',
      full: '50%',
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '3.125rem',
      '5xl': '3.875rem',
      '6xl': '6.25rem',
      '7xl': '5rem',
    },
    extend: {
      opacity: {
        min: '0.001',
        40: '0.4',
        60: '0.6',
        70: '0.7',
        80: '0.8',
        85: '0.85',
      },
      lineHeight: {
        12: '3rem',
        16: '4rem',
        15: '3.75rem',
        18: '4.5rem',
        20: '5rem',
      },
      colors: {
        'yellow-1': '#FFF500',
        'gray-1': '#DCDCDC',
        'gray-2': '#727272',
        'gray-3': '#5A5A5A',
        'gray-4': '#C3C3C3',
        'gray-5': '#333333',
        'gray-6': '#5C585B',
        case: {
          1: '#FF9B80',
          'text-1': '#D74E28',
          2: '#EBA35D',
          'text-2': '#B3743D',
          3: '#8479FF',
          'text-3': '#AEA7FF',
          4: '#E6CDB6',
          'text-4': '#948373',
          5: '#98B2FF',
          'text-5': '#7C96E5',
          6: '#F2C459',
          'text-6': '#D19914',
          7: '#509BFD',
          'text-7': '#C7D0F0',
        },
        process: {
          'bg-1': '#FD815C',
          'adv-1': '#4A6696',
          'bg-2': '#465281',
          'adv-2': '#C2271C',
          'bg-3': '#2E0879',
          'adv-3': '#040404',
          'bg-4': '#CFBC62',
          'adv-4': '#A4823B',
          'bg-5': '#FD815C',
          'adv-5': '#E3480D',
          'bg-6': '#FE4A4F',
          'adv-6': '#FECD0C',
          'bg-7': '#9C0EA8',
          'adv-7': '#4D38EF',
        },
      },
      fontFamily: {
        gbold: 'Gotham Pro Bold',
      },
      boxShadow: {
        focus: '0 0 0 2px #3478F6',
        error: '0 0 0 1px #FF0000',
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
      },
    },
  },
  variants: {
    backgroundColor: ['hover', 'active', 'focus-within', 'responsive'],
    textColor: ['hover', 'active'],
    borderColor: ['hover', 'active', 'focus-within'],
  },
}
