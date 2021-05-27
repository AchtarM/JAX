
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
         price : "20$",
         quantity : 1
    },
    {
         id :2,
         titel : "Laptop",
         imageUrl : "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
         price : "400$",
         quantity : 1
    },
    {
        id :3,
        titel : "Camera",
        imageUrl : "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        price : "100$",
        quantity : 1
    },
    {
        id :4,
        titel : "Glasses",
        imageUrl : "https://images.unsplash.com/photo-1556306510-31ca015374b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        price : "35$",
        quantity : 1
    }
];

 

function DashBord() {

    const [SaveId, setSaveId] = useState(0);
    const [ addedItem, setaddedItem] = useState([]);
    const [ newItem, setNewItem] = useState([]);
    const [ wishedItem, setWishedItem] = useState([]);
    const [ newWish, setNewwish] = useState([]);

    useEffect(()=>{
        //Check if is there items in localstorage
        setaddedItem(localStorage.getItem("productInCart")
        ? JSON.parse(localStorage.getItem("productInCart"))
        : []);

        setWishedItem(localStorage.getItem("wishedProducts")
        ? JSON.parse(localStorage.getItem("wishedProducts"))
        : []);
     });
    

    const addToCart = (id) =>{
        let choosenItem =  productsDb.find(item => (item.id === id));
        let checkIndex = addedItem.findIndex(item => (item.id === id));
        if(checkIndex !== -1){
            var data = localStorage.getItem('productInCart');
            if (data != null) {
                  let cart= JSON.parse(data);
                  cart[checkIndex].quantity = parseInt(cart[checkIndex].quantity)+1;
                  localStorage.setItem('productInCart', JSON.stringify(cart));
            } 
        } else{
            setNewItem([...addedItem , choosenItem]);
            localStorage.setItem("productInCart", JSON.stringify(newItem));
        }
       
    }

    const addToWishList = (id) =>{
        let choosenItem =  productsDb.find(item => (item.id === id));
        let checkIndex = wishedItem.findIndex(item => (item.id === id));
        if(checkIndex !== -1){
            return 1;
        } else{
            setNewItem([...wishedItem , choosenItem]);
            localStorage.setItem("productInCart", JSON.stringify(newWish));
        }
       
    }


    console.log("The problem",addedItem);

   

    return (
        <div  className="container">
            <Navbar addedItem = {addedItem}></Navbar>
          <div >
              {
                  productsDb.map( item =>
                      <div key = {item.id} className="product">
                          <div className="product-img" ><img src= {item.imageUrl} alt="headphone"/></div>
                          <div className="product-info">
                             <a   className="item-name" onClick={() => setSaveId(item.id)}>{item.titel}</a>
                             <p className="item-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                             <span className="item-size">price : {item.price}</span>
                         </div>
                         <div className="product-action">
                             <button className="add-btn" onClick = {() => addToCart(item.id)}><span>Add to cart</span></button>
                             <button className ="wish-btn"><FontAwesomeIcon icon={faHeart} className = "singOut-icon" /></button>
                             <i className="fav far fa-heart"></i>
                         </div>
                      </div>
                 )}
                
        </div>
      </div>
    )
}

export default DashBord
