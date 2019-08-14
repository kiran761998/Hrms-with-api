import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

export class Demo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
        }
    }
    componentDidMount(){
        const url="http://jsonplaceholder.typicode.com/posts";
        fetch(url,{
            method: "GET"
        }).then(response =>response.json())
        .then(posts => {
            this.setState({posts:posts})
        })

    }
    
    render() {
        const columns=[
        {
            Header: "User Id",
            accessor: "userId",
            style:{
                textAlign: "right"
            },
            width:100
        },
        {
            Header: "Id",
            accessor: "id",
            style:{
                textAlign: "right"
            },
            width:50
        },
        {
            Header: "Title",
            accessor: "title"
        },
        {
            Header: "Content",
            accessor: "body"
        }

        ]
        return (
            <div>
               <ReactTable
                   columns={columns}
                   data={this.state.posts}
                   filterable
                   sortable
                >
                </ReactTable> 
            </div>
        )
    }
}

export default Demo
