import './logo.css'
import logo from '../../assets/perfumes/logo.jpg'
import {Link} from 'react-router-dom'

export default function Logo({className, id, title}) {
  return (
    <div className={className} id={id}>
      <img src= {logo} />
      <Link to="/">
        <h4>{title}</h4>
      </Link>
    </div>
  );
}
