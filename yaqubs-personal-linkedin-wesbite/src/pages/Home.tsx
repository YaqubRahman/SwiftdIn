import pfp from '../assets/pfpplaceholder.png'
import flag from '../assets/UKflag.png'
import '../components/Home.css'

import BangladeshFlag from '../assets/CountryChoose/Bangladesh.png';
import LebanonFlag from '../assets/CountryChoose/Lebanon.png';
import TurkishFlag from '../assets/CountryChoose/Turkey.png';
import SaudiFlag from '../assets/CountryChoose/Saudi.png';
import IraqFlag from '../assets/CountryChoose/Iraq.png';
import PakistanFlag from '../assets/CountryChoose/Pakistan.png';
import MalasiaFlag from '../assets/CountryChoose/Malasia.png';
import EgyptFlag from '../assets/CountryChoose/Egypt.png';

const countries = [
  { code: 'BD', name: 'Bangladesh',flag: BangladeshFlag},
  { code: 'LB', name: 'Lebanon', flag: LebanonFlag },
  { code: 'TR', name: 'Turkey', flag: TurkishFlag },
  { code: 'SA', name: 'Saudi Arabia', flag: SaudiFlag },
  { code: 'IQ', name: 'Iraq', flag: IraqFlag },
  { code: 'PK', name: 'Pakistan', flag: PakistanFlag },
  { code: 'MY', name: 'Malaysia', flag: MalasiaFlag },
  { code: 'EG', name: 'Egypt', flag: EgyptFlag }
];


const country = localStorage.getItem('country');

const userString = localStorage.getItem('user');
const userData = userString ? JSON.parse(userString) : null;
const user_name = userData ? userData.firstName : '';

function getCountryCode(){
  console.log('Country from localStorage:', country);
  for (let i=0; i < countries.length; i++){
    if (countries[i].code == country){
      console.log('Matched country:', countries[i].flag);
      return countries[i].flag
    }
  }
  console.log('No match found');
  return flag;
}

function getCountryName(){
  for(let i=0;i<countries.length; i++){
    if(countries[i].code == country){
      console.log('Country Name:', countries[i].name );
      return countries[i].name;      
    }
  }
}


function Home() {
    return (
        <>
        <div className='homefont'>
        <h1>SwiftdIn</h1>
<div className="parent-container">
  <div className="containerhome">
    <div className="childcontainer1">    
    <div className="namecard">

        <img src={pfp} className="logo" alt="pfp PlaceHolder" />
      <div className='homefont'>
      <h1>{user_name}</h1>

      </div>
      
      <p>Junior Software Engineer</p>

      <p>Currently working at SwiftdIn as a full stack engineer</p>

        <img src={getCountryCode()} className="flag" alt="Country Flag" />


        <p>{getCountryName()}</p>
    </div>



      <div className="card">
        <h2>Experience</h2>
        
        <div className='trending'>
        <p>
          2018-Present Meta - Junior Software Engineer<br></br>
          2014-2018 Netflix - Junior Software Engineer<br></br>
          2009-2014 Amazon - Junior Software Engineer<br></br>
          2008-2009 Apple - Junior Software Engineer<br></br>
          2006-2008 Microsoft - Junior Software Engineer<br></br>
        </p>
        </div>

      </div>

      <div className="card">
        <p>Available</p>

        </div>
        </div>


      <p className="read-the-docs">
        This is a work in progress
      </p>
      </div>
  </div>

  <div className="containerconnections">
    <h2>Connections List:</h2>


  </div>
</div>
        </>
    )
}

export default Home