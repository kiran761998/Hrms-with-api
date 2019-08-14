import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class AddNewTask extends Component {
    
    render() {
        const columns = [
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
            Header: "Comment",
        },
        ]
        return (
            <div>
                <div className="row">
                    <div className="col-10"><h5 className=" pt-3"><b>Add Next Week Task</b></h5></div>
                    <div className="col-2 pt-3 ">
                    <button className="tablinks btn text-white"  data-toggle="modal" data-target="#myModal3">Add another Task</button>
                    </div>
                </div>
                <hr></hr>
                
                <div class="container">
                   <ReactTable
                        columns={columns}
                        filterable
                        sortable
                        defaultPageSize={8}
                    >
                    </ReactTable>     
              </div>
               
              {/* Add another task */}

              <div class="modal" id="myModal3">
                <div class="modal-dialog">
                    <div class="modal-content">

                    <div class="modal-header">
                        <h4 class="modal-title">Add another task</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div class="modal-body">
                        <select id="" name="" className="form-control">
                            <option value="front">Project</option> <br></br>
                            <option value="back">1</option> <br></br>
                            <option value="full">2 </option><br></br>
                            <option value="full">3</option> <br></br>
                            <option value="full">3</option> <br></br>
                        </select><br></br>
                        <select id="" name="" className="form-control">
                           <option value="front">Module</option> <br></br>
                            <option value="back">1</option> <br></br>
                            <option value="full">2 </option><br></br>
                            <option value="full">3</option> <br></br>
                            <option value="full">3</option> <br></br>
                        </select><br></br>
                        <select id="" name="" className="form-control">
                           <option value="front">Task</option> <br></br>
                            <option value="back">1</option> <br></br>
                            <option value="full">2 </option><br></br>
                            <option value="full">3</option> <br></br>
                            <option value="full">3</option> <br></br>
                        </select><br></br>

                         <textarea id="comment" className="form-control" placeholder="Comment" required="required" onChange={this.handleChange}></textarea><br></br>
                    
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn text-white" data-dismiss="modal">Add</button>
                    </div>

                    </div>
                </div>
                </div>

            </div>
        )
    }
}

export default AddNewTask
