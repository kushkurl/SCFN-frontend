import React from 'react';
import { useState, useReducer } from 'react';
import './register.css';


const formReducer = (state, event) => {
	if(event.reset) {
	 return {
	   name: '',
	   city: '',
	   zip: '',
	   phonenumber: '',
     maritalstatus: '',
     grandchildren: '',
     job: '',
     favpersonality: '',
     password: '',
     address: '',
     state: '',
     email: '',
     dob: '',
     children: '',
     education: '',
     income: '',
     raceattended: ''
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
		
		<img src={require('../../media/racecar.jpg')} style={{paddingLeft: '16px', width: '99%', height: '90%', opacity: '.2'}}></img>
		<div style={{position: 'absolute',  width:'72%'}}>
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
	   <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
	   
        <div>
          <label>
            <p style={{fontSize:'16px', margin: '0px'}}>Name</p>
            <input className='registerInput' name="name" onChange={handleChange} value={formData.name || ''}/>
          </label>
        </div>
		<div>
          <label>
            <p style={{fontSize:'16px', margin: '0px'}}>City</p>
            <input className='registerInput' name="city" onChange={handleChange} value={formData.city || ''}/>
          </label>
        
		</div>
		</div>
		<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
		<div>
          <label>
            <p style={{fontSize:'16px', margin: '0px'}}>Zip</p>
            <input className='registerInput' name="zip" onChange={handleChange} value={formData.zip || ''}/>
          </label>
        </div>
		<div>
          <label>
            <p style={{fontSize:'16px', margin: '0px'}}>Phone Number</p>
            <input className='registerInput' name="phonenumber" onChange={handleChange} value={formData.phonenumber || ''}/>
          </label>
        </div>
		</div>
		<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
		<div>
          <label>
            <p style={{fontSize:'16px', margin: '0px'}}>Marital Status</p>
            <select className='registerInput' name="maritalstatus" onChange={handleChange} value={formData.maritalstatus || ''}>
                <option value="">--Please choose an option--</option>
                <option value="fuji">Single</option>
                <option value="jonathan">Married</option>
                <option value="honey-crisp">Divorced</option>
            </select>
          </label>
        </div>

		

		<div>
          <label>
            <p style={{fontSize:'16px', margin: '0px'}}>Grand Children</p>
            <input className='registerInput' name="grandchildren" onChange={handleChange} value={formData.grandchildren || ''}/>
          </label>
        </div>
		</div>
		<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
		<div>
          <label>
            <p style={{fontSize:'16px', margin: '0px'}}>Job</p>
            <input className='registerInput' name="job" onChange={handleChange} value={formData.job || ''}/>
          </label>
        </div>
		<div>
          <label>
            <p style={{fontSize:'16px', margin: '0px'}}>Favorite Motorsports  Personality</p>
            <input className='registerInput' name="favpersonality" onChange={handleChange} value={formData.favpersonality || ''}/>
          </label>
        </div>

</div>
<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
		<div>
          <label>
            <p style={{fontSize:'16px', margin: '0px'}}>Password</p>
            <input className='registerInput' name="password" onChange={handleChange} value={formData.password || ''}/>
          </label>
        </div>
		<div>
          <label>
            <p style={{fontSize:'16px', margin: '0px'}}>Address</p>
            <input className='registerInput' name="address" onChange={handleChange} value={formData.address || ''}/>
          </label>
        </div>
		</div>
		<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
		<div>
          <label>
            <p style={{fontSize:'16px', margin: '0px'}}>State</p>
            <input className='registerInput' name="state" onChange={handleChange} value={formData.state || ''}/>
          </label>
        </div>
		<div>
          <label>
            <p style={{fontSize:'16px', margin: '0px'}}>Email</p>
            <input className='registerInput' name="email" onChange={handleChange} value={formData.email || ''}/>
          </label>
        </div>
		</div>
		<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
		<div>
          <label>
            <p style={{fontSize:'16px', margin: '0px'}}>Date of Birth</p>
            <input className='registerInput' type='date' name="dob" onChange={handleChange} value={formData.dob || ''}/>
          </label>
        </div>
		<div>
          <label>
            <p style={{fontSize:'16px', margin: '0px'}}>Children</p>
            <input className='registerInput' name="children" onChange={handleChange} value={formData.children || ''}/>
          </label>
        </div>
		</div>
		<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
		<div>
          <label>
            <p style={{fontSize:'16px', margin: '0px'}}>Education</p>
            <input className='registerInput' name="education" onChange={handleChange} value={formData.education || ''}/>
          </label>
        </div>
		<div>
          <label>
            <p style={{fontSize:'16px', margin: '0px'}}>Income</p>
            <input className='registerInput' name="income" onChange={handleChange} value={formData.income || ''}/>
          </label>
        </div>
		</div>
		
		<div>
          <label>
            <p style={{fontSize:'16px', margin: '0px'}}>Races Attended each year</p>
            <input className='registerInput' name="raceattended" onChange={handleChange} value={formData.raceattended || ''}/>
          </label>
        </div>
       
        <button className='registerButton' type="submit">Submit</button>
      </form>
	  </div>
    </div>
	</div>
);

}
