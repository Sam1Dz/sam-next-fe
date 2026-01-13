import '../styles/globals.css';

import { BaseProvider } from '~/components/provider/base';
import { fontGeistMono, fontGeistSans } from '~/config/fonts';

export { metadata } from '~/config/site';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${fontGeistSans.variable} ${fontGeistMono.variable} antialiased`}
      >
        <BaseProvider>{children}</BaseProvider>
      </body>
    </html>
  );
}
