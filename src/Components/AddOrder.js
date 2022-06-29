import React, {Component} from 'react'
import {Link, Navigate} from "react-router-dom"

export default class AddOrder extends Component {

    constructor(props) {
        super(props);
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeDesc = this.onChangeDesc.bind(this);
        this.placeOrder = this.placeOrder.bind(this);
        this.state = {
          item_id: "",
          item_name: "",
          item_quantity: "", 
          item_desc: "",
          category: "Pending",
          redirect: null
        };
      }
      onChangeId(e) {
        this.setState({
          item_id: e.target.value
        });
      }
      onChangeName(e) {
        this.setState({
          item_name: e.target.value
        });
      }
      onChangeQuantity(e) {
        this.setState({
          item_quantity: e.target.value
        });
      }
      onChangeDesc(e) {
        this.setState({
          item_desc: e.target.value
        });
      }
      placeOrder(event) {
        event.preventDefault();
        var data = {
          item_id: this.state.item_id*1,
          item_name: this.state.item_name,
          item_quantity: this.state.item_quantity*1,
          item_desc: this.state.item_desc,
          category: "Pending",
        };
        fetch('https://telusapi.herokuapp.com/api/task-create/', {
          method: 'POST', 
          mode: 'cors',headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            }, 
          body: JSON.stringify(data)
        },this.setState({redirect:"/crud"})
        )
      }
      render(){
        if (this.state.redirect) {
          return <Navigate to={this.state.redirect} />
        }
        return (
        <div className="col-md-6 mx-auto">
            <h3 className='text-center mt-5'>Place Order</h3>
            <form>
                <div className="row g-3" style={{margin:"20px"}}>
                    <div className="col-sm-6">
                        <label htmlFor="id" className="form-label">Item ID</label>
                        <input type="number" className="form-control" id="id" aria-describedby="emailHelp"value={this.state.item_id} onChange={this.onChangeId}  required/>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="name" className="form-label">Item Name</label>
                        <input type="text" className="form-control" id="name" value={this.state.item_name} onChange={this.onChangeName} required/>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="quantity" className="form-label">Item Quantity</label>
                        <input type="number" className="form-control" id="quantity" value={this.state.item_quantity} onChange={this.onChangeQuantity} required/>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="desc" className="form-label">Item Description</label>
                        <input type="text" className="form-control" id="desc" value={this.state.item_desc} onChange={this.onChangeDesc} required/>
                    </div>
                    <div className="d-grid gap-2 d-md-block">
                        <button  onClick={this.placeOrder} className="btn btn-primary" type="submit" style={{margin:"2px"}}>Order</button>
                        <Link to="/crud" className="btn btn-danger ml-2">Cancel</Link>
                    </div>
                </div>
            </form>
        </div>
        )}
}

