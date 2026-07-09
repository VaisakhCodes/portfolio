export const motion = {
  durations: {
    instant: '0ms',
    fast: '150ms',
    normal: '250ms',
    medium: '350ms',
    slow: '500ms',
    extraSlow: '700ms',
  },
  easings: {
    linear: 'linear',
    easeOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  },
} as const;
