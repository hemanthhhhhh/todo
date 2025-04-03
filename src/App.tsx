import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/dashboard/Home'
import './index.css'
import Login from './components/Login'

function App() {

  const PrivateRoute = ({ children }: { children}) => {
    const authToken = localStorage.getItem("authToken");
    return authToken ? children : <Navigate to="/login" />;
  };
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
