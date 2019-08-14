import React, { Component } from 'react'
import './Hradmin.css'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import axios from 'axios'

class Employeerecord extends Component {
    constructor(props){
        super(props)
        this.state = {
            record: [],
            
       }
        
    }

   
    componentDidMount(){


        //userdata accessing.....
        axios.get(`http://localhost:5000/emprecord/emprecord`)
        .then(response => {
           // console.log(response.data);
            this.setState({
                'record': response.data
            })
        })
    }
    render() {
        const columns=[
            {
                Header:"Week No",
                accessor:"weekno"
            },
            {
                Header:"Project",
                accessor:"projectname"
            },
            {
                Header:"Module",
                accessor:"module"
            },
            {
                Header:"Task",
                accessor:"taskname"
            },
            {
                Header:"Task Completed",
                accessor:"status"
            },
        ]
        return (
            <div>
                <h5 className="pt-3"><b>Employee Record</b></h5>
                <hr></hr>
                <div className="container">
                    <ReactTable
                    columns={columns}
                    data ={this.state.record}
                    filterable
                    sortable
                    defaultPageSize={8}
                    ></ReactTable>
                </div>
            </div>
        )
    }
}

export default Employeerecord
