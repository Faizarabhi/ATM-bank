import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/client/Home'
import Register from './pages/client/auth/Register'
import Login from './pages/client/auth/Login'
import Error from './pages/Error'
import Account from './pages/client/account/Accounts';
import Transaction from './pages/client/transaction/Transactions';
import Layout from './components/Layout/Layout';
import AuthContextProvider from './context/auth';

function App() {
  return (
    <>
      <Router>
        <AuthContextProvider>
          <Routes>
            <Route path="/register" exact element={<Register />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="*" exact element={<Error />} />


            <Route path="/Home" exact element={<Layout><Home /></Layout>} />
            <Route path="/Account" exact element={<Layout><Account /></Layout>} />
            <Route path="/Transaction" exact element={<Layout><Transaction /></Layout>} />
          </Routes>
        </AuthContextProvider>
      </Router>
    </>
  );
}

export default App;
