import '../components/CountryChoose.css'

import BangladeshFlag from '../assets/CountryChoose/Bangladesh.png';
import LebanonFlag from '../assets/CountryChoose/Lebanon.png';
import TurkishFlag from '../assets/CountryChoose/Turkey.png';
import SaudiFlag from '../assets/CountryChoose/Saudi.png';
import IraqFlag from '../assets/CountryChoose/Iraq.png';
import PakistanFlag from '../assets/CountryChoose/Pakistan.png';
import MalasiaFlag from '../assets/CountryChoose/Malasia.png';
import EgyptFlag from '../assets/CountryChoose/Egypt.png';
import { Link } from 'react-router-dom';

function CountryChoose() {
    return(
        <>
        <div className='flag-flex-container'>
        <h1>Choose your Country:</h1>
        
        <Link to="/countrychoose">
        <img src={BangladeshFlag} className="flagchoose"alt="Bangladesh Flag" />
        </Link>

        <img src={LebanonFlag} className="flagchoose"alt=":Lebanon Flag" />
        <img src={TurkishFlag} className="flagchoose"alt="Turkish Flag" />
        <img src={SaudiFlag} className="flagchoose"alt="Saudi Flag" />
        <img src={IraqFlag} className="flagchoose"alt="Iraq Flag" />
        <img src={PakistanFlag} className="flagchoose"alt="Pakistan Flag" />
        <img src={EgyptFlag} className="flagchoose"alt="Egypt Flag" />
        <img src={MalasiaFlag} className="flagchoose"alt="Malasia Flag" />
        
        </div>
        
        </>
    )
}


export default CountryChoose