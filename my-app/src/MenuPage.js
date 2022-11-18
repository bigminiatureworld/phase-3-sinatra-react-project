import React, {useState} from "react";
import MenuCard from "./MenuCard";
import Checkout from "./Checkout";
import Admin from "./Admin";

const baseUrl = 'http://localhost:3000/'
const ordersUrl = baseUrl + 'orders'

export default function MenuPage (props) {

    return (
    <div className="MenuPage">    
      {<>
        <div class="navbar">
            <div class="logo">
                <img src="/assets/logo.png"/>
            </div>
            <div class="navlinks">
                <a href="/menu">MENU</a> <a href="/cart">CART/CHECKOUT</a> <a href="/admin">ADMIN INFO</a>
            </div>
            <div class="navright">
                <img src="/assets/chef.png" />   
            </div>
        </div>
          
        <div class="content">    
          <div id="preventOverflow">
            
            <div id="menu">
              
            </div>
          </div>
          <div class="divider"></div>
        </div>
          <MenuCard/>
          <div className="break"></div><br />
          <Checkout/>
          <Admin/>
      </>
          }
        </div>
      );
}