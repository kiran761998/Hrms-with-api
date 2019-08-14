import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
 import Login from './Login';
import Forget from './Forget';
  import Newemp from './Newemp';
  import Weekly from './Weekly';
  import AddNewTask from './AddNewTask';
  import Daily from './Daily';
  import Selecttodaytask from './Selecttodaytask';
  import Todaytaskcompleted from './Todaytaskcompleted';
  import Addothertask from './Addothertask';
 import AddTodaysTaskCompletion from './AddTodaysTaskCompletion';
 import Leave from './Leave';
 import Mydetails from './Mydetails';
import Hradmin from './Hradmin';
import Demo from './Demo';
 import Employeerequest from './Employeerequest';
 import Late from './Late';
 import Employeerecord from './Employeerecord';
 import Employeereport from './Employeereport';
 import Employeedetail from './Employeedetail';
 import Project from './Project';
 import Sidebar from './Sidebar';
import mydetails from './Mydetails';
import usermydetail from './usermydetail';
import Usernavbar from './Usernavbar';
import Attendance from './Attendance';


function App() {
  return (
      <BrowserRouter>
        <div>
              {/* <div className="row">
             <div className="col-12">
             <Hradmin />
            </div>
           </div>
            <div className="row">
              <div className="col-2">
              <Sidebar />   
              </div>
              <div className="col-10">
                  <Route exact path="/" component={Login} /> 
                  <Route path="/forget" component={Forget} />
                  <Route path="/hradmin" component={Hradmin}  />   
                  <Route path="/employeerequest" component={Employeerequest} />
                  <Route path="/late" component={Late} />
                  <Route path="/employeerecord" component={Employeerecord} />
                  <Route path="/employeereport" component={Employeereport} />
                  <Route path="/employeedetail" component={Employeedetail} />
                  <Route path="/project" component={Project} />
                  <Route path="/usermydetail" component={usermydetail}/>  
              </div>
            </div>    
             
           */}
                 <div className="row">
              <div className="col-12">
              <Usernavbar />
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <Newemp />
              </div>
                <div className="col-10">
                  <Route path="/newemp" component={Newemp} /> 
                  <Route path="/weekly" component={Weekly} />
                  <Route path="/addnewtask" component={AddNewTask} />
                  <Route path="/daily" component={Daily} />
                  <Route path="/attendance" component={Attendance}/>
                  <Route path="/todaytaskcompleted" component={Todaytaskcompleted} />
                  <Route path="/addothertask" component={Addothertask} /> 
                  <Route path="/addTodaysTaskCompletion" component={AddTodaysTaskCompletion} />
                  <Route path="/leave" component={Leave} />
                  <Route path="/mydetails" component={Mydetails}/>
                  <Route path="/employeedetail" component={Employeedetail} />
              </div>
            </div>   
     


         
        </div>
      </BrowserRouter>
  )
  

}

export default App
