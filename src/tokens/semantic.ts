import { colors } from './colors';

export const semanticColors = {
  primary: colors.primary.DEFAULT,
  'primary-hover': colors.primary.hover,
  background: colors.neutral.background,
  surface: colors.neutral.surface1,
  'surface-elevated': colors.neutral.surface2,
  border: colors.neutral.border,
  'text-primary': colors.typography.primary,
  'text-secondary': colors.typography.secondary,
  'text-muted': colors.typography.muted,
  success: colors.semantic.success,
  warning: colors.semantic.warning,
  error: colors.semantic.error,
  info: colors.semantic.info,
} as const;
