import React, { Component } from 'react'
import './All.css'
import Reacttable from 'react-table'
import 'react-table/react-table.css'
import axios from 'axios'

 class Project extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             projectdetails: [],
             pid:'',
             projectname:'',
             estimatetime:''
        }
         this.handleChange=this.handleChange.bind(this);
         this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();

        const addproject ={
            pid:this.state.pid,
            projectname:this.state.projectname,
            estimatetime:this.state.estimatetime
        };

        axios.post('http://localhost:5000/project/addproject',addproject)
        .then(response => {
            if(response.data){
                alert("Added successfully")
            }
        })
        .catch (error => {
            console.log(error.response);
        })

        this.setState({
            pid:'',
            projectname:'',
            estimatetime:''
        });
    }

    componentDidMount(){


        //userdata accessing.....
        axios.get('http://localhost:5000/project/projectdetails')
        .then(response => {
            // console.log(response.data);
            this.setState({
                'projectdetails': response.data
            })
        })
    }
    
  render() {
        const columns=[
            {
                Header:"project ID",
                accessor: "pid"
            },
            {
                Header:"project",
                accessor: "projectname"
            },
            {
                Header:"Estimate Time",
                accessor: "estimatetime"
            }
        ]
        return (
            <div>
                <div className="row">
                        <div className="col-10"><h5 className=" pt-4"><b>Project</b></h5></div>
                        <div className="col-2 pt-3 text-center">
                    <button className="tablinks btn text-white" data-toggle="modal" data-target="#myModal9">Add Project</button></div>
                </div>
                 <hr></hr>
                 <div className="container">
                            <Reacttable
                            data = {this.state.projectdetails}
                            columns={columns}
                            filterable
                            sortable
                            defaultPageSize={8}
                            ></Reacttable>  
                            </div>

                            {/* Add Modal   */}
                      <div class="modal" id="myModal9">
                      <div class="modal-dialog">
                    <div class="modal-content">

                    <div class="modal-header">
                        <h4 class="modal-title">Add Employee</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div class="modal-body">
                
                    <input type="text" name="pid" className="form-control" placeholder="Project Id" required="required" onChange={this.handleChange}></input><br></br>
                    <input type="text" name="projectname" className="form-control" placeholder="Project Name" required="required" autofocus="autofocus" onChange={this.handleChange}></input><br></br>
                    {/* <select id="" name="projectname" className="form-control">
                        <option value="">HRMS</option><br></br>
                        <option value="">CRMS</option><br></br>
                        <option value="">Dealllionaire</option><br></br>
                        <option value="">CMS</option><br></br>
                    </select><br></br> */}
                    <input type="text" name="estimatetime" className="form-control" placeholder="Esitmate Time" required="required" onChange={this.handleChange}></input><br></br>
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

export default Project
