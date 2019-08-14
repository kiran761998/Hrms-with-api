import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

export class AddTodaysTaskCompletion extends Component {
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
            }]
        return (
            <div>
                 <div className="row">
                    <div className="col-10"><h5 className=" pt-3"><b>Add</b></h5></div>
                    <div className="col-2 pt-3 ">
                    <button className="tablinks btn"  data-toggle="modal" data-target="#myModal4">Add another Task</button>
                    </div>
                </div>
                <hr></hr>
                
                <div class="container">
                <ReactTable
                        columns={columns}
                        filterable
                        sortable
                        defaultPageSize={8}
                    ></ReactTable>       
              </div>

              <div class="modal" id="myModal4">
                <div class="modal-dialog">
                    <div class="modal-content">

                    <div class="modal-header">
                        <h4 class="modal-title">Add Employee</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div class="modal-body">
                    <input type="text" id="Task" className="form-control" placeholder="Task" required="required" onChange={this.handleChange}></input><br></br>
                    <input type="text" id="Task completion" className="form-control" placeholder="Task completion" required="required" onChange={this.handleChange}></input><br></br>
                    
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn" data-dismiss="modal">Add</button>
                    </div>

                    </div>
                </div>
                </div>
              
            </div>
        )
    }
}

export default AddTodaysTaskCompletion
