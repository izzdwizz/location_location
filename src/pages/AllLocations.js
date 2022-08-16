import { useState, useEffect } from 'react';
import LocationList from '../components/meetups/meetuplist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaSpinner } from 'react-icons/fa';

  

// const DUMMY_DATA = [
//     {
//       id: 'm1',
//       title: 'This is a first meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//     {
//       id: 'm2',
//       title: 'This is a second meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'locationtreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//   ];

function All(){

  const [isLoading, setIsLoading] = useState(true);

  const [loadedLocations, setLoadedLocations] = useState([]);

  useEffect(()=>{

    setIsLoading(true);

    fetch('https://react-started-ba07e-default-rtdb.firebaseio.com/locations.json',
  
  
    )
    .then((response) => {
       return response.json();
    })
    .then((data) => {

      const locations = [];

       for (const key in data){

        const location = {
          id: key,
          ...data[key]
        };

         locations.push(location);
       }
      setIsLoading(false);
      setLoadedLocations(locations);


    });

  }, []);


  

    if (isLoading){

      return (  
        <section className='spin'>
        {/* <p>Loading...</p> */}
        <FaSpinner/>
      </section>
      );
    }

    return(

      <section className='sect'>
            <h1 className='exp'>Explore Locations</h1>
            <LocationList locations={loadedLocations}/>
            {/* <LocationList locations={DUMMY_DATA}/>


            <ul>
                {DUMMY_DATA.map((locations)=>{
                    return <li key={locations.id}> {locations.title}</li>
                })}
            </ul> */}

        </section>
    );

}
    export default All;