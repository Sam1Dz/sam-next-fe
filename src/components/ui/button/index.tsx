'use client';

import type { VariantProps } from 'class-variance-authority';

import { useButtonGroup } from '~/components/ui/button/group';
import {
  Button as CoreButton,
  buttonVariants,
} from '~/components/ui/core/button';

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
 *
 * @param props - The extended button props including an optional icon.
 * @param props.icon - An optional icon element to display within the button.
 * @param props.iconPlacement - Position of the icon relative to children ('start' or 'end'). Defaults to 'start'.
 * @param props.children - The content of the button.
 * @returns The enhanced button component with automatic icon handling.
 */
function Button({
  icon,
  iconPlacement = 'start',
  size: propSize,
  ...props
}: ButtonProps) {
  const groupContext = useButtonGroup();
  const size = propSize ?? groupContext?.size;

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
    <CoreButton {...props} size={getSize()}>
      <div className="flex flex-row items-center gap-2">
        {iconPlacement === 'start' && icon}
        {props.children}
        {iconPlacement === 'end' && icon}
      </div>
    </CoreButton>
  );
}

export { Button, buttonVariants };
