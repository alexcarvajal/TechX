import Login from "./components/Login/Login"
import Register from "./components/Register/Register";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const isAutenticated = !! localStorage.getItem('authToken')
  return (
  <Router>
    <Routes>
      <Route index element={<Login />} ></Route>
      <Route path="/login" element={<Login />} ></Route>
      <Route path= "/register" element={<Register />} ></Route>
      <Route path= "/dashboard" element={<Dashboard />} ></Route>
    </Routes>
     
    </Router>
  )

}

export default App
