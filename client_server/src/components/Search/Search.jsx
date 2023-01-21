import{useState} from 'react'

export default function Search({ placeholder }) {
  const [searchValue,setSearchValue]= useState('');
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (

    <input
      type="search"
      name="buscar"
      placeholder={placeholder}
      id="buscar"
      onChange={onSearchValueChange}
    />
    
    
  );
}
