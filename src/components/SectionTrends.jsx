

const SectionTrends =()=>{


    return(
        <>
            <section className="w-fill  trends_section">

<div className="container gap-6 flex ">
    {/* <!-- Single Item --> */}
  <div className="w-full single_item_trends rounded-small flex overflow-hidden cursor-pointer relative group flex-col h-[400px] justify-between">
    <img src="https://images.pexels.com/photos/8768286/pexels-photo-8768286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="imageone" className="img_absolute group-hover:scale-125 duration-300 object-cover absolute top-0 left-0 w-full h-full z-0"  />

    <div className="w-full h-full absolute top-0 left-0 bg-white/10 z-30"></div>
    <h3 className="px-6 text-white z-50 capitalize text-2xl font-semibold">practical advice for staying ahead in a constantly changing world</h3>

    <div className="container z-50 my-1 flex justify-center gap-4 text-white items-center border-t-[1px] pt-4 border_top">
      <span className="font-medium py-[2px] px-[8px] cursor-pointer bg-gray-400 hover:bg-sky-800 duration-500 text-sm">Trends</span>
      <span className="text-sm">June 13,2024</span>
      <span className="text-sm">by Jon Walker</span>
    </div>

    
  </div>

  {/* <!-- Single Item End --> */}

   {/* <!-- Single Item --> */}
   <div className="w-full single_item_trends rounded-small flex overflow-hidden cursor-pointer relative group flex-col h-[400px] justify-between">
    <img src="https://images.pexels.com/photos/8768286/pexels-photo-8768286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="one_person" className="img_absolute group-hover:scale-125 duration-300 object-cover absolute top-0 left-0 w-full h-full -z-30"  />

    <div className="w-full h-full absolute top-0 left-0 bg-white/10 -z-10"></div>
    <h3 className="px-6 text-white capitalize text-2xl font-semibold">practical advice for staying ahead in a constantly changing world</h3>

    <div className="container  my-1 flex justify-center gap-4 text-white items-center border-t-[1px] pt-4 border_top">
      <span className="font-medium py-[2px] px-[8px] cursor-pointer bg-gray-400 hover:bg-sky-800 duration-500 text-sm">Trends</span>
      <span className="text-sm">June 13,2024</span>
      <span className="text-sm">by Jon Walker</span>
    </div>

    
  </div>

  {/* <!-- Single Item End --> */}
    {/* <!-- Single Item --> */}
    <div className="w-full single_item_trends rounded-small flex overflow-hidden cursor-pointer relative group flex-col h-[400px] justify-between">
      <img src="https://images.pexels.com/photos/8768286/pexels-photo-8768286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image_of_person" className="img_absolute group-hover:scale-125 duration-300 object-cover absolute top-0 left-0 w-full h-full -z-30"  />

      <div className="w-full h-full absolute top-0 left-0 bg-gray-300/15 -z-10"></div>
      <h3 className="px-6 text-white capitalize text-2xl font-semibold">practical advice for staying ahead in a constantly changing world</h3>

      <div className="container  my-1 flex justify-center gap-4 text-white items-center border-t-[1px] pt-4 border_top">
        <span className="font-medium py-[2px] px-[8px] cursor-pointer bg-gray-400 hover:bg-sky-800 duration-500 text-sm">Trends</span>
        <span className="text-sm">June 13,2024</span>
        <span className="text-sm">by Jon Walker</span>
      </div>

      
    </div>

  {/* <!-- Single Item End --> */}
  

</div>

</section>
        </>
    )
}



export default SectionTrends;