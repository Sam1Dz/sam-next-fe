import { Loader2Icon } from 'lucide-react';

import { cn } from '~/lib/utils';

/**
 * A loading spinner component based on Lucide's Loader2 icon.
 * Features a standard spinning animation.
 *
 * @param props - The component props.
 * @param props.className - Additional CSS classes to apply to the spinner.
 * @returns A spinning loader icon.
 */
function Spinner({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <Loader2Icon
      aria-label="Loading"
      className={cn('size-4 animate-spin', className)}
      role="status"
      {...props}
    />
  );
}

export { Spinner };
