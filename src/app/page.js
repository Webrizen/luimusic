import Image from 'next/image';
import styles from './page.module.css';
import HeroImage from '@/assets/hero.jpg';

export const metadata = {
  title: 'Home | Lui Music',
  description: 'Lui Music is a powerful SaaS product that lets music enthusiasts enjoy their favorite songs from various sources without any ads or premium membership.',
}

export default function Home() {
  return (
    <main className={styles.HomeSection}>
      <div className={styles.Home}>
        <h1>Delivers Music to Your Ears Which one do you like the most? 😊</h1>
        <p>Are you tired of annoying ads and expensive subscriptions that interrupt your music experience? Do you want to listen to your favorite songs from any source, whether it’s YouTube, Spotify, SoundCloud, or your own device? If you answered yes, then Lui Music is the perfect solution for you. Lui Music is a powerful SaaS product that lets you stream music from any source without any ads or premium membership. You can create your own playlists, discover new artists, and enjoy high-quality sound with Lui Music. Lui Music is the ultimate music streaming service for music lovers. Try it today and see the difference for yourself.</p>
        <button>Get Started</button>
      </div>
      <div className={styles.Home} style={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
        <Image src={HeroImage} alt='Hero Image' />
      </div>
    </main>
  )
}
