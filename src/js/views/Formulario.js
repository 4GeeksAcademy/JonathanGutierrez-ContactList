import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




const Formulario = () => {

  const { id } = useParams();

  const [inputs, setInputs] = useState({});

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (id) {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(
        `https://assets.breatheco.de/apis/fake/contact/${id}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("DATOS DEL CONTACTO", data);
          setName(data.full_name);
          setEmail(data.email);
          setPhone(data.phone);
          setAddress(data.address);
          setIsEditing(true);
        })
        .catch((error) => console.log("error", error));
    }
  }, [id]);



  const handleAddContact = () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const method = isEditing ? "PUT" : "POST";
    const url = isEditing
      ? `https://assets.breatheco.de/apis/fake/contact/${id}`
      : "https://assets.breatheco.de/apis/fake/contact/";

    var requestOptions = {
      method: method,
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

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {

        console.log(result);

       



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
        {isEditing ? 'Editar Contacto' : 'Añadir Contacto'}
      </button>
    </form>
  );
};

export default Formulario;
