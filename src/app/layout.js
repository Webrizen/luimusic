import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
 });

export const metadata = {
  title: 'Lui Music',
  description: 'Lui Music is a powerful SaaS product that lets music enthusiasts enjoy their favorite songs from various sources without any ads or premium membership.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
