import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/client/Home'
import Register from './pages/client/auth/Register'
import Login from './pages/client/auth/Login'
import Error from './pages/Error'

function App() {
  return (
  <>
  <Router>
  <Routes>
  <Route path="/register" exact element={<Register />} />
  <Route path="/login" exact element={<Login />} />
  <Route path="/Home" exact element={<Home />} />
  <Route path="*" exact element={<Error/>} />
  </Routes>
  </Router>
  </>
  );
}

export default App;
