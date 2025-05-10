import Link from 'next/link'
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MenuIcon } from 'lucide-react'

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
    <header className='w-full bg-blue-600 mx-auto'>
      <div className='flex items-center justify-between px-8 py-4'>
        <Link href="/" className='text-white text-2xl font-bold sm:ml-0 ml-3'>ParkMe</Link>
        <nav className='hidden lg:flex items-center mr-4'>
          {navItems.map((item) => (
            <Link key={item.name} href={item.path} className='text-white text-xl font-medium mx-4 hover:scale-90 transition-transform duration-100'>
              {item.name}
            </Link>
          ))}
        </nav>
        <MobileNavbar />
      </div>
      <div className='bg-blue-600 w-full h-20' />
    </header>
  )
}

export default Navbar


const MobileNavbar = () => {
  return (
    <div className='lg:hidden flex items-center mr-6 cursor-pointer relative'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <MenuIcon className='size-8 text-white'/>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-48 h-80 absolute right-0 top-0 p-4 bg-gray-100 shadow-lg rounded-md'>
          <DropdownMenuLabel>My Profile</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-gray-700" />
          <DropdownMenuItem className="hover:scale-90 transition-transform duration-100 curser-pointer text-lg">Profile</DropdownMenuItem>
          <DropdownMenuItem className="hover:scale-90 transition-transform duration-100 curser-pointer text-lg">Billing</DropdownMenuItem>
          <DropdownMenuItem className="hover:scale-90 transition-transform duration-100 curser-pointer text-lg">Team</DropdownMenuItem>
          <DropdownMenuItem className="hover:scale-90 transition-transform duration-100 curser-pointer text-lg">Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
