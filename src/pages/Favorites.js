import { useContext } from "react";
import FavoriteContext from "../store/favorites-context";
import LocationList from "../components/meetups/meetuplist";
import Card from "../components/ui/Card";


function Favorites(){

    const FavoritesCtx = useContext(FavoriteContext);

    let content;

    if (FavoritesCtx.totalFavorites ===0){

       content=<p>No favorite locations yet. Add some!</p> 
    }
     else {
        content= <LocationList locations={FavoritesCtx.favorites}/>
     }

    return (
        

        <section className="sect">
          <Card>  <h1 className="cardz"> My Favorites</h1></Card>
           <LocationList locations={FavoritesCtx.favorites}/>
           {content}
        </section>
    );
}

export default Favorites;