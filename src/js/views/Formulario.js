import React, { useState } from "react";




const Formulario = () => {


  const [inputs, setInputs] = useState({});

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleAddContact = () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        "full_name": name,
        "email": email,
        "agenda_slug": "jonathangutierrez-agenda",
        "phone": phone,
        "address": address
      }),
      redirect: 'follow'
    };

    fetch("https://assets.breatheco.de/apis/fake/contact/", requestOptions)
      .then(response => response.json())
      .then(result => {

        console.log(result);

        /**  setInputs([...inputs, newContact]);
         setName("");
         setEmail("");
         setPhone("");
         setAddress("");**/



      })
      .catch(error => console.log('error', error));




  }







  return (
    <form onSubmit={(event) => event.preventDefault()
    }>
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

export default Formulario;
