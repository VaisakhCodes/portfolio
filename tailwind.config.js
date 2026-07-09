import tailwindcssAnimate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: 'var(--spacing-6)',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        content: '1440px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			card: {
  				DEFAULT: 'var(--card)',
  				foreground: 'var(--card-foreground)'
  			},
  			popover: {
  				DEFAULT: 'var(--popover)',
  				foreground: 'var(--popover-foreground)'
  			},
  			primary: 'var(--color-primary)',
  			secondary: {
  				DEFAULT: 'var(--secondary)',
  				foreground: 'var(--secondary-foreground)'
  			},
  			muted: {
  				DEFAULT: 'var(--muted)',
  				foreground: 'var(--muted-foreground)'
  			},
  			accent: {
  				DEFAULT: 'var(--accent)',
  				foreground: 'var(--accent-foreground)'
  			},
  			destructive: {
  				DEFAULT: 'var(--destructive)',
  				foreground: 'var(--destructive-foreground)'
  			},
  			border: 'var(--color-border)',
  			input: 'var(--input)',
  			ring: 'var(--ring)',
  			chart: {
  				'1': 'var(--chart-1)',
  				'2': 'var(--chart-2)',
  				'3': 'var(--chart-3)',
  				'4': 'var(--chart-4)',
  				'5': 'var(--chart-5)'
  			},
        'primary-hover': 'var(--color-primary-hover)',
        surface: 'var(--color-surface)',
        'surface-elevated': 'var(--color-surface-elevated)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
        info: 'var(--color-info)'
  		},
      fontFamily: {
        primary: 'var(--font-family-primary)',
        mono: 'var(--font-family-mono)',
      },
      fontSize: {
        caption: 'var(--font-size-caption)',
        'body-s': 'var(--font-size-body-s)',
        body: 'var(--font-size-body)',
        'body-l': 'var(--font-size-body-l)',
        h6: 'var(--font-size-h6)',
        h5: 'var(--font-size-h5)',
        h4: 'var(--font-size-h4)',
        h3: 'var(--font-size-h3)',
        h2: 'var(--font-size-h2)',
        h1: 'var(--font-size-h1)',
        'display-l': 'var(--font-size-display-l)',
        'display-xl': 'var(--font-size-display-xl)',
      },
      fontWeight: {
        regular: 'var(--font-weight-regular)',
        medium: 'var(--font-weight-medium)',
        semibold: 'var(--font-weight-semibold)',
        bold: 'var(--font-weight-bold)',
        'extra-bold': 'var(--font-weight-extra-bold)',
      },
      lineHeight: {
        display: 'var(--line-height-display)',
        heading: 'var(--line-height-heading)',
        body: 'var(--line-height-body)',
        small: 'var(--line-height-small)',
        code: 'var(--line-height-code)',
      },
      letterSpacing: {
        display: 'var(--letter-spacing-display)',
        'heading-large': 'var(--letter-spacing-heading-large)',
        'heading-small': 'var(--letter-spacing-heading-small)',
        body: 'var(--letter-spacing-body)',
        caption: 'var(--letter-spacing-caption)',
        overline: 'var(--letter-spacing-overline)',
      },
      spacing: {
        0: 'var(--spacing-0)',
        1: 'var(--spacing-1)',
        2: 'var(--spacing-2)',
        3: 'var(--spacing-3)',
        4: 'var(--spacing-4)',
        5: 'var(--spacing-5)',
        6: 'var(--spacing-6)',
        8: 'var(--spacing-8)',
        10: 'var(--spacing-10)',
        12: 'var(--spacing-12)',
        16: 'var(--spacing-16)',
        20: 'var(--spacing-20)',
        24: 'var(--spacing-24)',
        32: 'var(--spacing-32)',
        section: 'var(--spacing-section)',
        card: 'var(--spacing-card)',
        button: 'var(--spacing-button)',
        navbar: 'var(--spacing-navbar)',
        dialog: 'var(--spacing-dialog)',
      },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
        none: 'var(--radius-none)',
        xs: 'var(--radius-xs)',
        xl: 'var(--radius-xl)',
        full: 'var(--radius-full)'
  		},
      boxShadow: {
        none: 'var(--shadow-none)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
      },
      borderWidth: {
        thin: 'var(--border-width-thin)',
        default: 'var(--border-width-default)',
      },
      transitionDuration: {
        fast: 'var(--duration-fast)',
        normal: 'var(--duration-normal)',
        medium: 'var(--duration-medium)',
        slow: 'var(--duration-slow)',
      },
      transitionTimingFunction: {
        standard: 'var(--ease-standard)',
        enter: 'var(--ease-enter)',
        exit: 'var(--ease-exit)',
      },
      zIndex: {
        base: '0',
        header: '100',
        dropdown: '200',
        tooltip: '300',
        drawer: '400',
        modal: '500',
        toast: '600',
      }
  	}
  },
  plugins: [tailwindcssAnimate],
}
