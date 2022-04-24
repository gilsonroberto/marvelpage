import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Header } from './components/Header'
import { Login } from './pages/Login'

function App() {

  // useEffect(function(){
  //   window.location.replace('/login')
  // },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
