import React, { Component } from 'react'
import './Hradmin.css'
import Reacttable from 'react-table'
import 'react-table/react-table.css'
import axios from 'axios'

class Employeedetail extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userdetails: [],
             fname:'',
             lname:'',
             mobile:'',
             email:'',
             address:'',
             zip:'',
             joindate:'',
             password:''
        }
        // this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    componentDidMount(){


        //userdata accessing.....
        axios.get(`http://localhost:5000/user/userdetails`)
        .then(response => {
            console.log(response.data);
            this.setState({
                'userdetails': response.data
            })
        })
    }

    

    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        }) 
    }


    handleSubmit(e){

        e.preventDefault();

        const userdata = {
            fname: this.state.fname,
            lname:this.state.lname,
            mobile:this.state.mobile,
            email:this.state.email,
            address:this.state.address,
            zip:this.state.zip,
            joindate:this.state.joindate,
            password:this.state.password
            
          };

           //user data adding.....
           
        axios.post('http://localhost:5000/user/addusers',userdata)
        .then(response => {
            if(response.data){
                alert("Employee Added Successfully")
            }
            }) 
            .catch(error =>{
                console.log(error.response);
            }) 
            this.setState({
                fname:'',
                lname:'',
                mobile:'',
                email:'',
                address:'',
                zip:'',
                joindate:'',
                password:''
            });
    }

    render() {
        const columns=[
            {
                Header:"First Name",
                accessor: "fname"
            },
            {
                Header:"Last Name",
                accessor: "lname"
            },
            {
                Header:"Mobile",
                accessor: "mobile"
            },
            {
                Header:"Email",
                accessor: "email"
            },
            {
                Header:"Address",
                accessor: "address"
            },
            {
                Header:"Zip",
                accessor: "zip"
            },
            {
                Header:"Joint Date",
                accessor: "joindate"
            }
        ]
        return (
            <div>
                <div className="row">
                    <div className="col-10"><h5 className=" pt-3"><b>Employee Details</b></h5></div>
                    <div className="col-2 pt-2">
                    <div class="dropdown">
                        <button type="button" class="btn dropdown-toggle text-white" data-toggle="dropdown">Employee</button>
                        <div class="dropdown-menu">
                        <a class="dropdown-item" href="#" data-toggle="modal" data-target="#myModal2">Add</a>
                      </div>
                    </div>
                    </div>
                </div>
                        <hr></hr>
                        <div class="container">
                              <Reacttable
                               data={this.state.userdetails}
                              columns={columns}
                              filterable
                              sortable
                              defaultPageSize={8}
                              ></Reacttable>
                         </div>

                {/* Add modal */}
                <div class="modal" id="myModal2">
                <div class="modal-dialog">
                    <div class="modal-content">

                    <div class="modal-header">
                        <h4 class="modal-title">Add Employee</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div class="modal-body">
                    <input type="text" name="fname" className="form-control" placeholder="Enter First Name" required="required" autofocus="autofocus" onChange={this.handleChange}></input><br></br>
                    <input type="email" name="lname" className="form-control" placeholder="Enter Last Name" required="required" onChange={this.handleChange}></input><br></br>
                    <input type="number" name="mobile" className="form-control" placeholder="Enter Number" required="required" onChange={this.handleChange}></input><br></br>
                    <input type="email" name="email" className="form-control" placeholder="Enter Email Address" required="required" onChange={this.handleChange}></input><br></br>
                    <input type="text" name="address" className="form-control" placeholder="Enter Address" required="required" onChange={this.handleChange}></input><br></br>
                    <input type="number" name="zip" className="form-control" placeholder="Enter ZipCode" required="required" onChange={this.handleChange}></input><br></br>
                    <input type="date" name="joindate" className="form-control" placeholder="Enter Join Date" required="required" onChange={this.handleChange}></input><br></br>
                    <input type="text" name="password" className="form-control" placeholder="Password" required="required" onChange={this.handleChange}></input>
                    <br></br>
                    </div>

                    <div class="modal-footer">
                        <button type="submit" class="btn text-white" data-dismiss="modal" onClick={this.handleSubmit} >Add</button>
                    </div>

                    </div>
                </div>
                </div>

                 {/* Edit modal */}
                 <div class="modal" id="myModal1">
                <div class="modal-dialog">
                    <div class="modal-content">

                    <div class="modal-header">
                        <h4 class="modal-title">Edit Employee</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div class="modal-body">
                    <input type="text" id="fname" className="form-control" placeholder="Enter First Name" required="required" autofocus="autofocus" onChange={this.handleChange}></input><br></br>
                    <input type="email" id="lname" className="form-control" placeholder="Enter Last Name" required="required" onChange={this.handleChange}></input><br></br>
                    <input type="number" id="mno" className="form-control" placeholder="Enter Number" required="required" onChange={this.handleChange}></input><br></br>
                    <input type="email" id="email" className="form-control" placeholder="Enter Email Address" required="required" onChange={this.handleChange}></input><br></br>
                    <input type="text" id="address" className="form-control" placeholder="Enter Address" required="required" onChange={this.handleChange}></input><br></br>
                    <input type="number" id="zcode" className="form-control" placeholder="Enter ZipCode" required="required" onChange={this.handleChange}></input><br></br>
                    <input type="date" id="jdate" className="form-control" placeholder="Enter Join Date" required="required" onChange={this.handleChange}></input><br></br>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn" data-dismiss="modal">Update</button>
                    </div>

                    </div>
                </div>
                </div>

            

            </div>
        )
    }
}

export default Employeedetail
