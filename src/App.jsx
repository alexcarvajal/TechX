import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { Monitoreo } from "./components/Monitoreo/Monitoreo";
import { Dashboard } from "./components/Dashboard/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AboutUs from "./components/AboutUs/AboutUs";
import Sidebar from './templates/Sidebar/Sidebar';
import Home from './components/Home/Home';
import Eventos from './components/Eventos/Eventos';
function Layout({ children }) {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="content">{children}</div>
    </div>
  );
}

function App() {
  const isAuthenticated = !!localStorage.getItem('authToken');
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={
          <Layout>
            <Routes>
              <Route path="/dashboard" element={<Dashboard isAuthenticated={isAuthenticated} />} />
              <Route path="/monitoreo" element={<Monitoreo isAuthenticated={isAuthenticated} />} />
              <Route path="/nosotros" element={<AboutUs isAuthenticated={isAuthenticated} />} />
              <Route path="/eventos" element={<Eventos isAuthenticated={isAuthenticated} />} />

              {/* Otras rutas protegidas */}
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
