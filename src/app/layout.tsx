import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home 2 - JobBoard 128",
  description: "Find and become a professional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-wf-page="64943f2a36915879aa1daee3" data-wf-site="64943f2936915879aa1dae17" className="w-mod-js">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
        <Script src="/js/jquery.js" strategy="beforeInteractive" />
        <Script src="/js/webflow.schunk.74913c4b4b4ccfa6.js" strategy="afterInteractive" />
        <Script src="/js/webflow.schunk.c11452b75fe04dcc.js" strategy="afterInteractive" />
        <Script src="/js/webflow.schunk.4913f0d9ee368d76.js" strategy="afterInteractive" />
        <Script src="/js/webflow-script-1.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
