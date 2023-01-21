import './footer_form.css'
import {Link} from 'react-router-dom'

export default function FooterForm({text,errorText,buttonText,}){
    return(
        <form>
              <h5>{text}</h5>
              <div className="input-grp">
                <label for="Email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  id="Email"
                />
                <div className="error">{errorText}</div>
              </div>
              <button className="buttonform">{buttonText}</button>
              <div className="checkbox">
                <label for="checkbox">
                  <input type="checkbox" name="checkbox" id="checkbox" /> Acepto la
                  <Link to="politicas-de-privacidad"><b> política de privacidad</b></Link> de esta web</label>
              </div>
            </form>
    )
}