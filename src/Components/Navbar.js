import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../Assets/Logo.svg"
import { toast } from 'react-hot-toast'

function Navbar({setIsLoggedIn, isLoggedin}) {

  return (
    <div className='max-w-[1160px] bg-[#000814] flex justify-between items-center w-11/12 py-4 mx-auto text[#dbddea]'>
        
    <Link to="/">
        <img src={Logo} alt="" height={32} width={160} loading='lazy'
        />
    </Link>
    <nav>
        <ul className='flex text-[#dbddea] font-blod space-x-6'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">About</Link>
            </li>
            <li>
                <Link to="/">Contact</Link>
            </li>
        </ul>
    </nav>

    <div className='flex items-center space-x-4 text-[#dbddea]'>
        {!isLoggedin &&
            <Link to="/login">
                 <button className='bg-[#161d29] px-[12px] py-[8px] rounded-[8px] border-[#2c333f] border'> 
                    Login
                </button>
            </Link>
        }
        {!isLoggedin &&
            <Link to="/signup">
                <button className='bg-[#161d29] px-[12px] py-[8px] rounded-[8px] border-[#2c333f] border'>
                    Sign up
                </button>
            </Link>
        }
        {isLoggedin &&
            <Link to="/">
                <button className='bg-[#161d29] px-[12px] py-[8px] rounded-[8px] border-[#2c333f] border' onClick={()=>{
                    setIsLoggedIn(false)
                    toast.success("Logget Out")
                }}>
                    Log Out
                </button>
            </Link>
        }
        {isLoggedin &&
            <Link to="/dashboard">
                <button className='bg-[#161d29] px-[12px] py-[8px] rounded-[8px] border-[#2c333f] border'>
                    Dashboard
                </button>
            </Link>
        }        
    </div>

    </div>
  )
}

export default Navbar