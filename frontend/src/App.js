import './App.css';
import HomePage from './HomePage';
import {Route,Router,Routes} from 'react-router-dom'
import Services from './OurServices';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import ClientPage from './Projects';


function App() {
  return (
   <>

    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/clientelle' element={<ClientPage/>}/>
      

    </Routes>

      
 
   
   </>
  );
}

export default App;
