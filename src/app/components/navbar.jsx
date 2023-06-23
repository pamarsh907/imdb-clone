import React from 'react'
import NavbarItem from './navbar-item'

export default function () {
  return (
    <div className='flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4'>
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}
