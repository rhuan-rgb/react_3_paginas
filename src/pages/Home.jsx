import {Link} from "react-router-dom"

function Home(){
    return (
        <div style={{display:'flex', flexDirection:"column", alignItems:"center", justifyContent:'space-between'}}>
            <h1 style={{backgroundColor:'#19b6e8', borderRadius:"5px"}}>Bem-vindo ao sistema de eventos!</h1>
            <Link to="eventos" style={{fontSize:'20px', marginBottom:"10px"}}>Eventos</Link>
            <Link to="ingressos" style={{fontSize:'20px', marginBottom:"10px"}}>Ingressos</Link>
            <Link to="organizadores" style={{fontSize:'20px', marginBottom:"10px"}}>Organizadores</Link>
        </div>
    )
}

export default Home