import React, { Component } from 'react'
import  './Hradmin.css'
import {Link} from 'react-router-dom'

export class Newemp extends Component {
  render() {
    return (
      <div>
   <div className="tab" id="tab" >
      <Link to="Weekly"><button className="tablinks"><i class="fas fa-clock"></i>&nbsp;Weekly Task</button></Link>
      <Link to="Daily"><button className="tablinks"><i class="fab fa-elementor"></i>&nbsp;Daily Activity</button></Link>
      <Link to="Attendance"><button className="tablinks"><i class="fas fa-laptop-medical"></i>&nbsp;Attendance</button></Link>
      <Link to="Leave"><button className="tablinks"><i class="fas fa-concierge-bell"></i>&nbsp;Leave</button></Link>
  </div>  
      </div>
    )
  }
}

export default Newemp

