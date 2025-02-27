import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import './App.css'
import ListaCategorias from './components/categorias/listacategorias/ListaCategorias'
import DeletarCategorias from './components/categorias/deletarcategorias/DeletarCategorias'
import FormsCategorias from './components/categorias/formcategoria/FormsCategorias'

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />}/>
              <Route path="/deletarcategoria/:id" element={<DeletarCategorias />} />
              <Route path="/cadastrarcategoria" element={<FormsCategorias />} />
              <Route path="/editarcategoria/:id" element={<FormsCategorias />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App