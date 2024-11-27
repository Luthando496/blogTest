import React from 'react'

const Main = () => {
  return (
    <>
    <main className="w-[95vw] mx-auto my-10">
      <div className="w-full h-[2px] rounded-lg bg-white/70 "></div>
      <h4 className="text-white text-xl mt-4">Trending </h4>
      {/* <!-- container blogs --> */}
      <div className="container blogs_conatiner my-4 flex justify-between items-start">
        {/* <!-- 1ST --> */}
        <div className="blog_piece flex-1 flex flex-col gap-4 pr-[12px] ">
          <div className="img_container rounded-sm h-[350px] overflow-hidden group">
            <img src="https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="fruit" className="w-full h-full object-cover group-hover:scale-[2.4] duration-1000 rounded-sm"  />
          </div>

          <h2 className="text-white text-[2rem] font-semibold">Cultivating a Garden of Wellness and Tranquility</h2>
          <div className="container flex justify-center gap-4 text-white items-center border-t-[1px] pt-4 border_top">
            <span className="font-medium py-[2px] px-[6px] cursor-pointer bg-gray-400 hover:bg-sky-800 duration-500 text-sm">Trends</span>
            <span className="text-sm">June 13,2024</span>
            <span className="text-sm">by Jon Walker</span>
          </div>

        </div>
        {/* <!-- 2ND --> */}
         {/* <!-- Cards container --> */}
        <div className="blog_piece flex-1 flex flex-col gap-4 pl-[12px] border-l-[1px] border_left">

          {/* <!-- Card Single --> */}
          <div className="card flex gap-8">
            <div className="img_container rounded-lg h-[180px] overflow-hidden group flex-1 ">
              <img src="https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="fruit" className="w-full h-full object-cover group-hover:scale-[1.1] duration-300 rounded-lg cursor-pointer " />
            </div>
  
            <div className="content_blog flex-1 flex flex-col justify-between">
              <h2 className="text-white text-[1.3rem] cursor-pointer hover:opacity-[0.8] ">Thriving in Urban Environments: Tips for City Living</h2>
  
  
              <div className="container flex justify-center gap-4 text-white items-center border-t-[1px] pt-4 border_top">
                <span className="font-medium py-[2px] px-[6px] cursor-pointer bg-gray-400 hover:bg-sky-800 duration-500 text-sm">Trends</span>
                <span className="text-sm">June 13,2024</span>
                <span className="text-sm">by Jon Walker</span>
              </div>
            </div>

          </div>
          {/* <!-- SINGLE CARD END --> */}

          <div className="w-full border-t-[1px] border_top"></div>
          {/* <!-- Card Single --> */}
          <div className="card flex gap-4">
            <div className="img_container rounded-lg h-[180px] overflow-hidden group flex-1 ">
              <img src="https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="fruit" className="w-full h-full object-cover group-hover:scale-[1.1] duration-300 rounded-lg cursor-pointer " />
            </div>
  
            <div className="content_blog flex-1 flex flex-col justify-between">
              <h2 className="text-white text-[1.3rem] cursor-pointer hover:opacity-[0.8] ">Thriving in Urban Environments: Tips for City Living</h2>
  
  
              <div className="container flex justify-center gap-4 text-white items-center border-t-[1px] pt-4 border_top">
                <span className="font-medium py-[2px] px-[6px] cursor-pointer bg-gray-400 hover:bg-sky-800 duration-500 text-sm">Trends</span>
                <span className="text-sm">June 13,2024</span>
                <span className="text-sm">by Jon Walker</span>
              </div>
            </div>

          </div>
          {/* <!-- SINGLE CARD END --> */}
          <div className="w-full border-t-[1px] border_top"></div>

          {/* <!-- Card Single --> */}
          <div className="card flex gap-4">
            <div className="img_container rounded-lg h-[180px] overflow-hidden group flex-1 ">
              <img src="https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="fruit" className="w-full h-full object-cover group-hover:scale-[1.1] duration-300 rounded-lg cursor-pointer "  />
            </div>
  
            <div className="content_blog flex-1 flex flex-col justify-between">
              <h2 className="text-white text-[1.3rem] cursor-pointer hover:opacity-[0.8] ">Thriving in Urban Environments: Tips for City Living</h2>
  
  
              <div className="container flex justify-center gap-4 text-white items-center border-t-[1px] pt-4 border_top">
                <span className="font-medium py-[2px] px-[6px] cursor-pointer bg-gray-400 hover:bg-sky-800 duration-500 text-sm">Trends</span>
                <span className="text-sm">June 13,2024</span>
                <span className="text-sm">by Jon Walker</span>
              </div>
            </div>

          </div>
          {/* <!-- SINGLE CARD END --> */}


        </div>
      </div>

     </main>
    </>
  )
}

export default Main