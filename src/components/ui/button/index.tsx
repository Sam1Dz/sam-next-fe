'use client';

import type { VariantProps } from 'class-variance-authority';

import { useButtonGroup } from '~/components/ui/button/group';
import {
  Button as CoreButton,
  buttonVariants,
} from '~/components/ui/core/button';
import { cn } from '~/lib/utils';

type CoreButtonProps = typeof CoreButton;
type ButtonVariants = VariantProps<typeof buttonVariants>;

export interface ButtonProps extends Omit<
  React.ComponentProps<CoreButtonProps>,
  'size'
> {
  icon?: React.ReactNode;
  iconPlacement?: 'start' | 'end';
  size?: Exclude<ButtonVariants['size'], 'icon' | 'icon-sm' | 'icon-lg'>;
}

/**
 * An enhanced button component that wraps the core button.
 * Automates icon sizing logic when only an icon is present and handles icon placement.
 * Also manages distinct disabled states with specific hover behaviors.
 *
 * @param props - The extended button props.
 * @param props.icon - An optional icon element to display within the button.
 * @param props.iconPlacement - Position of the icon relative to children ('start' or 'end'). Defaults to 'start'.
 * @param props.size - The size of the button. Defaults to the context size or 'default'.
 * @param props.variant - The visual variant of the button. Defaults to 'default'.
 * @param props.children - The content of the button.
 * @returns The enhanced button component with automatic icon and state handling.
 */
function Button({
  icon,
  iconPlacement = 'start',
  size: propSize,
  variant = 'default',
  ...props
}: ButtonProps) {
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
    if (!icon || props.children) return size;

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
        'disabled:pointer-events-auto disabled:cursor-not-allowed',
        getDisabledHoverClass(variant),
        props.className,
      )}
      size={getSize()}
      variant={variant}
    >
      {iconPlacement === 'start' && icon}
      {props.children}
      {iconPlacement === 'end' && icon}
    </CoreButton>
  );
}

export { Button, buttonVariants };
