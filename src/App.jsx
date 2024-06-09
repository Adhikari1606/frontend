import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from '../Pages/Home';
import Blog from '../Pages/Blog';
import Admin from '../Pages/Admin.jsx';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
function App() {

  return (
  <BrowserRouter>
  
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/blogs' element={<Blog/>}/>
    <Route path='/signIn' element={<SignIn/>}/>
    <Route path='/signUp' element={<SignUp/>}/>
    <Route path='/admin' element={<Admin/>}/>
  </Routes>
  </BrowserRouter>
  )
}
export default App
