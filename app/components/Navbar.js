import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-15 bg-purple-700 flex justify-between px-4 items-center text-white'>
      <div className="logo font-bold text-xl">
        <Link href="/">BitLinks</Link>
      </div>
      <ul className='flex justify-center gap-4 items-center'>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/shorten"><li>Shorten</li></Link>
        <Link href="/contact"><li>Contact Us</li></Link>
        <li className=' flex gap-3'>
          <Link href="/shorten"><button className='bg-purple-500 shadow-lg p-2 py-1 font-bold rounded-lg'>Try Now</button></Link>
          <Link href="/github"><button className='bg-purple-500 shadow-lg p-2 py-1 font-bold rounded-lg'>Github</button></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
