import classes from './meetuplist.module.css';
import LocationItem from './meetupitem';

function LocationList(props){

    return (
    
    <ul className={classes.list}>
        {props.locations.map((location) => <LocationItem key={location.id}
    id={location.id} 
    image={location.image} 
    title={location.item}
    address={location.address}
    description={location.description}
     />
     )}


    </ul>
    
    
   
 );

}

export default LocationList;