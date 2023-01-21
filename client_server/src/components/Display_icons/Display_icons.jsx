
import {SlSocialLinkedin} from "react-icons/Sl"
import {AiOutlineFacebook} from "react-icons/Ai"
import {RxInstagramLogo} from "react-icons/Rx"
import {SlSocialYoutube} from "react-icons/Sl"
import './display_icons.css'

export default function Display_icons({className}){
    return(
        <>
       <div><SlSocialLinkedin  className={className}/></div> 
       <div><AiOutlineFacebook className={className}/></div> 
       <div> <RxInstagramLogo className={className}/></div>
      <div> <SlSocialYoutube className={className}/></div> 
        </>
        

    )
}