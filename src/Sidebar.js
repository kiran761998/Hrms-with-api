import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import './Hradmin.css'

class Sidebar extends Component {
    render() {
        return (
            <div>
                <div className="tab" id="tab">
                    <Link to="Late"><button className="tablinks "><i class="fas fa-clock"></i>&nbsp;Late Today</button></Link>
                    <Link to="Employeerequest"><button className="tablinks"><i class="fab fa-elementor"></i>&nbsp;Employee Request</button></Link>
                    <Link to=""><button className="tablinks"><i class="fas fa-laptop-medical"></i>&nbsp;Absence Record</button></Link>
                    <Link to="Employeerecord"><button className="tablinks"><i class="fas fa-book-reader"></i>&nbsp;Employee Record</button></Link>
                    <Link to="Employeereport"><button className="tablinks"><i class="fas fa-republican"></i>&nbsp;Employee Report</button></Link>
                    <Link to="Project"><button className="tablinks"><i class="fas fa-tasks"></i>&nbsp;Projects</button></Link>
                </div>
            </div>
        )
    }
}

export default Sidebar
