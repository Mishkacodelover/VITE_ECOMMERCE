import linkedin from '../../assets/iconos/media-icon blanco/linkedin.png'
import facebook from '../../assets/iconos/media-icon blanco/facebook.png'
import youtube from '../../assets/iconos/media-icon blanco/youtube.png'
import instagram from '../../assets/iconos/media-icon blanco/insta.png'


import './redes_sociales.css'

export default function Redes_sociales({text}){
    return(
        <div className="redessociales">
        <p>{text}</p>
        <a href="https://www.linkedin.com" target="_blank"
          ><img
            src= {linkedin}
            alt="linkedin"
           
           
        /></a>
        <a href="https://www.facebook.com" target="_blank"
          ><img
            src= {facebook}
            alt="facebook"
         
           
        /></a>
        <a href="https://www.youtube.com" target="_blank"
          ><img
            src={youtube}
            alt="youtube"
         
           
        /></a>
        
        <a href="https://instagram.com" target="_blank"
          ><img
            src={instagram}
            alt="instagram"
          
           
        /></a>
      </div>
    )
   
}