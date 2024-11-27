import React from 'react'

export const Footer = () => {
  return (
    <>
        <div className=" h-[2px] rounded-lg bg-white/70 mb-5 mx-7"></div>
     <footer className="footer">

      {/* <!-- CONTAINER --> */}
       <section className="container grid grid-cols-3 my-8 mx-auto text-white font-medium text-xl">

        {/* <!-- COLUMN --> */}
         <div className="footer_item">
          <ul className="flex flex-col-reverse gap-6">
            <li className="">
              <span className="hover:text-stone-400 duration-500 group relative cursor-pointer">Demo</span>
            </li>
            <li  className="relative ">
              <p className="hover:text-stone-400 duration-500 group relative cursor-pointer">Lifestyle
              </p>
              
            </li>
            <li  className="">
              <span className="hover:text-stone-400 duration-500 group relative cursor-pointer">Food</span>
            </li >
            <li  className="">
              <span className="hover:text-stone-400 duration-500 group relative cursor-pointer">Design & Architecture</span>
            </li>
            <li  className="">
              <span className="hover:text-stone-400 duration-500 group relative cursor-pointer">Sport</span>
            </li>
          </ul>
         </div>
         {/* <!-- COLUMN END --> */}

         {/* <!-- COLUMN --> */}
         <div className="footer_item">
          <ul className="flex flex-col gap-6">
            <li className="">
              <span className="hover:text-stone-400 duration-500 group relative cursor-pointer">Categories</span>
            </li>
            <li  className="relative ">
              <p className="hover:text-stone-400 duration-500 group relative cursor-pointer">Lifestyle
              </p>
              
            </li>
            <li  className="">
              <span className="hover:text-stone-400 duration-500 group relative cursor-pointer">Food</span>
            </li >
            <li  className="">
              <span className="hover:text-stone-400 duration-500 group relative cursor-pointer">Design & Architecture</span>
            </li>
            <li  className="">
              <span className="hover:text-stone-400 duration-500 group relative cursor-pointer">Sport</span>
            </li>
          </ul>
         </div>
         {/* <!-- COLUMN END --> */}

         {/* <!-- COLUMN --> */}
         <div className="footer_item">
          <ul className="flex flex-col-reverse gap-6">
            <li className="">
              <span className="hover:text-stone-400 duration-500 group relative cursor-pointer">Demo</span>
            </li>
            <li  className="relative ">
              <p className="hover:text-stone-400 duration-500 group relative cursor-pointer">Lifestyle
              </p>
              
            </li>
            <li  className="">
              <span className="hover:text-stone-400 duration-500 group relative cursor-pointer">Food</span>
            </li >
            <li  className="">
              <span className="hover:text-stone-400 duration-500 group relative cursor-pointer">Design & Architecture</span>
            </li>
            <li  className="">
              <span className="hover:text-stone-400 duration-500 group relative cursor-pointer">Sport</span>
            </li>
          </ul>
         </div>
         {/* <!-- COLUMN END --> */}
       </section>
       {/* <!-- Line --> */}
       <div className=" h-[1px] rounded-full bg-white/70 my-3  mx-7"></div>
       {/* <!-- Line End --> */}

       <div className="grid grid-cols-2 gap-10 mx-auto container my-4">
          <div className="content">
            <h1 className="text-4xl font-bold word text-white">LUTHANDO BLOG</h1>
            <p className="leading-[1.8] text-stone-300 font-medium text-xl py-4">Welcome to ultimate source for fresh perspectives!<br /> Explore curated content to enlighten, entertain and engage global readers.</p>
          </div>

          <div className="second_content flex flex-col space-y-3">
            <h1 className="text-white text-xl font-medium">Keep Up to Date with the Most Important <br /> News</h1>
            <dd className="flex relative justify-center gap-2 w-[400px]">
              <input type="text" placeholder="Your Email Address" className="border-2 focus:outline-none border-gray-300 rounded-md px-4 py-2 w-full" />
              <button className="absolute top-0 right-0 bg-stone-400 text-white py-[10px] px-4 rounded-md hover:bg-stone-500 duration-300">Subscribe</button>
            </dd>
          </div>

       </div>
     </footer>
    </>
  )
}
