import React from "react";



const Card = () => {

    const [contacts, setContacts] = useState([]);

    useEffect


    const getAllContacts = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://assets.breatheco.de/apis/fake/contact/agenda/jonathangutierrez-agenda", requestOptions)
            .then(response => response.json())
            .then(data => {
                // Almacenar los resultados en el estado "characters"
                console.log(data);
                setContacts(data);
            })
            .catch(error => console.log('error', error));
    }





    return (
        <div>
            <h1>Jonathan Gutiérrez</h1>

        </div>
    )
}



export default Card;