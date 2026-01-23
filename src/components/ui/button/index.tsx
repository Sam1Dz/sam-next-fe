'use client';

import type { VariantProps } from 'class-variance-authority';

import { useButtonGroup } from '~/components/ui/button/group';
import {
  Button as CoreButton,
  buttonVariants,
} from '~/components/ui/core/button';
import { Spinner } from '~/components/ui/core/spinner';
import { cn } from '~/lib/utils';

type CoreButtonProps = typeof CoreButton;
type ButtonVariants = VariantProps<typeof buttonVariants>;

export interface ButtonProps extends Omit<
  React.ComponentProps<CoreButtonProps>,
  'size'
> {
  block?: boolean;
  icon?: React.ReactNode;
  iconPlacement?: 'start' | 'end';
  loading?: boolean;
  size?: Exclude<ButtonVariants['size'], 'icon' | 'icon-sm' | 'icon-lg'>;
}

/**
 * An enhanced button component that wraps the core button.
 * Automates icon sizing logic when only an icon is present and handles icon placement.
 * Also manages distinct disabled states with specific hover behaviors and loading states.
 *
 * @param props - The extended button props.
 * @param props.block - Whether the button should take up the full width of its container.
 * @param props.icon - An optional icon element to display within the button.
 * @param props.iconPlacement - Position of the icon relative to children ('start' or 'end'). Defaults to 'start'.
 * @param props.loading - Whether the button is in a loading state. Replaces icon with spinner and disables button.
 * @param props.size - The size of the button. Defaults to the context size or 'default'.
 * @param props.variant - The visual variant of the button. Defaults to 'default'.
 * @param props.children - The content of the button.
 * @returns The enhanced button component with automatic icon, loading, and state handling.
 */
function Button({
  block,
  icon,
  loading,
  iconPlacement = 'start',
  size: propSize,
  type = 'button',
  variant = 'default',
  ...props
}: ButtonProps) {
  const currentIcon = loading ? <Spinner /> : icon;

  const groupContext = useButtonGroup();
  const size = propSize ?? groupContext?.size;

  /**
   * Retrieves the specific CSS classes for disabled hover states based on the variant.
   *
   * @param v - The current button variant.
   * @returns A string of CSS classes to enforce specific styles when disabled and hovered.
   */
  const getDisabledHoverClass = (v: typeof variant) => {
    const vKey = (v || 'default') as keyof typeof disabledHoverStyles;

    return disabledHoverStyles[vKey];
  };
  const disabledHoverStyles: Record<string, string> = {
    default:
      'disabled:hover:!bg-primary disabled:hover:!text-primary-foreground',
    destructive:
      'disabled:hover:!bg-destructive disabled:hover:!text-white dark:disabled:hover:!bg-destructive/60',
    outline:
      'disabled:hover:!bg-background disabled:hover:!text-foreground dark:disabled:hover:!bg-input/30',
    secondary:
      'disabled:hover:!bg-secondary disabled:hover:!text-secondary-foreground',
    ghost: 'disabled:hover:!bg-transparent disabled:hover:!text-inherit',
    link: 'disabled:hover:!no-underline disabled:hover:!text-primary',
  };

  /**
   * Determines the appropriate size for the underlying CoreButton.
   * Adjusts 'default', 'sm', 'lg' to 'icon', 'icon-sm', 'icon-lg' respectively if no text content is present.
   *
   * @returns The resolved size string for the CoreButton.
   */
  const getSize = (): ButtonVariants['size'] => {
    if ((!icon && !loading) || props.children) return size;

    switch (size) {
      case 'sm':
        return 'icon-sm';
      case 'lg':
        return 'icon-lg';
      case 'default':
      case undefined:
      case null:
        return 'icon';
      default:
        return size;
    }
  };

  return (
    <CoreButton
      {...props}
      className={cn(
        block && 'w-full',
        'disabled:pointer-events-auto disabled:cursor-not-allowed',
        getDisabledHoverClass(variant),
        props.className,
      )}
      disabled={props.disabled || loading}
      size={getSize()}
      type={type}
      variant={variant}
    >
      {(iconPlacement === 'start' || !props.children) && currentIcon}
      {props.children}
      {iconPlacement === 'end' && props.children && currentIcon}
    </CoreButton>
  );
}

export { Button, buttonVariants };
