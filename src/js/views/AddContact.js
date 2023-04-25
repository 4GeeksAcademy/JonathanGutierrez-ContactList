import React, { useState } from "react";




const AddContact = () => {


  const [inputs, setInputs] = useState([]);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
      
      // aquí puedes enviar los datos al servidor o hacer lo que necesites con ellos
    }

    const handleAddContact = () => {

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
  
      let newContact = inputs.concat({
        "full_name": name,
        "email": email,
        "phone": phone,
        "address": address 
      })
  
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(newContact),
        redirect: 'follow'
      };
  
      fetch("https://assets.breatheco.de/apis/fake/contact/agenda/jonathangutierrez-agenda", requestOptions)
        .then(response => response.json())
        .then(result => {
        getAllContacts();
        setInputs([...inputs, newContact]);
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        
          
          
        })
        .catch(error => console.log('error', error));
  
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-6">
            <label htmlFor="nameInput" className="form-label">
              <h4>Name</h4>
            </label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              placeholder="Please input your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-6">
            <label htmlFor="emailInput" className="form-label">
              <h4>Email</h4>
            </label>
            <input
              type="text"
              className="form-control"
              id="emailInput"
              placeholder="Please input your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-6">
            <label htmlFor="phoneInput" className="form-label">
              <h4>Phone</h4>
            </label>
            <input
              type="text"
              className="form-control"
              id="phoneInput"
              placeholder="Please input your telephone number"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-6">
            <label htmlFor="addressInput" className="form-label">
              <h4>Address</h4>
            </label>
            <input
              type="text"
              className="form-control"
              id="addressInput"
              placeholder="Please input your address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
        </div>
        <button type="submit" onClick={handleAddContact} className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  };
  
  export default AddContact;
  