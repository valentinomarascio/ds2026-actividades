import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Layout from './components/Layout/Layout'
import PrivateRoute from './components/Auth/PrivateRoute'

import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import LibroDetalle from './pages/LibroDetalle'
import LibroNuevo from './pages/LibroNuevo'
import SinPermiso from './pages/SinPermiso'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/libros/:id" element={<LibroDetalle />} />

        <Route
          path="/libros/nuevo"
          element={
            <PrivateRoute rol="ADMIN">
              <LibroNuevo />
            </PrivateRoute>
          }
        />

        <Route
          path="/sin-permiso"
          element={<SinPermiso />}
        />
      </Routes>
    </Layout>
  )
}

export default App