import React, { Component } from 'react'
import Reacttable from 'react-table'
import 'react-table/react-table.css'

export class Addothertask extends Component {
    render() {
        const columns = [
            {
                Header: "Project"
            },
            {
                Header: "Module"
            },
            {
                Header: "Task"
            }
        ]
        return (
            <div>
               <h6 className="pt-3 "><b>Add Other Task</b></h6>
                        <hr></hr>
                        <div class="container">
                        <Reacttable
                        columns = {columns}
                        filterable
                        sortable
                        defaultpageSize={8}
                        ></Reacttable>
                        </div>  
      <center className="pt-3">
              <button type="button" className="btn">Submit</button>
              </center>
            </div>
        )
    }
}

export default Addothertask
