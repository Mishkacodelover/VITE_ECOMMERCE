export default function Tarjeta({imagen,description,textH5,textP}){
    return(
        <div>
        <img
          src={imagen}
          alt={description}
          width="40px"
        />
        <h5>{textH5}</h5>
        <p>{textP}</p>
      </div>
    )
}