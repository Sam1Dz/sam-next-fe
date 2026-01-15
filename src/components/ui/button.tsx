import type { VariantProps } from 'class-variance-authority';

import {
  Button as CoreButton,
  buttonVariants,
} from '~/components/ui/core/button';

type CoreButtonProps = typeof CoreButton;
type ButtonVariants = VariantProps<typeof buttonVariants>;

interface ButtonProps extends React.ComponentProps<CoreButtonProps> {
  icon?: React.ReactNode;
}

/**
 * An enhanced button component that wraps the core button.
 * Automates icon sizing logic when only an icon is present.
 *
 * @param props - The extended button props including an optional icon.
 * @param props.icon - An optional icon element to display within the button.
 * @param props.children - The content of the button.
 * @returns The enhanced button component with automatic icon handling.
 */
function Button({ icon, ...props }: ButtonProps) {
  const getSize = (): ButtonVariants['size'] => {
    if (!icon || props.children) return props.size;

    switch (props.size) {
      case 'sm':
        return 'icon-sm';
      case 'lg':
        return 'icon-lg';
      case 'default':
      case undefined:
      case null:
        return 'icon';
      default:
        return props.size;
    }
  };

  return (
    <CoreButton {...props} size={getSize()}>
      <div className="flex flex-row items-center gap-2">
        {icon}
        {props.children}
      </div>
    </CoreButton>
  );
}

export { Button, buttonVariants };
