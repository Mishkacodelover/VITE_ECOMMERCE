import './menu.css'
import {Link} from 'react-router-dom'
import {menuOne} from '../constantes/menuOne'
import {menuTwo} from '../constantes/menuTwo'

export default function Menu(){
    return(
        <nav className="menu">
        <div className="menu1">
          <ul>
          {menuOne.map((item,index)=>(
            <li key={index}>
              <Link to= {item.path}>{item.label}</Link>
            </li>
          ))}
          </ul>
        </div>
        <div className="menu2">
          <ul>
          {menuTwo.map((item,index)=>(
            <li key={index}>
              <Link to= {item.path}>{item.label}</Link>
            </li>
          ))}
            
          </ul>
        </div>
      </nav>
    )
}
