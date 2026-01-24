import { Input as CoreInput } from '~/components/ui/core/input';

/**
 * An enhanced input component that wraps the core input.
 * Provides a default type of 'text' and serves as the primary input component for the application.
 *
 * @param props - The component props, inheriting from the core input.
 * @param props.type - The HTML input type. Defaults to 'text'.
 * @returns The enhanced input component.
 */
function Input({
  type = 'text',
  ...props
}: React.ComponentProps<typeof CoreInput>) {
  return <CoreInput {...props} type={type} />;
}

export { Input };
