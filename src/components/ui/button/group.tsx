'use client';

import React from 'react';

import { type ButtonProps } from '~/components/ui/button';
import {
  ButtonGroupSeparator,
  ButtonGroupText,
  buttonGroupVariants,
  ButtonGroup as CoreButtonGroup,
} from '~/components/ui/core/button-group';

interface ButtonGroupContextValue {
  size?: ButtonProps['size'];
}
const ButtonGroupContext = React.createContext<ButtonGroupContextValue>({});

/**
 * Hook to access the button group context, primarily for retrieving inherited size.
 *
 * @returns The button group context value.
 */
export const useButtonGroup = () => React.useContext(ButtonGroupContext);

interface ButtonGroupProps
  extends
    React.ComponentProps<typeof CoreButtonGroup>,
    ButtonGroupContextValue {}

/**
 * An enhanced ButtonGroup that provides context to its children.
 * Wraps the core ButtonGroup.
 *
 * @param props - The component props.
 * @param props.size - The common size for all buttons within the group.
 * @param props.children - Use Button components as children.
 * @returns The ButtonGroup with context provider.
 */
function ButtonGroup({ size, ...props }: ButtonGroupProps) {
  return (
    <ButtonGroupContext.Provider value={{ size }}>
      <CoreButtonGroup {...props}>{props.children}</CoreButtonGroup>
    </ButtonGroupContext.Provider>
  );
}

export {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  buttonGroupVariants,
};
