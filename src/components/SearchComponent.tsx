'use client'

import SearchForm from './SearchForm'

const SearchComponent = () => {
  return (
    <div className='flex flex-col w-full ml-4 -mt-16 p-4 py-10 gap-x-2 rounded-2xl bg-gray-50 ring-1 ring-inset ring-gray-900/5'>
      <SearchForm />
    </div>
  )
}

export default SearchComponent
