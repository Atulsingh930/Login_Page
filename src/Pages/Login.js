import React from 'react'
import Template from '../Components/Template'
import loginIng from '../Assets/login.png'

function Login({setIsLoggedIn}) {
  return (
      <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={loginIng}
      formType="Login"
      setIsLoggedIn={setIsLoggedIn}/>
  )
}

export default Login