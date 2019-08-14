import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Hradmin.css'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import axios from 'axios'

class Employeerequest extends Component {
    constructor(props){
        super(props)
        this.state = {
            record: [],
            name:'',
            fromdate:'',
            todate:'',
            reason:''
       }
        
    }

   
    componentDidMount(){


        //userdata accessing.....
        axios.get(`http://localhost:5000/leaverequest/leavedata`)
        .then(response => {
           // console.log(response.data);
            this.setState({
                'record': response.data
            })
        })
    }
    render() {
        const columns =[
            {
                Header:"Name",
                accessor:"name"
            },
            {
                Header:"From Date",
                accessor:"fromdate"
            },
            {
                Header:"To Date",
                accessor:"todate"

            },
            {
                Header:"Reason",
                accessor:"reason"
            }
        ]
        return (
            <div>
                <div className="row">
                    <div className="col-10"><h5 className=" pt-3"><b>Employee Request</b></h5></div>
                    <div className="col-2 pt-2">
                    <div class="dropdown">
                        <button type="button" class="btn dropdown-toggle text-white" data-toggle="dropdown">
                        Employee
                        </button>
                        <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Approve</a>
                        <a class="dropdown-item" href="#">Decline</a>
                        </div>
                    </div>
                    </div>
                </div>
                <hr></hr>
                  <div class="container">
                        <ReactTable
                            columns={columns}
                            data={this.state.record}
                            filterable
                            sortable
                        ></ReactTable>
                 </div>
            </div>
        )
    }
}

export default Employeerequest
