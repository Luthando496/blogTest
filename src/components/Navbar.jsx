import React from 'react'

const Navbar = () => {
  return (
    <nav className='my_navbar rounded-b-lg py-6 shadow-md shadow-slate-950'>
        <div className="container mx-10 flex justify-between">
            <h1 className="text-3xl font-semibold text-slate-800 tracking-[8px]">ToBlog</h1>

            <ul className="flex items-center gap-7">
                <li className="hover:border-blue-500 hover:border-b duration-300 ">
                    <span className="text-lg cursor-pointer font-semibold text-slate-900">Home</span>
                </li>
                <li className="hover:border-blue-500 hover:border-b duration-300 ">
                    <span className="text-lg cursor-pointer font-semibold text-slate-900">Create Entry</span>
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