import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

export class Selecttodaytask extends Component {
    render() {
        const columns = [
            {
                Header: "Task",
                style:{
                    textAlign:"right",

                },
            },
            {
                Header: "Task Completion",
            }
        ]

        return (
            <div>
                <div className="row">
                    <div className="col-10"><h5 className=" pt-3"><b>Select Today task</b></h5></div>
                    <div className="col-2 pt-2 ">
                   <Link to="Addothertask"> <button type="button" className="tablinks btn text-white">Add other Task</button></Link>
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

export default Selecttodaytask
