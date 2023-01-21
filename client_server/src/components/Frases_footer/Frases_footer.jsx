import './frases_footer.css'

export default function Frases_footer({tx_one,tx_two,tx_three,tx_four,tx_five,tx_six,tx_seven,tx_eight}){
    return(
        <div className="frases">
        <ul>
          <li><a href="#">{tx_one}</a></li>
          <li>
            <a href="#">{tx_two}</a>
          </li>

          <li><a href="#">{tx_three}</a></li>

          <li>
            <a href="#">{tx_four}</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">{tx_five}</a>
          </li>
          <li><a href="#">{tx_six}</a></li>
          <li><a href="#">{tx_seven}</a></li>
          <li><a href="#">{tx_eight}</a></li>
        </ul>
      </div>
    )
}