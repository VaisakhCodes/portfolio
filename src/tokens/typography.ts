export const fontFamilies = {
  primary: ['Inter', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
} as const;

export const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extraBold: 800,
} as const;

export const fontSizes = {
  caption: '12px',
  bodyS: '14px',
  body: '16px',
  bodyL: '18px',
  h6: '18px',
  h5: '20px',
  h4: '24px',
  h3: '30px',
  h2: '36px',
  h1: '48px',
  displayL: '60px',
  displayXl: '72px',
} as const;

export const lineHeights = {
  display: '1.1',
  heading: '1.2',
  body: '1.7',
  small: '1.5',
  code: '1.6',
  // Specific line heights for the scale
  caption: '18px',
  bodyS: '22px',
  bodyPx: '28px',
  bodyLPx: '30px',
  h6: '28px',
  h5: '28px',
  h4: '32px',
  h3: '38px',
  h2: '44px',
  h1: '56px',
  displayL: '68px',
  displayXl: '80px',
} as const;

export const letterSpacings = {
  display: '-0.03em',
  headingLarge: '-0.02em', // H1-H3
  headingSmall: '-0.01em', // H4-H6
  body: '0',
  caption: '0.02em',
  overline: '0.08em',
} as const;
