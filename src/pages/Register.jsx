import { useState } from 'react'
import Navbar from '../components/Navbar'
import { supabase } from '../superclient'



const Register = () => {
    const [inputData,setInputdata] = useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeInputs = (e) =>{

        setInputdata((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
    const {name,email,password} = inputData;


    const submitData =async() =>{

    try {
      // Register user using Supabase Auth
      const { data, error } = await supabase.auth.signUp(
        { email, password },
        {
          data: { name }, // Save additional user metadata
        }
      );
      console.log(data,"Data from Sign up")
      const { data:postData, error:postError } = await supabase.from('Users').insert([
          {
              name,email
            },
        ]);
        
      console.log(postData,"Data from Sign up")
      console.log("postError",postError)

      if (error) {
        console.log(`Error: ${error.message}`);
      } else {
        console.log("Registration successful! Please check your email for a confirmation link.");
      }
    } catch (err) {
      console.log(err,"register error")
    }
    }

  return (
    <>
    <Navbar />
    <section className=' my-14 px-10'>
        <div className="container mx-auto flex justify-center ">
            <div className="rounded-lg border-shadow white  bg-zinc-800 flex flex-col gap-8 shadow-lg px-4 py-8 my-10 w-[500px]">
                <div className="login_container text-center">
                    <h1 className="text-2xl text-light text-white uppercase tracking-[3px]">register</h1>
                </div>

                <div className="flex text-center flex-col gap-5">
                    <label htmlFor="" className="text-xl text-medium text-orange-600">Username :</label>
                    <input type="text" onChange={onChangeInputs} placeholder='Enter Your Username' value={name} name="name" id="" className="px-10 py-2 rounded-xl focus:outline-none placeholder:text-orange-600 border focus:border-orange-600" />
                </div>

                <div className="flex flex-col gap-5 text-center">
                    <label htmlFor="" className="text-xl text-medium text-orange-600">Email :</label>
                    <input type="text" onChange={onChangeInputs} value={email} placeholder='Enter Your Email' name="email" id="" className="px-10 py-2 rounded-xl focus:outline-none placeholder:text-orange-600  border focus:border-orange-600" />
                </div>

                <div className="flex flex-col gap-5 text-center">
                    <label htmlFor="" className="text-xl text-medium text-orange-600">Password :</label>
                    <input type="text" onChange={onChangeInputs} value={password} placeholder='Enter Your Password' name="password" id="" className="px-10 py-2 rounded-xl focus:outline-none border placeholder:text-orange-600  focus:border-orange-600" />
                </div>
                <div className="flex justify-center gap-5">
                    <button  onClick={submitData} className="bg-white font-bold uppercase tracking-[2px] duration-300 hover:translate-y-1 text-teal-700 hover:-translate-x-[2px] px-6 py-3 rounded-xl shadow-sm shadow-orange-900">Register</button>
                </div>


                {/* <div className="flex justify-center gap-5">
                    <button className="bg-pink-600 font-bold uppercase tracking-[2px] duration-300 hover:translate-y-1 text-white hover:-translate-x-[2px] px-16 py-3 rounded-3xl shadow-sm shadow-orange-900">Google</button>
                </div> */}
            </div>
        </div>    
    
    
    </section>
    </>
      
  )
}

export default Register
