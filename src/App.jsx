import { BrowserRouter, Routes, Route } from "react-router-dom";
import Eventos from "./pages/Eventos";
import Home from "./pages/Home";
import Ingressos from "./pages/Ingressos";
import Organizadores from "./pages/Organizadores"
import { BorderAll } from "@mui/icons-material";

function App() {
  return (
    <div style={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    }}>
      <BrowserRouter>
        <Routes sx="">
          <Route path="/" element={<Home />}/>
          <Route path="/ingressos" element={<Ingressos />} />
          <Route path="/organizadores" element={<Organizadores />} />
          <Route path="/eventos" element={<Eventos />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
