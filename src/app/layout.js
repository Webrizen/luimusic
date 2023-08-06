import './globals.css';
import { Poppins } from 'next/font/google';
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/Navbar';
import { AuthContextProvider } from '@/context/AuthContext';

const poppins = Poppins({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
 });

export const metadata = {
  title: {
    default: 'Lui Music',
    template: '%s | Lui Music'
  },
  description: 'Lui Music is a powerful SaaS product that lets music enthusiasts enjoy their favorite songs from various sources without any ads or premium membership.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthContextProvider>
        <section className='TwoCol'>
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className='main'>
            <Navbar />
            {children}
            </div>
        </section>
        </AuthContextProvider>
        </body>
    </html>
  )
}
