import './App.css';
import { BrowserRouter,Routes,Route ,Link} from 'react-router-dom';
import Home from "./Component/Home"
import UserListing from './Component/UserListing'
import Adduser from './Component/Adduser'
import Updateuser from './Component/Updateuser'
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className="App">
     < ToastContainer></ToastContainer>
  <BrowserRouter>
  <div className='header'>
    <Link to={'/'} className='link'>Home</Link>
    <Link to={'/user'} className='link'>User</Link>
  </div>
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
