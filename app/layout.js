import localFont from "next/font/local";
import "./globals.css";

const nippoVariable = localFont({
  src: "../public/fonts/Nippo-Variable.ttf",
  variable: "--font-nippo",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nippoVariable.variable}>{children}</body>
    </html>
  );
}
