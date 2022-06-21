import React from 'react';
import { useState, useReducer } from 'react';


const formReducer = (state, event) => {
	if(event.reset) {
	 return {
	   apple: '',
	   count: 0,
	   name: '',
	   'gift-wrap': false,
	 }
   }
	return {
	  ...state,
	  [event.name]: event.value
	}
  }

export default function Register() {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);


const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);



  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  }

  const handleChange = event => {
   const isCheckbox = event.target.type === 'checkbox';
   setFormData({
     name: event.target.name,
     value: isCheckbox ? event.target.checked : event.target.value,
   })
  }



// Handling the name change
const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};

// Handling the form submission
const handleSubmit1 = (e) => {
	e.preventDefault();
	if (name === '' || email === '' || password === '') {
	setError(true);
	} else {
	setSubmitted(true);
	setError(false);
	}
};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>User {name} successfully registered!!</h1>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Please enter all the fields</h1>
	</div>
	);
};

return (

<div>
<div  style={{border: '1px solid black', width: '98%', height: '2px', background: '#656464', margin: '20px', boxShadow: '1px 1px 7px 5px #888888'}}></div>



	<div className="wrapper" style={{display: 'flex', justifyContent: 'center' }}>
		
		<img src={require('../../media/racecar.jpg')} style={{paddingLeft: '16px', width: '99%', height: '90%', opacity: '.1'}}></img>
		<div style={{position: 'absolute', margin:'45px'}}>
      <h1>Consumer Registration Form</h1>
      {submitting &&
        <div >
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}><strong>{name}</strong>: {value.toString()}</li>
            ))}
          </ul>
        </div>
      }
      <form onSubmit={handleSubmit}>
	  
        <div>
          <label>
            <p>Name</p>
            <input name="name" onChange={handleChange} value={formData.name || ''}/>
          </label>
        </div>
		<div>
          <label>
            <p>City</p>
            <input name="name" onChange={handleChange} value={formData.name || ''}/>
          </label>
        </div>
		<div>
          <label>
            <p>Zip</p>
            <input name="name" onChange={handleChange} value={formData.name || ''}/>
          </label>
        </div>
		<div>
          <label>
            <p>Phone Number</p>
            <input name="name" onChange={handleChange} value={formData.name || ''}/>
          </label>
        </div>
		<div>
          <label>
            <p>Marital Status</p>
            <select name="apple" onChange={handleChange} value={formData.apple || ''}>
                <option value="">--Please choose an option--</option>
                <option value="fuji">Single</option>
                <option value="jonathan">Married</option>
                <option value="honey-crisp">Divorced</option>
            </select>
          </label>
        </div>
		<div>
          <label>
            <p>Grand Children</p>
            <input name="name" onChange={handleChange} value={formData.name || ''}/>
          </label>
        </div>
		<div>
          <label>
            <p>Job</p>
            <input name="name" onChange={handleChange} value={formData.name || ''}/>
          </label>
        </div>
		<div>
          <label>
            <p>Favorite Motorsports  Personality</p>
            <input name="name" onChange={handleChange} value={formData.name || ''}/>
          </label>
        </div>
		<div>
          <label>
            <p>Password</p>
            <input name="name" onChange={handleChange} value={formData.name || ''}/>
          </label>
        </div>
		<div>
          <label>
            <p>Address</p>
            <input name="name" onChange={handleChange} value={formData.name || ''}/>
          </label>
        </div>
		<div>
          <label>
            <p>State</p>
            <input name="name" onChange={handleChange} value={formData.name || ''}/>
          </label>
        </div>
		<div>
          <label>
            <p>Email</p>
            <input name="name" onChange={handleChange} value={formData.name || ''}/>
          </label>
        </div>
		<div>
          <label>
            <p>Date of Birth</p>
            <input name="name" onChange={handleChange} value={formData.name || ''}/>
          </label>
        </div>
		<div>
          <label>
            <p>Children</p>
            <input name="name" onChange={handleChange} value={formData.name || ''}/>
          </label>
        </div>
		<div>
          <label>
            <p>Education</p>
            <input name="name" onChange={handleChange} value={formData.name || ''}/>
          </label>
        </div>
		<div>
          <label>
            <p>Income</p>
            <input name="name" onChange={handleChange} value={formData.name || ''}/>
          </label>
        </div>
		<div>
          <label>
            <p>Races Attended each year</p>
            <input name="name" onChange={handleChange} value={formData.name || ''}/>
          </label>
        </div>
       
        <button type="submit">Submit</button>
      </form>
	  </div>
    </div>
	</div>
);

}
