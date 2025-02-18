import '../components/CountryChoose.css'

import BangladeshFlag from '../assets/CountryChoose/Bangladesh.png';
import LebanonFlag from '../assets/CountryChoose/Lebanon.png';
import TurkishFlag from '../assets/CountryChoose/Turkey.png';
import SaudiFlag from '../assets/CountryChoose/Saudi.png';
import IraqFlag from '../assets/CountryChoose/Iraq.png';
import PakistanFlag from '../assets/CountryChoose/Pakistan.png';
import MalasiaFlag from '../assets/CountryChoose/Malasia.png';
import EgyptFlag from '../assets/CountryChoose/Egypt.png';
import { Link, useNavigate } from 'react-router-dom';

function CountryChoose() {
    const navigate = useNavigate();

    const countries = [
        { code: 'BD', flag: BangladeshFlag},
        { code: 'LB', name: 'Lebanon', flag: LebanonFlag },
        { code: 'TR', name: 'Turkey', flag: TurkishFlag },
        { code: 'SA', name: 'Saudi Arabia', flag: SaudiFlag },
        { code: 'IQ', name: 'Iraq', flag: IraqFlag },
        { code: 'PK', name: 'Pakistan', flag: PakistanFlag },
        { code: 'MY', name: 'Malaysia', flag: MalasiaFlag },
        { code: 'EG', name: 'Egypt', flag: EgyptFlag }
    ];

    const HandleCountrySelect = async (countryCode: string) => {
        try{
            const token = localStorage.getItem('token');

            const response = await fetch('/auth/country', {
                method: 'PUT',
                headers: {
                    'Content-Type': `application/json`,
                    'Authorisation': `Bearer ${token}`
                },
                body: JSON.stringify({ country: countryCode})
            })

            if (response.ok){
                navigate('/home')
            }
        } catch(error){
            console.error('Error setting country:', error)
        }
    };


    return(
        <>
        <div className='flag-flex-container'>
        <h1>Choose your Country:</h1>
        <button onClick={() => HandleCountrySelect('BD') } className="flagButton">
        <img src={BangladeshFlag} className="flagchoose"alt="Bangladesh Flag" />
        </button>

        <button onClick={() => navigate('/home')} className="flagButton">
        <img src={LebanonFlag} className="flagchoose"alt=":Lebanon Flag" />
        </button>

        <button onClick={() => navigate('/home')} className="flagButton">
        <img src={TurkishFlag} className="flagchoose"alt="Turkish Flag" />
        </button>

        <button onClick={() => navigate('/home')} className="flagButton">
        <img src={SaudiFlag} className="flagchoose"alt="Saudi Flag" />
        </button>

        <button onClick={() => navigate('/home')} className="flagButton">
        <img src={IraqFlag} className="flagchoose"alt="Iraq Flag" />
        </button>

        <button onClick={() => navigate('/home')} className="flagButton">
        <img src={PakistanFlag} className="flagchoose"alt="Pakistan Flag" />
        </button>

        <button onClick={() => navigate('/home')} className="flagButton">
        <img src={EgyptFlag} className="flagchoose"alt="Egypt Flag" />
        </button>

        <button onClick={() => navigate('/home')} className="flagButton">
        <img src={MalasiaFlag} className="flagchoose"alt="Malasia Flag" />
        </button>
        
        </div>
        </>
    )
}


export default CountryChoose