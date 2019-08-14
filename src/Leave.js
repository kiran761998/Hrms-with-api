import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import axios from 'axios'


class Leave extends Component {
  constructor(props){
    super(props)
    this.state = {
        leave: [],
        name:'',
        fromdate:'',
        todate:'',
        reason:'',
        uid:''
   }
    
}


componentDidMount(){


    //userdata accessing.....
    axios.get(`http://localhost:5000/leaverequest/leavedata`)
    .then(response => {
       // console.log(response.data);
        this.setState({
            'leave': response.data
        })
    })    
}

handleChange = (e) =>{
  this.setState({
      [e.target.name]:e.target.value
  }) 
}


handleSubmit = (e) => {

  e.preventDefault();

  const leavedata = {
      name: this.state.name,
      fromdate:this.state.fromdate,
      todate:this.state.todate,
      reason:this.state.reason,
      uid:this.state.uid
      
    };

     //user data adding.....
     
  axios.post('http://localhost:5000/leaverequest/leaveapply',leavedata)
  .then(response => {
      if(response.data){
          alert("Leave Added Successfully")
      }
      }) 
      .catch(error =>{
          console.log(error.response);
      }) 
      this.setState({
          name:'',
          fromdate:'',
          todate:'',
          reason:'',
          uid: ''
      });
}

render() {
    const columns =[
        {
            Header:"Name",
            accessor:"name"
        },
        {
            Header:"From Date",
            accessor:"fromdate"
        },
        {
            Header:"To Date",
            accessor:"todate"

        },
        {
            Header:"Reason",
            accessor:"reason"
        },
        {
          Header:"Approved by",
          accessor:"null"
      }
    ]

        return (
            <div>
               <div className="row">
                    <div className="col-10"><h5 className=" pt-3"><b>Leave Tracker</b></h5></div>
                    <div className="col-2 pt-3 ">
                   <button type="button" className=" btn text-white" data-toggle="modal" data-target="#myModal6">Apply for Leave</button>
                    </div>
                </div>
                <hr></hr> 

                <div class="container">
                    <ReactTable
                        columns={columns}
                        data ={this.state.leave}
                        filterable
                        sortable
                        defaultPageSize={8}
                    ></ReactTable>
                </div>

 <div class="container">
  
  <div class="modal" id="myModal6">
    <div class="modal-dialog">
      <div class="modal-content">
      
    
        <div class="modal-header">
          <h4 class="modal-title"></h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        
        <div class="modal-body">
        <input type="text" name="name" className="form-control" placeholder="Task" required="required" autofocus="autofocus" onChange={this.handleChange}></input><br></br>
        <input type="date" name="fromdate" className="form-control" placeholder="From date" required="required" onChange={this.handleChange}></input><br></br>
        <input type="date" name="todate" className="form-control" placeholder="To Date" required="required" onChange={this.handleChange}></input><br></br>
       <input type="text" name="reason" className="form-control" placeholder="Reason" required="required" onChange={this.handleChange}></input><br></br>
        <input type="number" name="uid" className="form-control" placeholder="Uid" required="required" onChange={this.handleChange}></input><br></br>
        </div>
        
        
        <div class="modal-footer">
          <button type="button" class="btn " data-dismiss="modal" onClick={this.handleSubmit}>Apply</button>
        </div>
        
      </div>
    </div>
  </div>
  
</div>
 </div>
        )
    }
}

export default Leave
