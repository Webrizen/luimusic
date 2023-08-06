import Link from 'next/link';

export const metadata = {
  title: '404 - Page Not Found | Lui Music',
  description: 'Lui Music is a powerful SaaS product that lets music enthusiasts enjoy their favorite songs from various sources without any ads or premium membership.',
}

export default function NotFound() {
  return (
    <>
      <div className='Error'>
        <h1>404</h1>
        <h3>Oops! Page not found.</h3>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Link href="/"><button>Go Back</button></Link>
      </div>
    </>
  )
}