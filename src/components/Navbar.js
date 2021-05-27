import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle , faSignOutAlt ,faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";

/*Adding icons to the liberary*/
library.add(faUserCircle , faSignOutAlt ,faCartArrowDown);


function Navbar(props) {
    let {addedItem} = props
    
    return (
       <div>
            <ul className="nav container pt-3 d-flex justify-content-between"> 
              <h3 className="logo" >JAX</h3>
              <span className = "wish-btn2">
                  <p>wish list</p>
              </span>
              <span className = "dropDown"><FontAwesomeIcon icon={faCartArrowDown} className = "icon-sz" />
                   <div className = "dropDown-list">
                       {addedItem ? addedItem.map((item) => <div key = {item.id}> <h6 className = "itemsIn-title">
                           <span id = "quantity">{item.quantity}x</span>{item.titel}</h6></div> )
                        : <h5 className = "itemsIn-title" >Add items first !</h5>}
                       <button className="add-btn" ><span>Pay</span></button>
                   </div>
              </span>
           </ul>
       </div>
    )
}

export default Navbar
