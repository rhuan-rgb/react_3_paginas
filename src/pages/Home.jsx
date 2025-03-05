import {Link} from "react-router-dom"

function Home(){
    return (
        <div style={{display:'flex', flexDirection:"column", alignItems:"center", justifyContent:'space-between'}}>
            <h1>Bem-vindo ao sistema de eventos!</h1>
            <Link to="eventos">Eventos</Link>
            <Link to="ingressos">Ingressos</Link>
            <Link to="organizadores">Organizadores</Link>
        </div>
    )
}

export default Home