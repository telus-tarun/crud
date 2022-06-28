import React, { Component } from 'react'
import {Link} from "react-router-dom"
import { toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default class DetailOrder extends Component {
  constructor(){
        super();
        this.state = {
            articles: [], 
        }
    }

    url = "https://telusapi.herokuapp.com/api/task-list/";

    async fetchApi(detailUrl) {
      let data = await fetch(detailUrl); //try-catch
        let parseData = await data.json()
        this.setState({articles: parseData})
      }


      componentDidMount(){
          this.fetchApi(this.url);  
        }
      delete = async (e, id) =>{
        await fetch(`https://telusapi.herokuapp.com/api/task-delete/${id}/`, {
          method: 'DELETE', 
          mode: 'cors', 
        }
        ).then(res =>{
          this.setState(this.fetchApi(this.url))
        },
        
        toast.dismiss(),
        toast.success("Deleted successfully")
        );
        
        
      }
  render(){
    return (
    <div className="col-md-8 mx-auto">
      {/* {this.state.articles.length === 0 ?<h3 className='mx-auto'> No items</h3> : */}
        <table className="table" style={{marginTop:"50px"}}>
            <thead>
                <tr>
                <th scope="col">Item ID</th>
                <th scope="col">Item Name</th>
                <th scope="col">Item Quantity</th>
                <th scope="col">Item Description</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
              {this.state.articles.map((item)=>{
                return <tr key={item.id}>
                <th scope="row">{item.item_id}</th>
                <td>{item.item_name}</td>
                <td>{item.item_quantity}</td>
                <td>{item.item_desc}</td>
                <td><Link to={`/edit/${item.id}`} className="btn btn-danger ml-2">Edit</Link></td>
                <td><button className='btn btn-primary' onClick={e =>this.delete(e, item.id)}>Delete</button></td>
                </tr>
              })}
            </tbody>
        </table>
        {/* {this.state.articles.length === 0 ?<h3 className='mx-auto mt-5'> No items</h3>:<></> } */}
        <ToastContainer/>
    </div>
  )
}
}
