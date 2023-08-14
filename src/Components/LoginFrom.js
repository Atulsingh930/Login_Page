import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function LoginFrom({setIsLoggedIn}) {
    const usenavigate = useNavigate();
    const [fromData, setfromData] = useState({
        email : "",
        password : ""
    })

    const [showPassword, setshowPassword] = useState(false);

    function changehandler(event){
        setfromData((prevData)=>(
            {
                ...prevData, 
                [event.target.name] : event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged in")
        usenavigate('/dashboard')
    }
  return (
    <form onSubmit={submitHandler} className='text-white mt-6 flex flex-col gap-y-4'>
        <label>
            <p className='mb-1 text-sm'>Email Address<sup className='text-red-500 ml-1'>*</sup></p>
            <input className='bg-[#161d29] py-2 rounded-lg border-b-2 border-[#404650] placeholder:text-lg text-lg w-full pl-3' required
             value={fromData.email}
             type="email"
             name='email'
             onChange={changehandler}
             placeholder='Enter Email id' />
         </label>
         <label className='relative'>
            <p className='mb-1 text-sm'>Password<sup className='text-red-500 ml-1'>*</sup></p>
            <input className='bg-[#161d29] py-2 rounded-lg border-b-2 border-[#404650] placeholder:text-lg text-lg w-full pl-3' required
             value={fromData.password}
             type={showPassword ? ("text") : ("password")}
             name='password'
             onChange={changehandler}
             placeholder='Enter Password' />

             <span className='text-2xl absolute bottom-7 right-3 cursor-pointer' onClick={()=>setshowPassword((prev)=>!prev)}>
                {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
             </span>

             <Link to="#">
                <p className='text-xs ml-[22rem] mt-1 text-blue-400'>
                    Forgot Password
                </p>
             </Link>
         </label>
         <button className='bg-[#ffd60a] text-[#000814] text-lg py-2 rounded-md mt-6'>
             Sign In
        </button>
    </form>
  )
}

export default LoginFrom