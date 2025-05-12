import Link from 'next/link'
import React from 'react'
import ActiveLink from './ActiveLink'

const SidebarItem = [
  {
    name: "Location",
    href: "/dashboard/location/tileview",
  },
  {
    name: 'Bookings',
    href: '/dashboard/bookings',
  },
  {
    name: 'Revenue',
    href: '/dashboard/revenue',
  }
]

const Sidebar = () => {
  return (
    <div className='flex flex-col z-10 w-[256px] bg-gray-800 text-white h-full overflow-auto p-4'>
      <h1 className='text-2xl pl-4'>
        <Link href={'/dashboard'}>
          Parkme
        </Link>
      </h1>
      <div className='flex flex-col justify-between h-full'>
        <ul className='w-full flex flex-col space-y-2 pt-8 text-2xl'>
          {SidebarItem.map((link) => (
            <li key={link.href}>
              <ActiveLink href={link.href}>{link.name}</ActiveLink>
            </li>
          ))}
        </ul>
      </div>

      <div className='pl-4 text-blue-600'>
        UserButton
      </div>
    </div>
  )
}

export default Sidebar
