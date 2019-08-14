import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Hradmin.css'

export class usermydetail extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-9">
                      <h4 className="pt-3">My Detail</h4>
                    </div>
                    <div className="col-3 pt-3">
                    <Link to="Employeedetail"><button className="tablinks btn text-white">Employee detail</button></Link>
                    </div>
                </div>
                <hr></hr>
            </div>
        )
    }
}

export default usermydetail
