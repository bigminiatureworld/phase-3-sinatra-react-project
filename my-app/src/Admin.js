import React, {useState, useEffect} from "react";

function Admin() {
  const [dataArray, setDataArray] = React.useState([]) 
 
  const fetchOrders = async ()=> {
    try {
      const response = await fetch("http://localhost:9293/admin/orders")
      const data = await response.json()
      console.log(data)
      setDataArray(data)
    } catch (error){
      console.log(error)
    }
  }


 
  useEffect(() => {
    fetchOrders()
  }, [])
  console.log(dataArray)
  const listItems = dataArray.map((order) =>
   <ul>
      <li><strong>Order Number: </strong> {order.id}</li>
      <li><strong>Customer Name:</strong> {order.name}</li>
      <li><strong>Address: </strong>{order.address}</li>
      <li><strong>Email: </strong>{order.email}</li>
      <li><strong>Phone: </strong>{order.phone}</li>
      <li><strong>Meal Ordered (ID): </strong>{order.menu_item_id}</li>
      
   </ul>
  ); 
  return(
      
  <div className="admin">    
  <h1>ORDER HISTORY DATABASE</h1>
    <div className="break">
      {listItems}
    </div>
    <div className="divider"></div>
  </div>
    )
}

export default Admin;