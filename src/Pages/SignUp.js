import React from 'react'
import signUpImg from '../Assets/signup.png'
import Template from '../Components/Template'

function SignUp({setIsLoggedIn}) {
  return (
      <Template
      title="Join the millions learing to code with StydyNotion for free"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={signUpImg}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}/>
  )
}

export default SignUp