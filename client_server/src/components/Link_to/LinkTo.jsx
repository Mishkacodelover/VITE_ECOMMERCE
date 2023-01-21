import {Link} from 'react-router-dom'

export default function LinkTo({ to, text }) {
    return <Link className ="link" to={to}>{text}</Link>;
  }
  