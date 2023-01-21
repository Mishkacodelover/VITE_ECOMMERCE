import './opinion.css'

export default function Opinion({ texto, usuario, rating, id }) {
  return (
   
      <div>
      <p>{usuario}</p>
      <p>{id}</p>
      <p>{texto}</p>
      <p>{rating}</p>
    </div>
    
    
  );
}
