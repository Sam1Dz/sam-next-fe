import * as React from 'react';

import { cn } from '~/lib/utils';

/**
 * A specialized Input component for multi-line text editing.
 * Supports auto-sizing and standard textarea attributes.
 *
 * @param props - The standard HTML textarea attributes.
 * @param props.className - Additional CSS classes to apply to the textarea.
 * @returns The rendered textarea element.
 */
function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      className={cn(
        'border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className,
      )}
      data-slot="textarea"
      {...props}
    />
  );
}

export { Textarea };
