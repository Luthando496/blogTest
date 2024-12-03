import Navbar from '../components/Navbar'
import ImagePicker from '../components/ImagePicker';
import Editor from '../components/Editor';

const CreateBlog = () => {

    
    

  return (
      <>
      <Navbar  />
      <section className="w-full px-12 my-5">
        <div className="container">
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-semibold text-slate-800 tracking-[3px]">Title</h1>
                <input type="text" placeholder='Enter Entry Title' className='placeholder:text-slate-600 px-10 py-2 w-[20rem] border focus:border-blue-500 focus:outline-none rounded-md' />
            </div>
            <div className="flex flex-col gap-3 py-3">
                <h1 className="text-2xl font-semibold text-slate-800 tracking-[3px]">Sub Title</h1>
                <input type="text" placeholder='Enter Entry Subtitle Title' className='placeholder:text-slate-600 px-10 py-2 w-[20rem] border focus:border-blue-500 focus:outline-none rounded-md' />
            </div>
            <div className="img mt-4">
                <ImagePicker />
            </div>
            
            <div className="editor_container my-10">
              <Editor />
            </div>
        </div>
      </section>
    </>
  )
}

export default CreateBlog