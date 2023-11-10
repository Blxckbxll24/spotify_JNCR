import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login_user';
import Registro from './pages/login';
import Busqueda from './pages/busqueda';
import Pago from './pages/pago';
import Dash from './pages/dashboard';
import Inicio from './pages/inicio';
import Buscador from './pages/buscador';
import { FavoriteSongsProvider } from '../src/context/favoritos.jsx';
import Loggo from './pages/loggo.jsx';

function App() {
  return (
    <BrowserRouter>
      <FavoriteSongsProvider>
        <Routes>
          <Route path='/registro' element={<Registro />} />
          <Route path='/' element={<Login />} />
          <Route path='/busqueda' element={<Busqueda />} />
          <Route path='/pago' element={<Pago />} />
          <Route path='/dash' element={<Dash />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/buscador' element={<Buscador />} />
          <Route path='/logo' element={<Loggo />} />
        </Routes>
      </FavoriteSongsProvider>
    </BrowserRouter>
  );
}

export default App;
