import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './pages/login_user';
import Registro from './pages/login';
import Busqueda from './pages/busqueda';
import Pago from './pages/pago';
import Dash from './pages/dashboard';
import Inicio from './pages/inicio';
import Buscador from './pages/buscador';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Registro/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/busqueda' element={<Busqueda/>}></Route>
    <Route path='/pago' element={<Pago/>}></Route>
    <Route path='/dash' element={<Dash/>}></Route>
    <Route path='/inicio' element={<Inicio/>}></Route>
    <Route path='/buscador' element={<Buscador/>}></Route>

    </Routes>
        </BrowserRouter>
  )
}

export default App;
