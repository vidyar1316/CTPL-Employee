import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Routes, NavLink,} from 'react-router-dom';
import CreateEmployee from './Admin/Employee/CreateEmployee';
import SearchEmployee from './Admin/Employee/SearchEmployee';
import UploadEmployees from './Admin/Employee/UploadEmployees';
import CreateProject from './Admin/Employee/CreateProject';
import Footer from './Admin/Layout/footer';
import Header from './Admin/Layout/header';
import EmployeeProfile from './Admin/Employee/EmployeeProfile';
import EditEmployee from './Admin/Employee/EditEmployee';
import EmployeeDetails from './Admin/Employee/EmployeeDetails';


const NavPages = () => {
  const [activeClass, setActiveclass] = useState()
  const handleClick = () => {
    setActiveclass("activeclass")
  }
  return (
      // <Router>
      <div>
        <Header/>
<div className='nav-links'>
<ul>
  <li>
    <NavLink exact to="/createemployee" activeClassName="active" className={activeClass} onClick={handleClick}>Create Employee</NavLink>
  </li>
  <li>
    <NavLink to="/uploademployees" activeClassName="active" className={activeClass} onClick={handleClick}>Upload Employees</NavLink>
  </li>
  <li>
    <NavLink to="/createproject" activeClassName="active" className={activeClass} onClick={handleClick}>Create Project</NavLink>
  </li>
  <li>
    <NavLink to="/searchemployee" activeClassName="active" className={activeClass} onClick={handleClick}>Search Employee</NavLink>
  </li>
</ul>
</div>

<Routes>
    <Route  path="/createemployee" element={<CreateEmployee/>}/>
    <Route  path="/searchemployee" element={<SearchEmployee/>}/>
    <Route  path="/uploademployees" element={<UploadEmployees/>}/>
    <Route  path="/createproject" element={<CreateProject/>}/>
    {/* <Route  path="*" element={<CreateEmployee/>}/> */}
    <Route  path="/employeeprofile" element={<EmployeeProfile/>}/>
    <Route  path="/editemployee/:id/edit" element={<EditEmployee/>}/>
    <Route  path="/employeedetails/:id" element={<EmployeeDetails/>}/>
</Routes>
<Footer/>
</div>
// </Router>
  )
}
export default NavPages;
