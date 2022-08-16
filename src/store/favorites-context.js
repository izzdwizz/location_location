import { useState } from "react";
import { createContext } from "react";


const FavoriteContext = createContext({

    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteLocation)=>{},
    removeFavorite: (locationId) => {},
    itemIsFavorite: (locationId) => {}

});

export function FavoritesContextProvider(props){

    const [userFavorites, setUserFavorites] = useState([]);
    
    function addFavoritesHandler(favoriteLocation){

        setUserFavorites((prevUserFavorites)=>{

            return prevUserFavorites.concat(favoriteLocation);
        });



    }

    function removeFavoritesHandler(locationId){

        setUserFavorites((prevUserFavorites)=>{

            return prevUserFavorites.filter(location => location.id !== locationId);
        })


        
    }

    function itemIsFavoritesHandler(locationId){

            return userFavorites.some(location => location.id === locationId);
        
    }

    const context ={

        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoritesHandler,
        removeFavorite: removeFavoritesHandler,
        itemIsFavorite: itemIsFavoritesHandler

    };



return (
    
    <FavoriteContext.Provider value={context}>
        {props.children}
    </FavoriteContext.Provider>
    
    
    )
}

export default FavoriteContext;