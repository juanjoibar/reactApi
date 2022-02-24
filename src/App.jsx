import { Outlet } from 'react-router-dom';
import NavBar from './Components/NavBar'

const App = () => {
    return (
        <div>
            <NavBar/>
            <div className="container">
                <Outlet/>          
                  </div>
        </div>
    );
};

export default App;