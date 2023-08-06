import Link from 'next/link'
 
export const metadata = {
  title: '404 - Page Not Found | Lui Music',
  description: 'Lui Music is a powerful SaaS product that lets music enthusiasts enjoy their favorite songs from various sources without any ads or premium membership.',
}

export default function NotFound() {
  return (
    <div>
      <h2>404 - Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}