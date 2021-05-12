
import React , {useState,useEffect} from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';

/*Adding icons to the liberary*/
library.add(faHeart);



let productsDb = [
    {
         id :1,
         titel : "Headphone",
         imageUrl : "https://images.unsplash.com/photo-1562184242-2b39bde0ab6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", 
         size : "small"
    },
    {
         id :2,
         titel : "Laptop",
         imageUrl : "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
         size : "Large"
    },
    {
        id :3,
        titel : "Camera",
        imageUrl : "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        size : "medieum"
    },
    {
        id :4,
        titel : "Glasses",
        imageUrl : "https://images.unsplash.com/photo-1556306510-31ca015374b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        size : "small"
    }
];





function DashBord() {

    const [SaveId, setSaveId] = useState(0);
   

    return (
        <div  class="container">
            <Navbar/>
          <div >
              {
                  productsDb.map( item =>
                      <div key = {item.id} class="product">
                          <div class="product-img" ><img src= {item.imageUrl} alt="headphone"/></div>
                          <div class="product-info">
                             <a   class="item-name" onclick={() => setSaveId(item.id)}>{item.titel}</a>
                             <p class="item-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                             <span class="item-size">size : {item.size}</span>
                         </div>
                         <div class="product-action">
                             <button class="add-btn" ><span>Add to cart</span></button>
                             <FontAwesomeIcon icon={faHeart} className = "singOut-icon" />
                             <i class="fav far fa-heart"></i>
                         </div>
                      </div>
                 )}
        </div>
      </div>
    )
}

export default DashBord
