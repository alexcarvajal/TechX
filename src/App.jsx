import Login from "./components/Login/Login"
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function App() {
  return (
  <Router>
    <Routes>
      <Route index element={<Login />} ></Route>
      <Route path="/login" element={<Login />} ></Route>
      <Route path= "/register" element={<Register />} ></Route>
    </Routes>
     
    </Router>
  )

}

export default App
