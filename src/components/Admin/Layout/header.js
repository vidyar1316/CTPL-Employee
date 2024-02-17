import React, {useState, useEffect} from 'react'
// import "./header.css" 
import ChiselonLogo from "../../ChiselonLogo.png"



const Header = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every 1000 milliseconds (1 second)

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means the effect runs once after the initial render

  const formattedDateTime = currentDateTime.toLocaleString();
  
  return (
    <nav>
      
      <div className='nav_box'>
      <div className='logo'>            
        <img src={ChiselonLogo} alt='logo'/>
      </div>   
          <div className='timesheet'>
            Timesheet
          </div>
          
      <div className="box d-flex flex-row align-items-center">

      <div className='timestamp'><span>{formattedDateTime}</span></div>
         <div className="ellipse" /></div>                    
      </div>       

          

         </nav>
         
        )
        }
export default Header;