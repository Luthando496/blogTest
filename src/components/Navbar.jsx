import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <nav className='my_navbar w-full sticky top-0 z-50 py-6 shadow-md shadow-slate-400'>
        <div className="container px-5 flex justify-between">
            <h1 className="text-3xl font-semibold text-slate-800 tracking-[8px]">ToBlog</h1>

            <ul className="flex items-center gap-7">
                <li className="hover:border-blue-500 hover:border-b duration-300 ">
                    <span className="text-lg cursor-pointer font-semibold text-slate-900">Home</span>
                </li>
                <li className="hover:border-blue-500 hover:border-b duration-300 ">
                    <Link to="/blog/create" className="text-lg cursor-pointer font-semibold text-slate-900">Create Entry</Link>
                </li>
                <li className="hover:border-blue-500 hover:border-b duration-300 ">
                    <Link to="/sign-in" className="text-lg cursor-pointer font-semibold text-slate-900">Login</Link>
                </li>
                <li className="hover:border-blue-500 hover:border-b duration-300 ">
                    <span className="text-lg cursor-pointer font-semibold text-slate-900">Blogs</span>
                </li>
                
            </ul>
        </div>
    </nav>
  )
}

export default Navbar