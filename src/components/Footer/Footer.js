import './Footer.css'
import logo from '../../assets/logo.png'

export const Footer = () => {
    return (
        <div className = "footer">
            <img src={logo}/>
            <p> TecnoGaleon. </p>
            <p>Todos los derechos reservados</p>
        </div>
    )
}
