import Navbar from '../components/Navbar'
import ImagePicker from '../components/ImagePicker';
import Editor from '../components/Editor';
import { useState } from 'react';
import { supabase } from '../superclient';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';




const CreateBlog = () => {
  // const [value, setValue] = useState('');
  const [image, setImage] = useState('');
  const [textData,setTextData] = useState(null);
  const [inputs,setInputs] = useState({title:"",subTitle:""})
  const generatedId = uuidv4();
  const user = useSelector(state=> state.user)
  
  const {title,subTitle} = inputs;

    const setHandleData = async() => {
      // console.log(inputData)
      const { data, error } = await supabase.from('Posts').insert([
        {
          title: title,
          slug: image,
          author_id:"5a32918a-b3b3-4aad-934b-1e6b00f7ca49" ,
          excerpt: subTitle,
          category_id: "films",
          is_featured:true,
          content: textData,
        },
      ]);

      console.log(data,"DATA","ERROR",error)
    }

    const setHandleValue =(inputVal) =>{
      setTextData(inputVal)
    }

    const handleInputs = (e) =>{
      setInputs((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
      }));

    }



    

  return (
      <>
      <Navbar  />
      <section className="w-full px-12 my-5">
        <div className="container">
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-semibold text-slate-800 tracking-[3px]">Title</h1>
                <input value={title} name="title" onChange={handleInputs} type="text" placeholder='Enter Entry Title' className='placeholder:text-slate-600 px-10 py-2 w-[20rem] border focus:border-blue-500 focus:outline-none rounded-md' />
            </div>
            <div className="flex flex-col gap-3 py-3">
                <h1 className="text-2xl font-semibold text-slate-800 tracking-[3px]">Sub Title</h1>
                <input value={subTitle} name="subTitle" onChange={handleInputs} type="text" placeholder='Enter Entry Subtitle Title' className='placeholder:text-slate-600 px-10 py-2 w-[20rem] border focus:border-blue-500 focus:outline-none rounded-md' />
            </div>
            <div className="img mt-4">
                <ImagePicker location={"post"} myData={textData} setHandleImage={setImage} />
            </div>
            
            <div className="editor_container pb-32 mt-10 container px-4 md:px-14">
              <Editor setHandleValue={setTextData} setSubmit={setHandleData} />
            </div>
            
        </div>
        
      </section>
    </>
  )
}

export default CreateBlog