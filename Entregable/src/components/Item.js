import { useState } from "react"

export default function Item({getInfo, setCantItem}) {
  const [valorDeStock, setValorDeStock] = useState([getInfo.stock]);

const manejadorStock = () => {
  if (valorDeStock> 0){
    setValorDeStock((prevState)=> prevState-1);
    setCantItem((prevState) => prevState +1);
    }
  
  };

   
  return (
    <div className='producto'>
      
      <h3>{getInfo.producto.nombre}</h3>
         <p>{getInfo.producto.descripcion}</p>
       
       <h5>En stock:{" "}{valorDeStock <= 0 ? <span> agotado </span> : valorDeStock}{" "}</h5>
         
     
         <button onClick={() => manejadorStock()}>{valorDeStock > 0 ? "Comprar" : <h6>"Sin stock"</h6>}
      </button>
  
       
      </div>
            )   
        };
