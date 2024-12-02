import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const Slider = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
    };

  return (
    <Carousel responsive={responsive}>
  <header className="w-[95vw] mx-auto h-[550px] relative pt-6  rounded-xl">
      <div className="img_container w-full h-full rounded-xl relative">
        <img className="w-full h-full rounded-xl object-cover" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="header_image" />

        <div className="absolute top-0 left-0 w-full rounded-xl h-full bg-black/40"></div>
      </div>

      <div className="absolute top-0 z-10 left-0 w-full mx-auto h-full content_container container flex justify-center items-center">

        <div className="content text-center  flex flex-col gap-4">
            <h1 className="text-4xl text-slate-300 leading-[1.5]">Enhancing Your Environment for <br />Greater Productivity and Peace</h1>
            <p className="text-slate-300  leading-[1.7]">Unlock The Power of personal growth with our motivational articles and <br />self-improvement advice. Empower yourself to reach new heights.</p>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full z-50 h-20 border-t-[1px] border_top mx-auto flex justify-center items-center">

        <div className="container flex justify-center gap-4 text-white items-center">
          <span className="font-medium py-1 px-2 cursor-pointer bg-sky-400 hover:bg-sky-800 duration-500">Trends</span>
          <span className="">June 13,2024</span>
          <span className="">by Jon Walker</span>
        </div>
        
      </div>


      
</header>
<header className="w-[95vw] mx-auto h-[550px] relative pt-6  rounded-xl">
      <div className="img_container w-full h-full rounded-xl relative">
        <img className="w-full h-full rounded-xl object-cover" src="https://images.pexels.com/photos/7005636/pexels-photo-7005636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="header_image" />

        <div className="absolute top-0 left-0 w-full rounded-xl h-full bg-black/40"></div>
      </div>

      <div className="absolute top-0 z-10 left-0 w-full mx-auto h-full content_container container flex justify-center items-center">

        <div className="content text-center  flex flex-col gap-4">
            <h1 className="text-4xl text-slate-300 leading-[1.5]">Enhancing Your Environment for <br />Greater Productivity and Peace</h1>
            <p className="text-slate-300  leading-[1.7]">Unlock The Power of personal growth with our motivational articles and <br />self-improvement advice. Empower yourself to reach new heights.</p>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full z-50 h-20 border-t-[1px] border_top mx-auto flex justify-center items-center">

        <div className="container flex justify-center gap-4 text-white items-center">
          <span className="font-medium py-1 px-2 cursor-pointer bg-sky-400 hover:bg-sky-800 duration-500">Trends</span>
          <span className="">June 13,2024</span>
          <span className="">by Jon Walker</span>
        </div>
        
      </div>


      
</header>
<header className="w-[95vw] mx-auto h-[550px] relative pt-6  rounded-xl">
      <div className="img_container w-full h-full rounded-xl relative">
        <img className="w-full h-full rounded-xl object-cover" src="https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="header_image" />

        <div className="absolute top-0 left-0 w-full rounded-xl h-full bg-black/40"></div>
      </div>

      <div className="absolute top-0 z-10 left-0 w-full mx-auto h-full content_container container flex justify-center items-center">

        <div className="content text-center  flex flex-col gap-4">
            <h1 className="text-4xl text-slate-300 leading-[1.5]">Enhancing Your Environment for <br />Greater Productivity and Peace</h1>
            <p className="text-slate-300  leading-[1.7]">Unlock The Power of personal growth with our motivational articles and <br />self-improvement advice. Empower yourself to reach new heights.</p>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full z-50 h-20 border-t-[1px] border_top mx-auto flex justify-center items-center">

        <div className="container flex justify-center gap-4 text-white items-center">
          <span className="font-medium py-1 px-2 cursor-pointer bg-sky-400 hover:bg-sky-800 duration-500">Trends</span>
          <span className="">June 13,2024</span>
          <span className="">by Jon Walker</span>
        </div>
        
      </div>


      
</header>
<header className="w-[95vw] mx-auto h-[550px] relative pt-6  rounded-xl">
      <div className="img_container w-full h-full rounded-xl relative">
        <img className="w-full h-full rounded-xl object-cover" src="https://images.pexels.com/photos/5725576/pexels-photo-5725576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="header_image" />

        <div className="absolute top-0 left-0 w-full rounded-xl h-full bg-black/40"></div>
      </div>

      <div className="absolute top-0 z-10 left-0 w-full mx-auto h-full content_container container flex justify-center items-center">

        <div className="content text-center  flex flex-col gap-4">
            <h1 className="text-4xl text-slate-300 leading-[1.5]">Enhancing Your Environment for <br />Greater Productivity and Peace</h1>
            <p className="text-slate-300  leading-[1.7]">Unlock The Power of personal growth with our motivational articles and <br />self-improvement advice. Empower yourself to reach new heights.</p>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full z-50 h-20 border-t-[1px] border_top mx-auto flex justify-center items-center">

        <div className="container flex justify-center gap-4 text-white items-center">
          <span className="font-medium py-1 px-2 cursor-pointer bg-sky-400 hover:bg-sky-800 duration-500">Trends</span>
          <span className="">June 13,2024</span>
          <span className="">by Jon Walker</span>
        </div>
        
      </div>


      
</header>
  
</Carousel>
  )
}

export default Slider




