import React, { useEffect, useState } from "react";
import HomerImg from '../../img/foto perfil Homer.jpg';



const Card = () => {

    const [contacts, setContacts] = useState([]);

    useEffect (()=>{
        getAllContacts();
    }, []);


    


    const getAllContacts = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://assets.breatheco.de/apis/fake/contact/agenda/jonathangutierrez-agenda", requestOptions)
            .then(response => response.json())
            .then(data => {
                // Almacenar los resultados en el estado "characters"
                console.log("DATOS DE LA API",data);
                setContacts(data);
            })
            .catch(error => console.log('error', error));
    }





    return (
        <div className="row">
        {/* Mapear todos los personajes en una card */}
        {contacts.map((contact, index) => {
            return (
                <div key={contact.id} className="col-md-3 my-5">
                    
                        <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={HomerImg} alt={contact.full_name} 
                                onError={(e) => {
                                    // Si la imagen no se carga, reemplazarla por una imagen de marcador de posición
                                    e.target.onerror = null;
                                    e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                                }} />
                            <div className="card-body">
                                <p className="card-text"><strong>Nombre: </strong>{contact.full_name}</p>
                                <p className="card-text"><strong>Email: </strong>{contact.email}</p>
                                <p className="card-text"><strong>Phone: </strong>{contact.phone}</p>
                                <p className="card-text"><strong>Adress: </strong>{contact.address}</p>
                            </div>
                        </div>
                    
                </div>
            );
        })}
    </div>
    )
}



export default Card;