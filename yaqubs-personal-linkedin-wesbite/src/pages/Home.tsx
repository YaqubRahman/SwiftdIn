import pfp from '../assets/pfpplaceholder.png'
import flag from '../assets/UKflag.png'
import '../components/Home.css'


function Home() {
    return (
        <>
        <div className='homefont'>
        <h1>SwiftdIn</h1>

    <div className="container">    
    <div className="namecard">

        <img src={pfp} className="logo" alt="pfp PlaceHolder" />
        <div className='homefont'>
      <h1>Johnson</h1>
      </div>
      
      <p>Junior Software Engineer</p>

      <p>Currently working at SwiftdIn as a full stack engineer</p>

        <img src={flag} className="flag"alt="British Flag" />

        <p>UK</p>
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

        </>
    )
}

export default Home