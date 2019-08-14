import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Hradmin.css'
import axios from 'axios';

export class Usernavbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             notificationData:[],
             count:[],
        }
    }
    

    componentDidMount(){
        axios.get(`http://localhost:5000/leaverequest/getdata`)
        .then(response =>{
            console.log(response.data);
            const data = response.data;
            this.setState({
                notificationData:data
            })
        })
    }
    render() {
        return (
            <div>
                 <nav class="navbar navbar-expand-sm navbar-dark">
                    <ul class="navbar-nav ml-auto">
                        {/* <li className="nav-item mt-4">
                            <small>
                                <span class="dropdown badge dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="far fa-bell fa-1x text-white  pt-3 mr-4" />
                                        <span class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <span class="dropdown-item">
                                                {this.state.notificationData.map(data => {
                                                    return (
                                                            <span>
                                                                <br />
                                                                <strong>{data.title}</strong>:<br />
                                                            {data.description}{" "}
                                  </span>
                              );
                            })}
                          </span>
                        </span>
                      </span>
                    </small>
                  </li> */}
                        <li class="nav-item dropdown no-arrow" id="dr1">
                            <Link to="" class="nav-link dropdown-toggle"  id="navbardrop" data-toggle="dropdown"><i class="fas fa-user-circle fa-2x  pt-2"></i></Link>
                            <div class="dropdown-menu dropdown-menu-right">
                                <Link to="" class="dropdown-item">Profile</Link>
                                <div class="dropdown-divider"></div>
                                <Link to="" class="dropdown-item" data-toggle="modal" data-target="#myModal">Logout</Link>
                            </div>
                        </li>
                        </ul>
                    </nav>
                

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

export default Usernavbar
