import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle , faSignOutAlt ,faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

/*Adding icons to the liberary*/
library.add(faUserCircle , faSignOutAlt ,faCartArrowDown);


function Navbar() {



    return (
       <div>
            <ul className="nav container pt-3 d-flex justify-content-between"> 
              <h3 className="logo" >JAX</h3>
              <span className = "dropDown"><FontAwesomeIcon icon={faCartArrowDown} className = "icon-sz" />
                   <div className = "dropDown-list">
                       <button class="add-btn" ><span>Remove item</span></button>
                      <i class="fas fa-cart-arrow-down"></i>
                   </div>
              </span>
           </ul>
       </div>
    )
}

export default Navbar
