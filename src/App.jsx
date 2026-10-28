
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importiamo le pagine dalla cartella pages
import Home from './pages/Home';
import Compressor from './pages/Compress';
import Merge from './pages/Merge';
import Convert from './pages/Convert';
import NavBar from './components/NavBar';

// Creeremo a breve anche queste per completare la suite:
// import MergePdf from './pages/MergePdf';
// import ConvertPdf from './pages/ConvertPdf';

function App() {


  return (
    
     
      
      <BrowserRouter>
        {/* 
          Routes analizza l'URL corrente del browser 
          e mostra SOLO il componente del Route corrispondente 
        */}

        <NavBar></NavBar>

        <Routes>
          {/* URL: http://localhost:5173/ */}
          <Route path="/" element={<Home />} />

          {/* URL: http://localhost:5173/compress */}
          <Route path="/compress" element={<Compressor />} />

          <Route path="/merge" element={<Merge />} />

          <Route path="/convert" element={<Convert />} />

          {/* Rotta di riserva: se l'utente digita un URL inesistente, torna in Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    
  )
}

export default App
