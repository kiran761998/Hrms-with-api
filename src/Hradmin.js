import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Hradmin.css'

class Hradmin extends Component {
  render() {
    return (
      <div>
       <nav class="navbar navbar-expand-sm navbar-dark">
         <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown no-arrow" id="dr1">
              <Link to="" class="nav-link dropdown-toggle"  id="navbardrop" data-toggle="dropdown"><i class="fas fa-user-circle fa-2x  pt-2"></i></Link>
              <div class="dropdown-menu dropdown-menu-right">
                <Link to="usermydetail" class="dropdown-item">Profile</Link>
                <div class="dropdown-divider"></div>
                <Link to="" class="dropdown-item" data-toggle="modal" data-target="#myModal">Logout</Link>
              </div>
          </li>
        </ul>
       </nav>
       <hr/>

   

  {/* logout Modal */}
  <div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">Logout</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <div class="modal-body">
        Are you sure... You want to logout? please save your progress...
      </div>

      <div class="modal-footer">
        <button type="button" class="btn" data-dismiss="modal">Logout</button>
      </div>

    </div>
  </div>
</div>

</div>


)
}
}

export default Hradmin
