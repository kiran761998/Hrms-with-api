import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Hradmin.css'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import axios from 'axios'

class Weekly extends Component {
    constructor(props){
        super(props)
        this.state = {
            weekly: []
            
       }
        
    }

   
    componentDidMount(){


        //userdata accessing.....
        axios.get(`http://localhost:5000/emprecord/emprecord`)
        .then(response => {
           // console.log(response.data);
            this.setState({
                'weekly': response.data
            })
        })
    }
    render() {
        const columns = [
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
            }
        ]
        return (
            <div>
                <div className="row">
                    <div className="col-10"><h4 className=" pt-3">Weekly Task</h4></div>
                    <div className="col-2 pt-3 text-center">
                        <Link to="AddNewTask">
                            <button className="tablinks btn text-white">Add Next Week</button>
                        </Link>
                    </div>
                </div>
                <hr></hr>
                <div class="container">
                    <ReactTable
                        columns = {columns}
                        data ={this.state.weekly}
                        filterable
                        sortable
                        defaultPageSize={8}
                    >
                    </ReactTable>
                        
                </div> 
            </div>
        )
    }
}

export default Weekly
