import Link from 'next/link'
import React from 'react'

const navItems = [
  { name: 'Profile', path: '/profile' },
  { name: 'Billing', path: '/billing' },
  { name: 'Team', path: '/team' },
  { name: 'Subscription', path: '/subscription' },
  { name: 'Sign Up', path: '/signout' },
  { name: 'Sign In', path: '/signin' },
]

const Navbar = () => {
  return (
    <header className='w-full h-20 bg-blue-400'>
      <div className='container mx-auto flex items-center justify-between h-full'>
        <Link href="/" className='text-white text-2xl font-bold'>ParkMe</Link>
        <nav className='hidden sm:flex items-center mr-4'>
          {navItems.map((item) => (
            <Link key={item.name} href={item.path} className='text-white text-xl font-medium mx-4 hover:scale-90 transition-transform duration-100'>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
