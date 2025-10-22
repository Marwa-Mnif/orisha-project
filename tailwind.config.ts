import AspectRatio from '@tailwindcss/aspect-ratio';
import Form from '@tailwindcss/forms';
import Typography from '@tailwindcss/typography';
import Scrollbar from 'tailwind-scrollbar';
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

/**
 * Tailwind CSS configuration file
 *
 * docs: https://tailwindcss.com/docs/configuration
 * default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const sizes = {
  banner: 'var(--header-transform-height, 96px)'
};

for (let i = 0; i < 500; i++) {
  sizes[i] = `${i / 4}rem`;
  sizes[`${i}.5`] = `${(i + 0.5) / 4}rem`;
}

export default {
  prefix: 'tw-',
  mode: 'jit',
  corePlugins: {
    preflight: true
  },
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js, jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '32px',
        md: '32px',
        lg: '40px',
        xl: '48px',
        '2xl': '64px'
      }
    },
    extend: {
      backgroundImage: {
        'yellow-energy-gradient-to-r':
          'linear-gradient(270deg, #EDFF00 2.33%, rgba(237, 255, 0, 0.30) 97.67%)',
        'yellow-energy-gradient-to-l':
          'linear-gradient(90deg, #EDFF00 2.33%, rgba(237, 255, 0, 0.30) 97.67%)',
        'yellow-energy-gradient-fade':
          'linear-gradient(270deg, rgba(237, 255, 0, 0.30) 2.33%, rgba(237, 255, 0, 0.30) 97.67%);'
      },
      spacing: {
        ...sizes
      },
      width: {
        ...sizes
      },
      maxWidth: {
        '5xl': '66.5rem',
        '5.5xl': '68rem',
        ...sizes
      },
      minHeight: {
        ...sizes,
        '100svh': '100svh',
        '100dvh': '100dvh'
      },
      height: {
        ...sizes,
        '100svh': '100svh',
        '100dvh': '100dvh'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      screens: {
        smallLaptop: {
          raw: '(max-height: 844px) and (min-width: 1024px)'
        },
        smallScreen: {
          raw: '(min-height: 690px) and (min-width: 1024px)'
        },
        smallMobile: {
          raw: '(max-height: 844px) and (max-width: 31.999em)'
        },
        longMobile: {
          raw: '(min-height: 844px) and (max-width: 31.999em)'
        },
        '3xl': '1900px',
        sm: '32em',
        md: '48em',
        lg: '64em',
        xl: '80em',
        'header-lg': '85em',
        'to-md': { max: '47.99em' },
        'to-lg': { max: '63.99em' },
        'to-xl': { max: '80em' },
        '2xl': '90em',
        '4xl': '125em',
        'sm-max': { max: '47.99em' },
        'sm-only': { min: '32em', max: '48em' },
        'md-only': { min: '48em', max: '64em' },
        'lg-only': { min: '64em', max: '80em' },
        'xl-only': { min: '80em', max: '96em' },
        '2xl-only': { min: '96em' }
      },
      fontSize: {
        'body-desktop-2': ['1.5rem', { lineHeight: '1.4' }],
        'body-mobile-2': ['1.125rem', { lineHeight: '1.4' }],
        '2xl': ['1.375rem', { lineHeight: '1.1' }],

        'mega-mobile': ['5rem', { lineHeight: '5rem' }],
        'mega-desktop': ['8rem', { lineHeight: '8rem' }],
        'super-mobile': ['4rem', { lineHeight: '4rem' }],
        'super-desktop': ['6rem', { lineHeight: '6rem' }],
        'large-mobile': ['3rem', { lineHeight: '3rem' }],
        'large-desktop': ['4.5rem', { lineHeight: '4.5rem' }],
        'medium-mobile': ['2.5rem', { lineHeight: '2.5rem' }],
        'medium-desktop': ['3.5rem', { lineHeight: '3.5rem' }],
        'small-mobile': ['2rem', { lineHeight: '2rem' }],
        'small-desktop': ['2.5rem', { lineHeight: '2.5rem' }],
        'tiny-mobile': ['1.5rem', { lineHeight: '1.5rem' }],
        'tiny-desktop': ['2rem', { lineHeight: '2rem' }],
        'body-large-mobile': ['1.125rem', { lineHeight: '1.5rem' }],
        'body-large-desktop': ['1.125rem', { lineHeight: '1.5rem' }],
        'body-medium-mobile': ['1rem', { lineHeight: '1.375rem' }],
        'body-medium-desktop': ['1rem', { lineHeight: '1.375rem' }],
        'body-small-mobile': ['0.875rem', { lineHeight: '1.25rem' }],
        'body-small-desktop': ['0.875rem', { lineHeight: '1.25rem' }],
        'body-micro-mobile': ['0.75rem', { lineHeight: '1rem' }],
        'body-micro-desktop': ['0.75rem', { lineHeight: '1rem' }],
        'chip-mobile': ['0.75rem', { lineHeight: '1.125rem' }],
        'chip-desktop': ['0.75rem', { lineHeight: '1.125rem' }],
        'nano-mobile': ['0.625rem', { lineHeight: '0.875rem' }],
        'nano-desktop': ['0.625rem', { lineHeight: '0.875rem' }]
      },
      fontFamily: {
        sans: ['Britanica', 'sans-serif'],
        britanica: ['Britanica', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        theme: {
          red: {
            DEFAULT: '#C74141'
          },
          black: '#0C0C0C',
          'hover-grey': '#2C2B2B',
          'copy-grey': '#9C9C9C'
        },
        blue1: '#00f',
        gray1: '#A5A5A5',
        gray2: '#0B0B0B',
        gray3: '#161616',
        'app-light-gray': '#CECECE',
        yellow1: '#EDFF00',
        yellow2: 'rgba(255, 211, 79, 1)',
        'faint-grey': { 1: '#EDEDED', 2: '#E0E0E0' },

        // theme
        black: {
          DEFAULT: '#0C0C0C',
          background: '#1D1D1D',
          home: '#0D120F',
          pure: '#000000'
        },
        blue: {
          electric: '#0000FF',
          mid: '#0000DA',
          deep: '#0000B6',
          azaneo: '#008dcf'
        },
        green: {
          dark: '#23251F',
          medium: '#3B3F35',
          lighter: '#474B3F',
          faded: '#939A92',
          positive: '#00FF29'
        },
        grey: {
          DEFAULT: '#666363',
          hover: '#2C2B2B',
          copy: '#9C9C9C',
          light: '#CFCFCF',
          faint: '#EDEDED',
          faded: '#F8F8F8',
          dark: '#404040'
        },
        beige: {
          DEFAULT: '#EEEDE6',
          25: '#FDFDFC',
          50: '#F8F7F4',
          100: '#EEEDE6',
          200: '#DBD7CC',
          300: '#C5BEAC',
          400: '#ACA18B',
          600: '#8F7D67',
          800: '#62554A',
          900: '#50463E',
          950: '#2A2420',
          975: '#120F0D'
        },
        white: {
          DEFAULT: '#ffffff'
        },
        yellow: {
          energy: '#EDFF00',
          mid: '#C3D100',
          deep: '#7C8600'
        },
        red: {
          negative: '#FF2E2E',
          partedis: '#E2001A'
        },
        orange: {
          DEFAULT: '#FF862E',
          azaneo: '#dc6839'
        }
      },
      boxShadow: {
        'custom-1': '0px 2px 50px 0px',
        'custom-2': '0px 4px 30px 0px',
        'ellipse-yellow': '0px 0px 20px 0px rgba(237, 255, 0, 0.30)',
        'yellow-shadow': '0px 2px 50px 0px rgba(237, 255, 0, 0.40)'
      },
      opacity: {
        15: '0.15'
      },
      transitionProperty: {
        absolute: 'top, right, bottom, left'
      },
      keyframes: {
        shake: {
          '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
          '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
          '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
          '40%, 60%': { transform: 'translate3d(4px, 0, 0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        },
        increase: {
          '0%': { transform: 'scale(0) translateY(0)', opacity: '0' },
          '25%': { transform: 'scale(1) translateY(0)', opacity: '1' },
          '75%': { transform: 'scale(1) translateY(-50%)', opacity: '0' },
          '100%': { transform: 'scale(0) translateY(0)', opacity: '0' }
        },
        ctaPulseYellow: {
          '0%': { 'box-shadow': '0px 0px 0px 0px rgba(247, 255, 148, 0.80)' },
          '50%': { 'box-shadow': '0px 0px 20px 0px rgba(247, 255, 148, 0.80)' },
          '100%': { 'box-shadow': '0px 0px 0px 0px rgba(247, 255, 148, 0.80)' }
        },
        ctaPulseGreen: {
          '0%': { 'box-shadow': '0px 0px 0px 0px rgba(0, 255, 41, 0.80)' },
          '50%': { 'box-shadow': '0px 0px 20px 0px rgba(0, 255, 41, 0.80)' },
          '100%': { 'box-shadow': '0px 0px 0px 0px rgba(0, 255, 41, 0.80)' }
        },
        infiniteTranslateX: {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          }
        },
        infiniteTranslateXReverse: {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(0)'
          }
        },
        infiniteTranslateY: {
          '0%': {
            transform: 'translateY(0)'
          },
          '100%': {
            transform: 'translateY(-100%)'
          }
        },
        infiniteTranslateYReverse: {
          '0%': {
            transform: 'translateY(-100%)'
          },
          '100%': {
            transform: 'translateY(0)'
          }
        },
        bounceM: {
          '0%, 100%': {
            transform: 'translateY(-150%)'
          },
          '50%': {
            transform: 'none'
          }
        },
        rotate: {
          '0%': {
            transform: 'rotate(0)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          }
        },
        rotateReverse: {
          '0%': {
            transform: 'rotate(0)'
          },
          '100%': {
            transform: 'rotate(-360deg)'
          }
        },
        'energy-pulse-dot': {
          '0%': {
            transform: 'scale(0)',
            opacity: '1'
          },
          '100%': {
            transform: 'scale(3)',
            opacity: '0'
          }
        },
        'energy-powerline': {
          '0%': {
            strokeDashoffset: '100%'
          },
          '100%': {
            strokeDashoffset: '0'
          }
        }
      },
      animation: {
        'infinite-translate-x':
          'infiniteTranslateX var(--tw-animation-duration, 10s) linear infinite',
        'infinite-translate-x-reverse':
          'infiniteTranslateXReverse var(--tw-animation-duration, 10s) linear infinite',
        'infinite-translate-y':
          'infiniteTranslateY var(--tw-animation-duration, 10s) linear infinite',
        'infinite-translate-y-reverse':
          'infiniteTranslateYReverse var(--tw-animation-duration, 10s) linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        shake: 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
        ctaPulseYellow: 'ctaPulseYellow 2s ease-in-out infinite',
        ctaPulseGreen: 'ctaPulseGreen 2s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-in-out',
        'fade-out': 'fadeOut 1s ease-in-out',
        increase: 'increase 1.5s infinite',
        'bounce-m': 'bounceM 1s linear infinite',
        rotate: 'rotate 4s linear infinite',
        'rotate-reverse': 'rotateReverse 4s linear infinite',
        'energy-pulse-dot':
          '2s ease-in-out 0s infinite normal none running energy-pulse-dot',
        'energy-powerline':
          '20s linear 0s infinite normal none running energy-powerline'
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled']
    }
  },
  plugins: [
    Form,
    Typography,
    AspectRatio,
    Scrollbar,
    require('@tailwindcss/container-queries'),
    plugin(({ addUtilities, addVariant, matchVariant }) => {
      matchVariant(
        '@',
        (value = '', { modifier }) => {
          return typeof value === 'string'
            ? `@container ${modifier ?? ''} ${value}`
            : [];
        },
        {
          values: {
            portrait: '(orientation: portrait)',
            landscape: '(orientation: landscape)'
          },
          sort(aVariant, zVariant) {
            let a = parseFloat(aVariant.value);
            let z = parseFloat(zVariant.value);

            if (a === null || z === null) return 0;

            // Sort values themselves regardless of unit
            if (a - z !== 0) return a - z;

            let aLabel = aVariant.modifier ?? '';
            let zLabel = zVariant.modifier ?? '';

            // Explicitly move empty labels to the end
            if (aLabel === '' && zLabel !== '') {
              return 1;
            } else if (aLabel !== '' && zLabel === '') {
              return -1;
            }

            // Sort labels alphabetically in the English locale
            // We are intentionally overriding the locale because we do not want the sort to
            // be affected by the machine's locale (be it a developer or CI environment)
            return aLabel.localeCompare(zLabel, 'en', { numeric: true });
          }
        }
      );
      addUtilities({
        // https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode
        '.horizontal-writing-tb': { 'writing-mode': 'horizontal-tb' },
        '.vertical-writing-rl': { 'writing-mode': 'vertical-rl' },
        '.vertical-writing-lr': { 'writing-mode': 'vertical-lr' },
        // https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation
        '.orientation-mixed': { 'text-orientation': 'mixed' },
        '.orientation-upright': { 'text-orientation': 'upright' },
        '.orientation-sideways-right': { 'text-orientation': 'sideways-right' },
        '.orientation-sideways': { 'text-orientation': 'sideways' },
        '.orientation-glyph': { 'text-orientation': 'use-glyph-orientation' }
      });
    })
  ]
} satisfies Config;

/* $phone:            "screen and (max-width: 500px)";
$tablet:           "screen and (min-width: 501px) and (max-width: 960px)";
$tablet-and-up:    "screen and (min-width: 501px)";
$pocket:           "screen and (max-width: 960px)";
$lap:              "screen and (min-width: 961px) and (max-width: 1280px)";
$portable:         "screen and (max-width: 1280px)";
$lap-and-up:       "screen and (min-width: 961px)";
$desk:             "screen and (min-width: 1280px)";
$widescreen:       "screen and (min-width: 1440px)";
$ultrascreen:       "screen and (min-width: 1920px)"; */
