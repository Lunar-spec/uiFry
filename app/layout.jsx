import localFont from 'next/font/local'
import "./globals.css";
import { Toaster } from 'react-hot-toast';

const myFont = localFont({ src: '../public/assets/font.ttf' });

export const metadata = {
  title: "UiFry",
  description: "Make the best financial decisions",
  icons: {
    icon: "./favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <main>{children}</main>
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
