import React, { Component } from 'react'
import './Hradmin.css'
import Reacttable from 'react-table'
import 'react-table/react-table.css'
import axios from 'axios'

 class Late extends Component {
   constructor(props) {
     super(props)

     this.state = {
       late:[]
     
     }
   }

   componentDidMount(){
     axios('')
      .then(response => {
        this.setState({
          'late':response.data
        })
      })
   }
  render() {
      const columns =[
        {
            Header: "Name"
        },
        {
            Header: "Check in Time"
        },
        {
            Header: "Late Counts"
        },
        {
            Header: "Last 5 Check-ins"
        },
    ]
    return (
      <div className="Late">
        <h5 className="pt-3"><b>&nbsp;Late Today</b></h5>
        <hr></hr>
        <div class="container">
            <Reacttable
            columns={columns}
            filterable
            sortable
            defaultPageSize={8}
            ></Reacttable>
        </div>
      </div>
    )
  }
}

export default Late
