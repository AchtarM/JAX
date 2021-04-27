import React , {useState} from "react";
import {useHistory} from "react-router-dom";


 function LoginUser() {

   const [logInfo, setlogInfo] = useState({
      username: " ",
      password: " "
   });
   
   
   const history = useHistory();


  /*Helps to save data from input in the state "object" */
   function handleChange(e) {
      const value = e.target.value;
      setlogInfo({
        ...logInfo,
        [e.target.name]: value
    });
  }

  /*Send input data to the server & prevents page refresh */
  const submitHandler = e => {
    e.preventDefault();
    let getUser = localStorage.getItem ("username");
    let getPasword = localStorage.getItem ("password");

  
   if(getUser 
        && getUser.trim() === logInfo.username.trim()
        && getPasword
        && getPasword.trim() === logInfo.password) {
          /*Redirecting the page*/
          history.push(`/dashBoard`);
    }
    else {
         /*Redirecting the page*/
         history.push(`/singupUser`);
    }
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
                    <label className= "my-mg">Password</label>
                    <div>
                       <input type = "password" 
                        name= "password" 
                        className="form-control" 
                        onChange = {handleChange}/>
                    </div>
                    <div className="bnt-center">
                        <button  className="btn btn-primary  my-btn">Login</button>
                   </div>
                 </div>
              </form>
            </div>
        </div>
     )
 }
   

   export default LoginUser;

  