import React, { Component } from 'react'
import './Hradmin.css'
import Reacttable from 'react-table'
import 'react-table/react-table.css'
import axios from 'axios'

export class Employeereport extends Component {
    constructor(props){
        super(props)
        this.state = {
            report: [],
           
       }
        
    }

   
    componentDidMount(){


        //userdata accessing.....
        axios.get(`http://localhost:5000/emprecord/empreport`)
        .then(response => {
           // console.log(response.data);
            this.setState({
                'report': response.data
            })
        })
    }
    render() {
        const columns=[
            {
                Header:"Name",
                accessor:"fname"
            },
            {
                Header:"Module",
                accessor:"module"
            },
            {
                Header:"Review",
                accessor:"status"
            },
            {
                Header:"Approved By",
                accessor:"null"
            }
        ]
        return (
            <div>
                 <div className="row">
                    <div className="col-9"><h5 className=" pt-3"><b>Employee Report</b></h5></div>
                    {/* <div className="col-3 pt-3 text-center"><Link to=""><button className="tablinks btn text-white">Generate complete Report</button></Link></div> */}
                    </div>
                    <hr></hr>
                    <div className="container">
                            <Reacttable
                            columns={columns}
                            data={this.state.report}
                            filterable
                            sortable
                            defaultPageSize={8}
                            ></Reacttable>    
                    </div>
            </div>
        )
    }
}

export default Employeereport
