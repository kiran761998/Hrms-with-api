import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Login extends Component {
      render() {
        return (
            <div>
                 <div className="container">
                    <div className="card card-login mx-auto mt-5">
                        <div className="card-header">Reset Password</div>
                        <div className="card-body">
                            <div className="text-center mb-4">
                                <h4>Login</h4>
                            </div>
                            <form>
                                <div className="form-group">
                                    <div className="form-label-group">
                                        <input type="email" id="inputEmail" className="form-control" placeholder="Enter email address" required="required" autofocus="autofocus" onChange={this.handleChange}></input>
                                        <label for="inputEmail">Enter email address</label>
                                    </div><br></br>
                                    <div className="form-label-group">
                                        <input type="password" id="inputpwd" className="form-control" placeholder="Enter email password" required="required" autofocus="autofocus" onChange={this.handleChange}></input>
                                        <label for="inputpwd">Enter password</label>
                                    </div>
                                </div>
                                <a className="btn btn-primary btn-block">Login</a>
                            </form>
                            <div className="text-center">
                            <Link to="Forget" className="d-block small">Forget Password</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login


