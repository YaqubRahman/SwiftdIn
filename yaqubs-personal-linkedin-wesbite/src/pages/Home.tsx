import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import pfp from '../assets/pfpplaceholder.png'
import flag from '../assets/UKflag.png'
import '../App.css'


function Home() {
    return (
        <>
        <div className='black'>
        <h1>SwiftdIn</h1>

    <div className="container">    
    <div className="namecard">

        <img src={pfp} className="logo" alt="pfp PlaceHolder" />
      <h1>Johnson</h1>
      
      <p>Junior Software Engineer</p>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>

        <img src={flag} className="flag"alt="British Flag" />
    </div>



      <div className="card">
        <h2>Trending</h2>
        
        <div className='trending'>
        <p>
          1.Edit and save to test HMR<br></br>
          2.Edit and save to test HMR<br></br>
          3.Edit and save to test HMR<br></br>
          4.Edit and save to test HMR<br></br>
          5.Edit and save to test HMR<br></br>
        </p>
        </div>

      </div>

      <div className="card">
        <p>yoo</p>

        </div>
        </div>


      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>


      </div>
        </>
    )
}

export default Home