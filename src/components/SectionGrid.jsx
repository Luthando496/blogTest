import React from 'react'

const SectionGrid = () => {
  return (
    <>
         <section className="w-[95vw] mx-auto my-10">
      <div className="w-full h-[2px] rounded-lg bg-white/70 "></div>
      <h4 className="text-white text-xl mt-4">Style </h4>
      {/* <!-- container blogs --> */}
      <div className="container blogs_conatiner my-4 flex flex-col md:flex-row justify-between items-start">
        {/* <!-- 1ST --> */}
        <div className="blog_piece flex-1 flex flex-col group gap-4 pr-[12px] overflow-hidden self-stretch relative">
          <div className="img_container w-full rounded-sm h-full overflow-hidden " >
            <img src="https://img.freepik.com/free-photo/happy-woman-with-tan-skin-with-perfect-curly-hairs-holding-glass-wine-wearing-ielegant-orange-blouse-silk-pants-sitting-vintage-chair-beige-wall_273443-4095.jpg?t=st=1728980265~exp=1728983865~hmac=c89337037046ab7bcf206a0a3eb3bfd1991adf298ed25d37744add1d94f167a0&w=740" alt="fruit" className="w-full h-full object-cover group-hover:translate-x-2 group-hover:scale-[1.8] duration-1000 rounded-sm" />
          </div>

          {/* <!-- <h2 className="text-white text-[2rem] font-semibold">Cultivating a Garden of Wellness and Tranquility</h2>
          <div className="container flex justify-center gap-4 mb-7 text-white items-center border-t-[1px] pt-4 border_top">
            <span className="font-medium py-[2px] px-[6px] cursor-pointer bg-gray-400 hover:bg-sky-800 duration-500 text-sm">Trends</span>
            <span className="text-sm">June 13,2023</span>
            <span className="text-sm">by Jon Walker</span>
          </div> --> */}


          {/* <!-- <div className="w-[98%] h-full absolute top-0 left-0  rounded-sm"></div> --> */}
        </div>
        {/* <!-- 2ND -->// */}
         {/* <!-- Cards container --> */}
        <div className="blog_piece flex-1 grid md:grid-cols-2 gap-4 pl-[12px] border-l-[1px] border_left">

          {/* <!-- Card Single --> */}
          <div className="card flex gap-4 flex-col ">
            <div className="img_container rounded-lg max-h-[175px] overflow-hidden group">
              <img src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="fruit" className="w-full h-full object-cover group-hover:scale-[1.1] duration-300 rounded-lg cursor-pointer "  />
            </div>
  
            <div className="content_blog my-7 flex flex-col justify-between">
              <h2 className="text-white text-[1.3rem] cursor-pointer hover:opacity-[0.8] pb-7 ">Thriving in Urban society: Tips for City Living</h2>
  
  
              <div className="container flex justify-center gap-4 text-white items-center border-t-[1px] pt-4 border_top">
                <span className="font-medium py-[2px] px-[6px] cursor-pointer bg-gray-400 hover:bg-sky-800 duration-500 text-sm">Trends</span>
                <span className="text-sm">June 13,2024</span>
                <span className="text-sm">by Jon Walker</span>
              </div>
            </div>

          </div>
          {/* <!-- SINGLE CARD END --> */}
          {/* <!-- Card Single --> */}
          <div className="card flex gap-4 flex-col">
            <div className="img_container rounded-lg max-h-[175px] overflow-hidden group">
              <img src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="fruit" className="w-full h-full object-cover group-hover:scale-[1.1] duration-300 rounded-lg cursor-pointer "   />
            </div>
  
            <div className="content_blog my-7 flex flex-col justify-between">
              <h2 className="text-white text-[1.3rem] cursor-pointer hover:opacity-[0.8] pb-7 ">Thriving in Urban Environments: Tips for City Living</h2>
  
  
              <div className="container flex justify-center gap-4 text-white items-center border-t-[1px] pt-4 border_top">
                <span className="font-medium py-[2px] px-[6px] cursor-pointer bg-gray-400 hover:bg-sky-800 duration-500 text-sm">Trends</span>
                <span className="text-sm">June 13,2024</span>
                <span className="text-sm">by Jon Walker</span>
              </div>
            </div>

          </div>
          {/* <!-- SINGLE CARD END --> */}

          {/* <!-- Card Single --> */}
          <div className="card flex gap-4 flex-col">
            <div className="img_container rounded-lg max-h-[175px] overflow-hidden group">
              <img src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="fruit" className="w-full h-full object-cover group-hover:scale-[1.1] duration-300 rounded-lg cursor-pointer "  />
            </div>
  
            <div className="content_blog my-7 flex flex-col justify-between">
              <h2 className="text-white text-[1.3rem] cursor-pointer hover:opacity-[0.8] pb-7 ">Thriving in Urban Environments: Tips for City Living</h2>
  
  
              <div className="container flex justify-center gap-4 text-white items-center border-t-[1px] pt-4 border_top">
                <span className="font-medium py-[2px] px-[6px] cursor-pointer bg-gray-400 hover:bg-sky-800 duration-500 text-sm">Trends</span>
                <span className="text-sm">June 13,2024</span>
                <span className="text-sm">by Jon Walker</span>
              </div>
            </div>

          </div>
          {/* <!-- SINGLE CARD END --> */}

          {/* <!-- Card Single --> */}
          <div className="card flex gap-4 flex-col">
            <div className="img_container rounded-lg max-h-[175px] overflow-hidden group">
              <img src="https://images.pexels.com/photos/8768286/pexels-photo-8768286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="fruit" className="w-full h-full object-cover group-hover:scale-[1.1] duration-300 rounded-lg cursor-pointer "  />
            </div>
  
            <div className="content_blog my-7 flex flex-col justify-between">
              <h2 className="text-white text-[1.3rem] cursor-pointer hover:opacity-[0.8] pb-7 ">Thriving in Urban Environments: Tips for City Living</h2>
  
  
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

     </section>
    </>
  )
}

export default SectionGrid