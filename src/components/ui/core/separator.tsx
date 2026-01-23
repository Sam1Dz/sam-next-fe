'use client';

import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as React from 'react';

import { cn } from '~/lib/utils';

/**
 * A decorative or structural separator component based on Radix UI Separator.
 * Visual divider between content.
 *
 * @param props - The component props.
 * @param props.className - Additional CSS classes to apply to the separator.
 * @param props.orientation - The orientation of the separator ('horizontal' or 'vertical'). Defaults to 'horizontal'.
 * @param props.decorative - Whether the separator is purely decorative. Defaults to true.
 * @returns The rendered separator component.
 */
function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      className={cn(
        'bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
        className,
      )}
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      {...props}
    />
  );
}

export { Separator };
