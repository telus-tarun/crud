import React, {useEffect, useState} from 'react'
import {Link, useNavigate, useParams} from "react-router-dom"
import { toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateOrder(){
    let {id}= useParams();
    const navigate = useNavigate();
    const [Detail, setDetail] = useState({
        item_id: '',
        item_name: '',
        item_quantity: '',
        item_desc: '',
        item_category: 'Pending',

    })

    const fetchData = async () => {
        let data = await fetch(`https://telusapi.herokuapp.com/api/task-detail/${id}/`, {
            method: 'GET', 
            mode: 'cors', 
          })
          let parseData = await data.json();
          setDetail({
            item_id: parseData.item_id,
            item_name: parseData.item_name,
            item_quantity: parseData.item_quantity,
            item_desc: parseData.item_desc,
            item_category: 'Pending',
          });
        }


        const [Data, setData] = useState({
            item_id: '',
            item_name: '',
            item_quantity: '',
            item_desc: '',
            item_category: 'Pending',
        });


        useEffect(() => {
            fetchData();
            setData({
                item_id: Detail.item_id,
                item_name: Detail.item_name,
                item_quantity: Detail.item_quantity,
                item_desc: Detail.item_desc,
                item_category: 'Pending',
            });
       },[setData,Detail.item_id,Detail.item_name,Detail.item_quantity, Detail.item_desc]);

       

        
        let placeOrder = (event) => {
            event.preventDefault();
            // console.log()
            var data = {
              item_id: Data.item_id,
              item_name: Data.item_name,
              item_quantity: Data.item_quantity*1,
              item_desc: Data.item_desc,
              category: "Pending",
            };
            fetch(`https://telusapi.herokuapp.com/api/task-update/${id}/`, {
              method: 'POST', 
              mode: 'cors',headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json;charset=UTF-8'
                }, 
              body: JSON.stringify(data)
            }
            );
            navigate("/");
            console.log("success!!");
            toast.dismiss();
            toast.success("Order Updated successfully!!")
          }
    return (
        <>
        <div className="col-md-6 mx-auto">
            <h3 className='text-center mt-5'>Edit Order</h3>
            <form>
                <div className="row g-3" style={{margin:"20px"}}>
                    <div className="col-sm-6">
                        <label htmlFor="id" className="form-label">Item ID</label>
                        <input type="number" defaultValue={Detail.item_id} 
                        onChange={(e) => {setData({item_id: e.target.value, item_name:Data.item_name,
                             item_desc:Data.item_desc, item_quantity:Data.item_quantity})}} 
                        className="form-control" id="id" aria-describedby="emailHelp" required/>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="name"  className="form-label">Item Name</label>
                        <input type="text" defaultValue={Detail.item_name} 
                        onChange={(e) => {setData({item_id: Data.item_id, item_name: e.target.value,
                         item_desc:Data.item_desc, item_quantity:Data.item_quantity})}} className="form-control" id="name" required/>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="quantity" className="form-label">Item Quantity</label>
                        <input type="number" defaultValue={Detail.item_quantity} 
                        onChange={(e) => {setData({item_id: Data.item_id, item_name:Data.item_name,
                         item_desc:Data.item_desc, item_quantity: e.target.value})}} className="form-control" id="quantity" required/>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="desc" className="form-label">Item Description</label>
                        <input type="text" defaultValue={Detail.item_desc} 
                        onChange={(e) => {setData({item_id: Data.item_id, item_name:Data.item_name,
                         item_desc:e.target.value, item_quantity: e.target.value})}} className="form-control" id="desc" required/>
                    </div>
                    <div className="d-grid gap-2 d-md-block">
                        <button className="btn btn-primary" type="submit" onClick={placeOrder} style={{marginRight:"5px"}}>Submit</button>
                        <Link to="/" className="btn btn-danger">Cancel</Link>
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}
