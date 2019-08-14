import React, { Component } from 'react'
import './Hradmin.css'
import Reacttable from 'react-table'
import 'react-table/react-table.css'

export class Mydetails extends Component {
    render() {
        const columns =[
            {
                Header: "First Name"
            },
            {
                Header: "Last Name"
            },
            {
                Header: "Mobile"
            },
            {
                Header: "Email"
            },
            {
                Header: "Address"
            },
            {
                Header: "Zip"
            },
            {
                Header: "Join Date"
            }
        ]
        return (
            <div>
                <div className="row">
                    <div className="col-12">
                      <h4 className="pt-3">My Detail</h4>
                    </div>
                    
                </div>
                        <hr></hr>
                        <div class="container">
                        <Reacttable
                        columns ={columns}
                        filterable
                        sortable
                        defaultPageSize={8}
                        ></Reacttable>
                       </div>
            </div>
        )
    }
}

export default Mydetails
