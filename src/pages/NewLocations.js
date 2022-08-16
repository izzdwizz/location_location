import { useNavigate } from 'react-router-dom';

import Card from "../components/ui/Card";

import NewLocationForm from "./NewLocationForm";


function NewLocations(){

    const navigate = useNavigate();

    function addLocationHandler(locationData){

        fetch(
            'https://react-started-ba07e-default-rtdb.firebaseio.com/locations.json' ,
            
            {
                method: 'POST',
                body: JSON.stringify(locationData) ,
                headers: {
                    'Content-Type': 'application/json'
                }

           }
        
           ).then(navigate('/'));

        


    }

    return( 
       <section className="sect">
        <Card>
            <h3 className="cards">Add New Location</h3></Card>
        <NewLocationForm onAddLocation={addLocationHandler}/>

       </section>
    );
}

 export default NewLocations;
