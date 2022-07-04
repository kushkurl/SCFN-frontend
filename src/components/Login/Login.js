import React, { useState,useReducer } from 'react';

import {AmplifyEmailField, AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react'
import {CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from '../../UserPool';

const formReducer = (state, event) => {
	if(event.reset) {
	 return {
	   name: '',
	   password:'',
	 }
   }
	return {
	  ...state,
	  [event.name]: event.value
	}
  }
function Login() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [loading, setLoading] = useState(false);
 
  const [error, setError] = useState(null);
  const handleSubmit = (event)=>{
      event.preventDefault();
      const {username,password} = formData
      console.log(username,password)
      const user = new CognitoUser({
        Username:username,
        Pool:UserPool,
      })
      const authDetails = new AuthenticationDetails({
        Username:username,
        Password:password,
      
    
        
        
      })
      user.authenticateUser(authDetails,{
        onSuccess:(data)=>{
          console.log("onSuccess",data);
        },
        onFailure:(err)=>{
          console.error("onFailure: ",err)
        },
        newPasswordRequired:(data)=>{
          console.log("newPasswordRequired: ",data)
        },
      })
  }
  const handleChange = event => {
    
    setFormData({
      name: event.target.name,
      value:  event.target.value,
    })
   }
  return (

 
  //   <div> 
  //     Login<br /><br />
  //     <div>
  //       Username<br />
  //       <input type="text" onChange={setUserName} autoComplete="new-password" />
  //     </div>
  //     <div style={{ marginTop: 10 }}>
  //       Password<br />
  //       <input type="password"  onChange={setPassword} autoComplete="new-password" />
  //     </div>
  //     {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
  //     <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={onSubmit} disabled={loading} /><br />
  // </div> 
 
  <form onSubmit={handleSubmit}>
  <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
  
     <div>
       <label>
         <p style={{fontSize:'16px', margin: '0px'}}>username</p>
         <input className='registerInput' name="username" onChange={handleChange} value={formData.username || ''}/>
       </label>
     </div>
     <div>
       <label>
         <p style={{fontSize:'16px', margin: '0px'}}>password</p>
         <input className='registerInput' name="password" onChange={handleChange} value={formData.password || ''}/>
       </label>
       <button className='registerButton' type="submit">Submit</button>
     </div>
 </div>
   </form>
  );
 
}

{/* const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
} */}


export default Login;