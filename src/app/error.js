'use client';
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className='Error'>
      <h1>Something went wrong!</h1>
      <p style={{ color: 'red' }}>{error}</p>
      <button
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}