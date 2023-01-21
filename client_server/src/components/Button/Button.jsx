import './button.css'


export default function Button({text,className,id}) {
    return (
       <button className={className} id= {id} >{text}</button>
       
    );
  }

 