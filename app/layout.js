export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <title>SANAD Protocol</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <header>
          {/* TODO: Add Header Component */}
        </header>
        <main>{children}</main>
        <footer>
          {/* TODO: Add Footer Component */}
        </footer>
      </body>
    </html>
  );
}