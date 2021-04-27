import React , {useState} from "react";
import {useHistory} from "react-router-dom";

   
 function SingUpUser() {

   const [userInfo, setUserInfo] = useState({
      username: " ",
      email: " ",
      password: " "
   });
   
   const history = useHistory();

   /*Saving data from input in the state "object" */
   function handleChange(e) {
      const value = e.target.value;
      setUserInfo({
        ...userInfo,
        [e.target.name]: value
    });
  }

   /*Sending input data to the server & prevents page refresh */
   const submitHandler = e => {

        e.preventDefault();
        
        /*Saving data in localstorage */
        localStorage.setItem("username", userInfo.username);
        localStorage.setItem("email" , userInfo.email);
        localStorage.setItem("password" , userInfo.password);
        
        /*Redirecting the page*/
        history.push(`/loginUser`);
   }


     return (
       
       <div className="form-position">
          <div>
             <h1 className="headLine">Kite</h1>
             <form onSubmit = {submitHandler}>
                <div className =  "inputs">
                   <label>Username</label>
                   <div>
                      <input type = "text" 
                       name= "username"  
                       className=" form-control" 
                       onChange = {handleChange} />
                   </div>
                   <label>Email</label>
                   <div>
                      <input type = "email" 
                       name= "email"  
                       className=" form-control" 
                       onChange = {handleChange} />
                   </div>
                   <label className= "my-mg">Password</label>
                   <div>
                      <input type = "password" 
                       name= "password" 
                       className="form-control" 
                       onChange = {handleChange}/>
                   </div>
                   <div className="bnt-center">
                       <button  className="btn btn-primary  my-btn">Sing up</button>
                  </div>
                </div>
             </form>
           </div>
       </div>
    )
 }
   

   export default SingUpUser;

  