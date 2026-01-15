import React from 'react';

export default function ComponentsLayout({
  children,
}: Readonly<React.PropsWithChildren>) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex min-h-screen w-full max-w-7xl flex-col">
        {children}
      </div>
    </div>
  );
}
