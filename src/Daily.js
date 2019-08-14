import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import axios from 'axios'

class Daily extends Component {
    constructor(props){
        super(props)
        this.state = {
            daily: [],
            pid:'',
            date:'',
            projectname:'',
            weekno:'',
            module:'',
            taskname:'',
            status:'',
           
       }
        
    }

   
    componentDidMount(){


        //userdata accessing.....
        axios.get(`http://localhost:5000/task/dailytask`)
        .then(response => {
           // console.log(response.data);
            this.setState({
                'daily': response.data
            })
        })
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        }) 
    }


    handleSubmit = (e) =>{

        e.preventDefault();

        const daily = {
            pid:this.state.pid,
            date: this.state.date,
            projectname:this.state.projectname,
            module:this.state.module,
            weekno:this.state.weekno,
            taskname:this.state.taskname,
            status:this.state.status,
            null:this.state.null
          };

           //user data adding.....
           
        axios.post('http://localhost:5000/task/addtask',daily)
        .then(response => {
            if(response.data){
                alert("Task Added Successfully")
            }
            }) 
            .catch(error =>{
                console.log(error.response);
            }) 
            this.setState({
                pid:'',
                date:'',
                weekno:'',
                projectname:'',
                module:'',
                taskname:'',
                staus:'',
                // null:''
            });
    }


    render() {
        const columns = [
            {
                Header: "Date",
                accessor: "date"
    
            },
            {
                Header: "Project",
                accessor: "projectname"
            }, 
            {
                Header: "Module",
                accessor: "module"
            },
            {
                Header: "Task",
                accessor: "taskname"
            },
            {
                Header: "Task Completed",
                accessor: "status"
            }
            // {
            //     Header: "Approved",
            //     accessor: "null"
            // }
        ]
        return (
            <div>
               <div className="row">
                    <div className="col-10"><h4 className=" pt-3">Daily Target</h4></div>
                    <div className="col-2 pt-3">
                    <button className="text-white btn" data-toggle="modal" data-target="#myModal10">Add Task</button>
                    {/* <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle btn text-white"  id="navbardrop" data-toggle="dropdown"><b>Task</b></a>
                    <div class="dropdown-menu dropdown-menu-right">
                    <Link to="Selecttodaytask" class="dropdown-item">Select Today task</Link>
                    <Link to="Todaytaskcompleted" class="dropdown-item">Add Today's Task Completed</Link>
                    </div>
                    </div> */}
                    </div>
                    </div>
                     <hr></hr>
                        <div class="container">
                            <ReactTable
                            columns = {columns}
                            data={this.state.daily}
                            filterable
                            sortable
                            defaultPageSize={8}
                            >
                            </ReactTable>
                        </div>
                        
                        {/* add modal */}
            
                    <div class="modal" id="myModal10">
                    <div class="modal-dialog">
                    <div class="modal-content">

                    <div class="modal-header">
                        <h4 class="modal-title">Add Task</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div class="modal-body">
                    <input type="number" name="pid" className="form-control" placeholder="project id" required="required" autofocus="autofocus" onChange={this.handleChange}></input><br></br>
                    <input type="date" name="date" className="form-control" placeholder="Date" required="required" autofocus="autofocus" onChange={this.handleChange}></input><br></br>
                    {/* <input type="text" name="projectname" className="form-control" placeholder="Project" required="required" onChange={this.handleChange}></input><br></br> */}
                    <input type="number" name="weekno" className="form-control" placeholder="Weekno" required="required"  onChange={this.handleChange}></input><br></br>
                    <input type="text" name="module" className="form-control" placeholder="Module" required="required" onChange={this.handleChange}></input><br></br>
                    <input type="text" name="taskname" className="form-control" placeholder="Task" required="required" onChange={this.handleChange}></input><br></br>
                    <input type="text" name="status" className="form-control" placeholder="Task Completed" required="required" onChange={this.handleChange}></input><br></br>
                    {/* <input type="text" name="null" className="form-control" placeholder="Approved by" required="required" onChange={this.handleChange}></input><br></br> */}
                    <br></br>
                    </div>

                    <div class="modal-footer">
                        <button type="submit" class="btn text-white" data-dismiss="modal" onClick={this.handleSubmit} >Add</button>
                    </div>

                    </div>
                </div>
                </div>

            </div>
        )
    }
}

export default Daily
