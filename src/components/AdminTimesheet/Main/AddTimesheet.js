import './addTimesheet.css'
function AddTimesheet() {

    return (
        <>
            <div className="addTimesheet">

                <div className='addTimesheet-container'>

                    <div className="row text-center add-timesheet-notification">

                        <div className="col   mx-5 my-2 p-2 ">Timesheet to be approved</div>
                        <div className="col  mx-5  my-2 p-2  ">Rejected Timesheets</div>

                    </div>

                    <div className="row text-center add-timesheet-content mt-2">
                        <div className="col mx-5 my-2 p-2 ">
                            <p className='p-2 title'>Your Submitted Timesheet</p>
                            <div className='body   p-2 text-start'>
                                <div className='m-4 status p-4'>
                                    <p className=''>Timesheet Period :</p>
                                    <p  className=''>Created On :</p>
                                    <div className='d-flex justify-content-around '>
                                        <button className='status-btn p-2'>Status</button>
                                        <button className='view-btn p-2'>View</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mx-5 my-2 p-2 ">
                            <p className='p-2 title'>Select Option</p>
                            <div className='p-3 body'>
                                <div className='my-4 '>
                                    <button type='button' className='p-2 select-btn '>Add Timesheet</button>
                                </div>
                                <div className='my-4'>
                                    <button type='button' className='p-2 select-btn'>Edit Timesheet</button>
                                </div>
                                <div className='my-4'>
                                    <button type='button' className='p-2 select-btn'>Approve Timesheet</button>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>


            </div>

        </>
    )

}

export default AddTimesheet;