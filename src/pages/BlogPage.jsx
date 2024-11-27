import React from 'react'

const BlogPage = () => {
  return (
    <>
        <header class="min-h-screen eggShell my-4 w-full">
        <div class="grid grid-cols-3 gap-8 mx-auto  container">
        {/* <!-- Blank Space --> */}
        {/* <!-- <div class="col-span-1 w-full"></div> --> */}
        {/* <!-- MAIN CONTENT --> */}
        <main class="w-full col-span-2  px-4 py-3">
            <h1 class="text-4xl font-ligth  leading-[1.5]">Tips for Building Resilience in Times of Change</h1>
            <p class="text-xl font-normal leading-[1.5]">In the Age of Information, news media faces both unprecedented opportunities and significant challenges.</p>

            <div class="flex gap-6 items-center my-4">
              <span class="px-5 py-1 bg-stone-200 text-sm hover:bg-stone-400 duration-300 cursor-pointer">selfcare</span> <span class="text-sm">Jul 23, 2023</span>
              <span class="text-sm">by Elliot Alderson</span>
            </div>
            {/* <!-- IMAGE CONTAINER --> */}
            <div class="w-full h-[387px] my-4">
              <img src="https://images.pexels.com/photos/3778145/pexels-photo-3778145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image_blog" class="w-full main_image h-full object-cover rounded-md shadow-lg" />
            </div>
            {/* <!-- IMAGE END --> */}
            <div class="px-10 py-8">
                <p class="text-lg leading-normal">The modern lifestyle is a vibrant tapestry woven from various threads including technology, wellness, fashion, and travel. Each element plays a pivotal role in shaping our daily experiences and personal growth. As we navigate through this dynamic landscape, staying informed and inspired is key. For a deeper dive into how these trends are influencing contemporary life and culture, check out insights from leading thinkers and lifestyle experts at The New York Times.
                <p class="my-4 text-lg leading-normal">
                  Technological advancements are particularly impactful, reshaping how we manage our health, interact with our environments, and make travel and style decisions. This constant evolution encourages us to adapt and thrive in a world where change is the only constant. By integrating innovative tools and apps into our routines, we can enhance efficiency and enjoyment in every aspect of life.
                </p>
                <p class="text-lg leading-normal my-4">Blog Excerpts
                  Wellness is more than just a trend; it’s a lifestyle essential that encompasses physical health, mental well-being, and emotional balance. Incorporating regular physical activity, mindful meditation, and balanced nutrition into our routines can significantly improve quality of life. As we become more attuned to our bodies’ needs, we also learn to value moments of rest and recovery, essential for long-term health.
                  
                  Travel complements this focus on wellness by offering new perspectives and rejuvenating our spirits. Whether it’s a weekend getaway or an extended exploration of distant cultures, travel broadens our horizons and provides invaluable experiences that enrich our understanding of the world and ourselves.
                  
                  A Balanced Approach to Wellness
                  Insights into daily wellness and effective home decor strategies are shared to enhance everyday living and create nurturing spaces.
                  Updates on the latest lifestyle trends provide readers with the knowledge to stay stylish and informed in an ever-evolving world.
                  Comprehensive self-care routines tailored for busy individuals offer ways to maintain health and happiness amidst hectic schedules.
                  Practical yet stylish solutions are essential for everyday wear, allowing us to look good while being comfortable, whether at work, at home, or on the move.</p>
                </p>
                
            </div>

            <div class="w-full h-[387px] my-7">
              <img src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="w-full object-cover main_image h-full"  />
            </div>
            <p class="text-lg leading-normal">Embracing sustainability in our fashion habits means prioritizing materials and processes that minimize environmental impact, supporting brands that are committed to ethical practices.
              Using style as a form of personal and artistic expression allows us to showcase our unique identities and values through our clothing and accessories, making each outfit a reflection of our personal story.</p>

              <div class="flex gap-6 items-center py-4 pl-10 my-6 border-t">
                <span class="px-5 py-1 bg-stone-200 text-sm hover:bg-stone-400 duration-300 cursor-pointer">selfcare</span> <span class="text-sm">Jul 23, 2023</span>
                <span class="text-sm">by Elliot Alderson</span>
              </div>
              {/* <!-- COMMENTS SECTION --> */}
              <div class="w-full py-6 bg-slate-800 text-center cursor-pointer flex items-center justify-center">
                <p class="text-base text-white font-semibold">View Comments (4)</p>
                
              </div>
              {/* <!-- SINGLE COMMENT --> */}
              <div class="w-full mt-4">
                <hr />
                <p class="text-base py-3 font-semibold text-slate-700">I’m so glad I found your site. Your posts are consistently excellent.</p>
                <div class="flex gap-6 items-center py-4 pl-10 ">
                  <span class="text-sm">by Elliot Alderson</span>
                  <span class="text-sm">Jul 23, 2023</span>
                </div>
              </div>
              {/* <!-- END COMMENT -->// */}
              {/* <!-- SINGLE COMMENT --> */}
              <div class="w-full mt-4">
                <hr />
                <p class="text-base py-3 font-semibold text-slate-700">Your content is a go-to source for me when I need information. Great work, as always!</p>
                <div class="flex gap-6 items-center py-4 pl-10 ">
                  <span class="text-sm">by Elliot Alderson</span>
                  <span class="text-sm">Jul 23, 2023</span>
                </div>
              </div>
              {/* <!-- END COMMENT --> */}
              {/* <!-- SINGLE COMMENT /--> */}
              <div class="w-full mt-4">
                <hr />
                <p class="text-base py-3 font-semibold text-slate-700">Your dedication to providing quality content is truly admirable. I’m a fan of your wor</p>
                <div class="flex gap-6 items-center py-4 pl-10 ">
                  <span class="text-sm">by Elliot Alderson</span>
                  <span class="text-sm">Jul 23, 2023</span>
                </div>
              </div>
              {/* <!-- END COMMENT -->/ */}
        </main>

        {/* <!-- SIDE BAR CONTENT --> */}
        <side class="w-full sticky col-span-1 px-4 py-3 border-l">
            <h3 class="text-xl font-normal mb-3">Top News</h3>
            {/* <!-- SINGLE ARTICLE --> */}
            <div class="mt-5 border-t pt-4 gap-3 grid grid-cols-3">
              <div class="col-span-1 self-stretch h-full">
                <img src="https://images.pexels.com/photos/3778145/pexels-photo-3778145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" class="w-full h-full object-cover"  />
              </div>

              <div class="col-span-2 flex flex-col gap-4 items-start">
                <h3 class="text-xl">Nurturing Your Creative Side for a More Fulfilling Daily Routine</h3>
                <span class="px-3 font-medium text-center py-1 bg-stone-200 text-base hover:bg-slate-400 duration-300 cursor-pointer">selfcare</span>
              </div>

            </div>
            {/* <!-- ARTICLE ENDING --> */}
            {/* <!-- SINGLE ARTICLE --> */}
            <div class="mt-5 border-t pt-4 gap-3 grid grid-cols-3">
              <div class="col-span-1 self-stretch h-full">
                <img src="https://images.pexels.com/photos/4668527/pexels-photo-4668527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" class="w-full h-full object-cover"  />
              </div>

              <div class="col-span-2 flex flex-col gap-4 items-start">
                <h3 class="text-xl">Nurturing Your Creative Side for a More Fulfilling Daily Routine</h3>
                <span class="px-3 font-medium text-center py-1 bg-stone-200 text-base hover:bg-slate-400 duration-300 cursor-pointer">style</span>
              </div>

            </div>
            {/* <!-- ARTICLE ENDING --> */}
            {/* <!-- SINGLE ARTICLE --> */}
            <div class="mt-5 border-t pt-4 gap-3 grid grid-cols-3">
              <div class="col-span-1 self-stretch h-full">
                <img src="https://images.pexels.com/photos/988914/pexels-photo-988914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" class="w-full h-full object-cover" />
              </div>

              <div class="col-span-2 flex flex-col gap-4 items-start">
                <h3 class="text-xl">Nurturing Your Creative Side for a More Fulfilling Daily Routine</h3>
                <span class="px-3 font-medium text-center py-1 bg-stone-200 text-base hover:bg-slate-400 duration-300 cursor-pointer">travel</span>
              </div>

            </div>
            {/* <!-- ARTICLE ENDING --> */}
            {/* <!-- SINGLE ARTICLE --> */}
            <div class="mt-5 border-t pt-4 gap-3 grid grid-cols-3">
              <div class="col-span-1 self-stretch h-full">
                <img src="https://images.pexels.com/photos/206557/pexels-photo-206557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" class="w-full h-full object-cover"  />
              </div>

              <div class="col-span-2 flex flex-col gap-4 items-start">
                <h3 class="text-xl">Nurturing Your Creative Side for a More Fulfilling Daily Routine</h3>
                <span class="px-3 font-medium text-center py-1 bg-stone-200 text-base hover:bg-slate-400 duration-300 cursor-pointer">style</span>
              </div>

            </div>
            {/* <!-- ARTICLE ENDING --> */}
            {/* <!-- SINGLE ARTICLE --> */}
            <div class="mt-5 border-t pt-4 gap-3 grid grid-cols-3">
              <div class="col-span-1 self-stretch h-full">
                <img src="https://images.pexels.com/photos/988914/pexels-photo-988914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" class="w-full h-full object-cover"  />
              </div>

              <div class="col-span-2 flex flex-col gap-4 items-start">
                <h3 class="text-xl">Nurturing Your Creative Side for a More Fulfilling Daily Routine</h3>
                <span class="px-3 font-medium text-center py-1 bg-stone-200 text-base hover:bg-slate-400 duration-300 cursor-pointer">selfcare</span>
              </div>

            </div>
            {/* <!-- ARTICLE ENDING --> */}
            {/* <!-- SINGLE ARTICLE --> */}
            <div class="mt-5 border-t pt-4 gap-3 grid grid-cols-3">
              <div class="col-span-1 self-stretch h-full">
                <img src="https://images.pexels.com/photos/206557/pexels-photo-206557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" class="w-full h-full object-cover"  />
              </div>

              <div class="col-span-2 flex flex-col gap-4 items-start">
                <h3 class="text-xl">Nurturing Your Creative Side for a More Fulfilling Daily Routine</h3>
                <span class="px-3 font-medium text-center py-1 bg-stone-200 text-base hover:bg-slate-400 duration-300 cursor-pointer">travel</span>
              </div>

            </div>
            {/* <!-- ARTICLE ENDING --> */}
        </side>
      </div>
    </header>

    

    <section class="comments_section">

    </section>
    </>
  )
}

export default BlogPage