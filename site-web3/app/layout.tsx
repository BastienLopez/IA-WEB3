import Script from "next/script";

export const metadata = {
  title: "ebook landing page template",
  description: "ebook landing page for professionals",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />

        {/* CSS Files */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/bootstrap-icons.css" rel="stylesheet" />
        <link href="/css/templatemo-ebook-landing.css" rel="stylesheet" />
      </head>
      <body>
        {children}

        {/* JavaScript Files avec `next/script` */}
        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.sticky.js" strategy="lazyOnload" />
        <Script src="/js/click-scroll.js" strategy="lazyOnload" />
        <Script src="/js/custom.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
