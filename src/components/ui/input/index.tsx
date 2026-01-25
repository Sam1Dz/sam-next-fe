'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '~/components/ui/core/input-group';
import { cn } from '~/lib/utils';

const containerVariants = cva('w-full transition-all', {
  variants: {
    size: {
      default: 'h-9',
      sm: 'h-8',
      lg: 'h-10',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

const inputVariants = cva('h-full', {
  variants: {
    size: {
      default: 'py-2 px-3',
      sm: 'py-1 px-2.5',
      lg: 'py-2 px-4',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export interface InputProps
  extends
    Omit<React.ComponentProps<typeof InputGroupInput>, 'size' | 'prefix'>,
    VariantProps<typeof containerVariants> {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

/**
 * An enhanced input component that wraps the core input group.
 * Supports prefixes, suffixes, and different sizes.
 *
 * @param props - The component props.
 * @param props.prefix - Optional content to display before the input.
 * @param props.suffix - Optional content to display after the input.
 * @param props.size - The size of the input ('default', 'sm', 'lg').
 * @param props.className - Additional CSS classes.
 * @returns The enhanced input component.
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ size = 'default', prefix, suffix, ...props }: InputProps, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useImperativeHandle(ref, () => inputRef.current!);

    const addonClass = 'text-muted-foreground h-full';

    return (
      <InputGroup className={cn(containerVariants({ size }), props.className)}>
        {prefix && (
          <InputGroupAddon align="inline-start" className={addonClass}>
            {prefix}
          </InputGroupAddon>
        )}
        <InputGroupInput
          ref={inputRef}
          className={cn(inputVariants({ size }))}
          {...props}
        />
        {suffix && (
          <InputGroupAddon align="inline-end" className={addonClass}>
            {suffix}
          </InputGroupAddon>
        )}
      </InputGroup>
    );
  },
);

Input.displayName = 'Input';

export { Input };
