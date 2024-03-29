import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css"
import Auth from "./pages/Auth/Auth"
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"

function App() {
  const user = useSelector(state => state.userReducer.userData);

  return (
    <div className="App">
      <div className="blur" style={{ top: '-18%', right: 0 }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      <Routes>
        <Route path='/' element={/*/home will be handled by next route, etc*/
          user ? <Navigate to='home' /> : <Navigate to='auth' />
        } />

        <Route path='/home' element={
          user ? <Home /> : <Navigate to='../auth' />
        } />

        <Route path='/auth' element={
          user ? <Navigate to='../home' /> : <Auth />
        } />

        <Route path='/profile' element={
          user ? <Profile /> : <Navigate to='/auth' />
        } />
      </Routes>
    </div>
  );
}

export default App;
