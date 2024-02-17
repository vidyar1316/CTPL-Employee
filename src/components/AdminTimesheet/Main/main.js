import React from "react";
import "./main.css"


const Main = () => {
    return(
        <div className="main">
        <div className='approved'>Timesheets to be approved :</div>
         <div className='rejected'>Rejected Timesheets :</div>
         
         <div className="left_box">
         <div className="submitted">Your Submitted Timesheet</div>
         </div>
         
         <div className="right_box">
         <div className="select">Select Option</div>
         <div className="buttons">
         <button type="button" className="btnAdd">Add Timesheet</button>
         <button type="button" className="btnEdit">Edit Timesheet</button>
         <button type="button" className="btnView">View Rejected Sheets</button>
         </div> 
         </div>

         </div> 
    )  
}
export default Main;