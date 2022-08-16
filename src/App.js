import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import All from './pages/AllLocations';
import NewLocations from './pages/NewLocations';
import Favorites from './pages/Favorites';
import Layout from './components/layout/layout';
import './index.css';



function App() {
  return <div>
  
    <Layout>
        <Routes>

            <Route path='/' element={<All/>}/>
            <Route path='new-location' element={<NewLocations/>}/>
            <Route path='favorites' element={<Favorites/>} />

        </Routes>
    
    </Layout>

</div>
    
    
  ;
}
 export default App;
