import React, { Component } from 'react'
import Reacttable from 'react-table'
import 'react-table/react-table.css'
import axios from 'axios'

class Attendance extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            attend:[],
            name :'',
            date:'',
            time:'',
            user_id:''    
        }
    }

    componentDidMount(){


        //userdata accessing.....
        axios.get(`http://localhost:5000/attendance/getdata`)
        .then(response => {
           // console.log(response.data);
            this.setState({
                'attend': response.data
            })
        })    
    }
   
    handleChange = (e)=> {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit =(e) => {
        e.preventDefault();

        const attend ={
            name:this.state.name,
            date:this.state.date,
           time:this.state.time,
           user_id:this.state.user_id
        };

        axios.post('http://localhost:5000/attendance/takeattandace',attend)
        .then(response => {
            if(response.data){
                alert("Added successfully")
            }
        })
        .catch (error => {
            console.log(error.response);
        })

        this.setState({
            name :'',
            date:'',
            time:'',
            user_id:'' 
        });
    }

    
    render() {
        const columns=[
            {
                Header:"Date",
                accessor: "date"
            },
            {
                Header:"Name",
                accessor: "name"
            },
            {
                Header:"Time",
                accessor: "time"
            }
        ]
        return (
            <div>
                 <div className="row">
                        <div className="col-10"><h5 className=" pt-4"><b>Attendance</b></h5></div>
                        <div className="col-2 pt-3 text-center">
                    <button className="tablinks btn text-white" data-toggle="modal" data-target="#myModal10">Add</button></div>
                </div>
                 <hr></hr>
                 <div className="container">
                            <Reacttable
                            data = {this.state.attend}
                            columns={columns}
                            filterable
                            sortable
                            defaultPageSize={8}
                            ></Reacttable>  
                 </div>
                 {/* ADD modal */}
                 <div class="modal" id="myModal10">
                      <div class="modal-dialog">
                    <div class="modal-content">

                    <div class="modal-header">
                        <h4 class="modal-title">Attendance</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div class="modal-body">
                
                    <input type="text" name="name" className="form-control" placeholder="Enter Name"  autofocus="autofocus" required="required" onChange={this.handleChange}></input><br></br>
                    <input type="date" name="date" className="form-control" placeholder="Enter Date" required="required" onChange={this.handleChange}></input><br></br>
                    <input type="time" name="time" className="form-control" placeholder="Enter Time" required="required" onChange={this.handleChange}></input><br></br>
                    <input type="number" name="user_id" className="form-control" placeholder="userid" required="required" onChange={this.handleChange}></input><br></br>
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

export default Attendance
