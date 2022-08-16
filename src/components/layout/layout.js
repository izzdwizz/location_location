import classes from './layout.module.css';
import MainNavigation from './MainNavigation';

function Layout(props){

return <div>
     <MainNavigation/>
     <main className={classes.main}>
        {props.children}

     </main>
</div>
}

export default Layout;