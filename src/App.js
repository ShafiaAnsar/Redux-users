import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./Component/Home"
import UserListing from './Component/UserListing'
import Adduser from './Component/Adduser'
import Updateuser from './Component/Updateuser'

function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}  />
    <Route path='/user' element={<UserListing/>}  />
    <Route path='/user/add' element={<Adduser/>}  />
    <Route path='/user/edit/:code' element={<Updateuser/>}  />

  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
