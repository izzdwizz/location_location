import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaLocationArrow } from "react-icons/fa";
// import {FaArrowCircleRight} from "react-icons/fa";
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import FavoriteContext from '../../store/favorites-context';

function MainNavigation(){
    const FavoritesCtx = useContext(FavoriteContext);

    return (
    <header className={classes.header}>
        <div className={classes.logo}>
        <FontAwesomeIcon icon="fa-light fa-location-crosshairs" />
        <FaLocationArrow/>
         </div>
        <nav>
            <ul>
                <li>
                    
                    <Link to='/' >Explore</Link>
                    
                </li>
                <li>
                    
                    <Link to='/new-location' >Add New Locations</Link>
                    
                </li>
                <li>
                    
                    <Link to='/favorites' >Favorites <span className={classes.badge}>{FavoritesCtx.totalFavorites}</span></Link>
                    
                </li>
            </ul>
        </nav>
    </header>
    
    );
}

export default MainNavigation;