import React, {useState, useEffect} from "react";

export default function Checkout() {

  const [order, setOrder] = useState([])

    function addNewOrder(event, newOrder) {
      event.preventDefault()
      
      const baseUrl = "http://localhost:9293/"
      const ordersUrl = baseUrl + "admin/orders"
    
      let postRequest = {
        method: 'POST',
        headers: {
          'Content-type': "application/json",
          'Accept':'application/json'
        },
        body: JSON.stringify(newOrder)
      }
    
      fetch( ordersUrl, postRequest )
      .then ( r => r.json())
      .then ( newOrderData => setOrder([...order, newOrderData]))
      }
    
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ address, setAddress ] = useState('')
    const [ meal, setMeal ] = useState('')

  
    const newOrder = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      meal: meal,
    }

    return(
    <div className="Checkout"> 
    <div className="divider">
      <div className="cart">
        <h1>YOUR CART</h1>
        <br /><br />
            <form onSubmit={(event) => addNewOrder(event, newOrder)}>
                <label for="name"><strong>Name:</strong></label><br />
                <input type="text" id="name" name="name" onChange={(event) => setName(event.target.value)}/> <br />

                <label for="email"><strong>Email:</strong></label><br />
                <input type="text" id="email" name="email" onChange={(event) => setEmail(event.target.value)} /> <br />

                <label for="address"><strong>Address:</strong></label><br />
                <input type="text" id="address" name="address" onChange={(event) => setAddress(event.target.value)} /> <br />

                <label for="phone"><strong>Phone:</strong></label><br />
                <input type="text" id="name" name="phone" onChange={(event) => setPhone(event.target.value)} /> <br />

                <label for="meal" id="meal" name="meal" ><strong>Meal Selection:</strong></label><br />
                
                <select name="cars" id="cars" onChange={(event) => setMeal(parseFloat(event.target.value))}>
                  <option value="1">Squirtle Stew</option>
                  <option value="2">Charred Charmander</option>
                  <option value="3">Bulbasaur Bulb</option>
                  <option value="4">Chikarita & Chic Pea Salad</option>
                  <option value="5">Dead Pikachu</option>
                  <option value="6">Magikarp Sashimi</option>
                </select>


                
                <div className="break"></div>

                <button className="btn" id="submit">Submit Order</button>
                
            </form>
        </div>
      </div>
      
    </div>
    )
}