import "@/styles/flaticon.css";
import 'animate.css';
import './globals.css';
import Header from '@/components/Header';
import Fotter from '@/components/Footer';


export const metadata = {
  title: 'My Next.js App',
  description: 'Example using App Router and Header',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Fotter />
      </body>
    </html>
  );
}