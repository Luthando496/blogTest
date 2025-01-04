import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { supabase } from '../superclient';





const Login = () => {
    const [userInfo,setUser] = useState({
        email:"",
        password:''
    })

    const {email,password} = userInfo;


    const onChangeInputs = (e) =>{

        setUser((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }

    const signInWithEmail = async() => {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email,
          password
        })
      }


    //   useEffect(()=>{

    //   })
      
  return (
    <>
    <Navbar />
    <section className=' my-14 px-10'>
        <div className="container mx-auto flex justify-center ">
            <div className="rounded-lg border-shadow white  bg-slate-800 flex flex-col gap-8 shadow-lg px-4 py-8 my-10 w-[500px]">
                <div className="login_container text-center">
                    <h1 className="text-2xl text-light text-white uppercase tracking-[3px]">Login</h1>
                </div>

                <div className="flex flex-col gap-5">
                    <label htmlFor="" className="text-xl text-medium text-orange-600">Email: </label>
                    <input type="text" value={email} onChange={onChangeInputs} placeholder='Enter Your Email' name="email" id="" className="px-10 py-2 rounded-xl placeholder:text-orange-600  focus:outline-none border focus:border-orange-600" />
                </div>

                <div className="flex flex-col gap-5">
                    <label htmlFor="" className="text-xl text-medium text-orange-600">Password: </label>
                    <input value={password} onChange={onChangeInputs} type="text" placeholder='Enter Your Password' name="password" id="" className="px-10 py-2 rounded-xl placeholder:text-orange-600  focus:outline-none border focus:border-orange-600" />
                </div>
                <div className="flex justify-center gap-5">
                    <button onClick={signInWithEmail} className="bg-white font-bold uppercase tracking-[2px] duration-300 hover:translate-y-1 text-teal-700 hover:-translate-x-[2px] px-6 py-3 rounded-xl shadow-sm shadow-orange-900">Sign In</button>
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

export default Login
