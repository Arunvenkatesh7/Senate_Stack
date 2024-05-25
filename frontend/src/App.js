import './App.css';
import HomePage from './HomePage';
import {Route,Router,Routes} from 'react-router-dom'
import Services from './OurServices';

function App() {
  return (
   <>

    <Routes>

      <Route path='/' element={<HomePage/>}/>
      <Route path='/services' element={<Services/>}/>

    </Routes>

      
 
   
   </>
  );
}

export default App;
