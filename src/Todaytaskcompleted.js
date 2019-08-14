import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

 class Todaytaskcompleted extends Component {
    render() {
        const columns = [
            {
                Header: "Time/Date",
                style:{
                    textAlign:"right",

                },width:100
            },
            {
                Header: "Project",
            },
            {
                Header: "Module",
            },
            {
                Header: "Task",
            },
            {
                Header: "Task Completed",
            },
            {
                Header: "Approved",
            }
        ]
        return (
            <div>
                 <div className="row">
                    <div className="col-9"><h5 className=" pt-3"><b>Today Tasks </b></h5></div>
                    <div className="col-3 pt-3 ">
                   <Link to="AddTodaysTaskCompletion"> <button type="button" className="tablinks btn text-white">Add Todays task completion</button></Link>
                    </div>
                </div>
                    
                <hr></hr>
                
                <div class="container">
                <ReactTable
                        columns = {columns}
                        filterable
                        sortable
                        defaultPageSize={8}
                        >
                        </ReactTable>      
              </div>
               <center className="pt-3">
              <button type="button" className="btn text-white">Submit</button>
              </center> 
            </div>
        )
    }
}

export default Todaytaskcompleted
