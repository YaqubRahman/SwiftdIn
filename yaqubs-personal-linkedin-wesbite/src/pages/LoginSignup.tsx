import { useForm } from 'react-hook-form'

import React, { useState } from 'react'
import '../assets/LoginSignupAssets/LoginSignup.css'


import user_icon from '../assets/LoginSignupAssets/user.png' 
import email_icon from '../assets/LoginSignupAssets/envelope.png' 
import password_icon from '../assets/LoginSignupAssets/password.png' 



export const LoginSignup = () => {

  const [action,setAction] = useState("Login");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    console.log('Form data updated:', formData);
  };


  const handleSubmit = async () => {
    if (action == 'Login'){
      try{
        console.log('Attempting to login with', {email:formData.email, password:formData.password});

        // LOGIN API CALL


      } catch (error) {
        console.error('Login error', error);
      }
    } else {
      try{
        console.log('Attempting to sign up with', formData);

        // SIGNUP API CALL


      } catch (error){
        console.error('Sign Up error', error);
      }
    }
  };



  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>


      <div className='inputs'>
        {action==='Login'?<div></div>:
      <div className='input'>
        <img src={user_icon} alt=''/>
        <input

         type='text'
         name='name'
         placeholder='Name'
         value={formData.name}
         onChange={handleInputChange}

         />
      </div>}

  

      <div className='input'>
        <img src={email_icon} alt=''/>
        <input

        type='email'
        name='email'
        placeholder='Email ID'
        value={formData.email}
        onChange={handleInputChange}
        
        />
      </div>

      <div className='input'>
        <img src={password_icon} alt=''/>
        <input

         type='password'
         name='password'
         placeholder='Password'
         value={formData.password}
         onChange={handleInputChange}
        
        />
      </div>
      </div>

      {action==='Sign Up'?<div></div>:
        <div className="forgot-password">Forgot Password? <span>Click Here</span></div>}


      <div className="submit-container">
        <div className={action=='Login'? 'submit gray': 'submit'} onClick={()=>{setAction('Sign Up')}}>Sign Up</div> {/*When you click sign up */}
        

       {/*When you click login */}  
        <div className={action=='Sign Up' ?'submit gray': 'submit'}
        onClick={()=>{
          if (action == 'Sign Up'){
            setAction('Login');
          } else{
            handleSubmit();
          }
          
          }}>Login</div> 
  
      </div>


    </div>
  )
}
