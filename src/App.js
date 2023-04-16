import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Cards from './component/Cards';
import { Route, Routes } from 'react-router-dom';
import AddMovie from './component/AddMovie';
import ProductDetails from './component/Details';
import { createContext, useContext, useState } from 'react';
import Login from './component/Login';
import SignIn from './component/SignIn';

const AppState = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");
  return (
    <AppState.Provider value={{ login, userName, setLogin, setUserName }}>

      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/addmovie" element={<AddMovie />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detail/:id" element={<ProductDetails />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>

      </div>
    </AppState.Provider>
  );
}

export default App;
export { AppState };