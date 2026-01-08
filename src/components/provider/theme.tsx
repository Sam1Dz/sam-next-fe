'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import React from 'react';

/**
 * A wrapper component for `next-themes` Provider that handles theme switching.
 *
 * @param props - The component props, including `children` and any other `next-themes` provider properties.
 * @param props.children - The children components to be wrapped by the theme provider.
 * @returns A JSX element that provides theme context to its children.
 */
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
