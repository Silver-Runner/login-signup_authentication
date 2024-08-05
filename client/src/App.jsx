import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup'
import{BrowserRouter ,Routes,Route} from 'react-router-dom'
import Login from './login'
import Home from './Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path="/Home" element={<Home />}></Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
