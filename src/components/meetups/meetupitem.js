import { useContext } from 'react';

import Card from '../ui/Card';
import classes from './meetupitem.module.css';
import FavoriteContext from '../../store/favorites-context';

function LocationItem(props){

   const FavoritesCtx =  useContext(FavoriteContext);

   const itemIsFavorite = FavoritesCtx.itemIsFavorite(props.id);

    function toggleFavoritesStatusHandler(){


        if(itemIsFavorite){

            FavoritesCtx.removeFavorite(props.id);
        
        } 
          else{

            FavoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description, 
                image: props.image,
                address: props.address,
            });
          }



    }
    return (
        <li className={classes.item}> 
           <Card>
                    <div className={classes.image}>
                        <img src={props.image} alt={props.title}>

                        </img>
                    </div>

                    <div className={classes.content}>
                        <h3>{props.title}</h3>
                        <address>{props.address}</address>
                        <p>{props.description}</p>
                    </div>
                    <div className={classes.actions}>
                        <button onClick={toggleFavoritesStatusHandler}>{itemIsFavorite? 'Remove from favorites':'To favorites'}</button>
                    </div>
        </Card>
        </li>
    );
}

export default LocationItem;
