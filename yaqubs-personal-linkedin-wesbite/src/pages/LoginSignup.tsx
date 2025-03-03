import { useNavigate } from 'react-router-dom';
import React, { useState} from 'react'
import '../assets/LoginSignupAssets/LoginSignup.css'


import user_icon from '../assets/LoginSignupAssets/user.png' 
import email_icon from '../assets/LoginSignupAssets/envelope.png' 
import password_icon from '../assets/LoginSignupAssets/password.png' 


const BASE_URL = 'http://localhost:5000'; // My backend port


export const LoginSignup = () => {
  const navigate = useNavigate();
  const [action,setAction] = useState("Login");
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });



  /*
  useEffect(() => {
    const fetchPosts = async () => {
      try{
        const response = await fetch(`${BASE_URL}/posts`);
        if (!response.ok){
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
      } catch (error){
        console.error('Failed to fetch ports:', error);
      }
    };
  
    fetchPosts();  
  }, []);
*/

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    console.log('Form data updated:', formData);
  };


  const handleSubmit = async () => {
    const url = action === 'Login'
    ?`${BASE_URL}/auth/login`
    :`${BASE_URL}/auth/register`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': `application/json`
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok){
      const errorData = await response.json();
      throw new Error(errorData.error || 'Authentication failed');
    }
    
    const data = await response.json();

    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));

    
    navigate('/countrychoose');




    console.log('Response:', data);
    console.log(action + ' successful', data);

  } catch(error){
    console.error(`${action} error:`, error);
  }

};



  return (
  <div className='background'>
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
         name='firstName'
         placeholder='First Name'
         value={formData.firstName}
         onChange={handleInputChange}

         />
      </div>}

      {action==='Login'?<div></div>:
      <div className='input'>
        <img src={user_icon} alt=''/>
        <input

         type='text'
         name='lastName'
         placeholder='Last Name'
         value={formData.lastName}
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
        <div className={action=='Login'? 'submit gray': 'submit'}
        onClick={()=>{
          if(action === 'Sign Up') {
            handleSubmit();
          } else { setAction('Sign Up') }
          }
          }>Sign Up</div> {/*When you click sign up */}
        

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
  </div>
  )
}
