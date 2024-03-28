import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { MenuCategory } from './Pages/MenuCategory';
import { LoginSingup } from './Pages/LoginSingup';
import { Footer } from './Components/Footer/Footer'
import { Product } from './Pages/Product';
import { Staff } from './Pages/Staff'
import { Page } from './Pages/Page';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/customers' element={<MenuCategory/>}/>
        <Route path='/staff_login' element={<LoginSingup/>}/>
        <Route path='/login' element={<LoginSingup/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/> 
        </Route>
        <Route path='/cart' element ={<Page/>}/>
        <Route path='/staff' element={<Staff/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
