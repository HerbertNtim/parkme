import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col z-10 w-[256px] bg-gray-800 text-white h-full overflow-auto p-4'>
      <h1 className='text-2xl pl-4'>
        <Link href={'/dashboard'}>
          Parkme
        </Link>
      </h1>
    </div>
  )
}

export default Sidebar
