'use client';

import React from 'react';

import { ThemeProvider } from './theme';

/**
 * The base provider component that wraps the application with necessary context providers.
 * Currently configures the `ThemeProvider` with default settings.
 *
 * @param props - The component props.
 * @param props.children - The children components to be wrapped by the providers.
 * @returns A JSX element containing the nested providers and children.
 */
export function BaseProvider({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      enableSystem
      attribute="class"
      defaultTheme="system"
    >
      {children}
    </ThemeProvider>
  );
}
