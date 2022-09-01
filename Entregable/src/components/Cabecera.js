import React from 'react'
export default function Cabecera({cantTotal}) {
  
  return (
    <header>
        {< div className='Head'>
         <h1> Carrito de compras </h1>
         <p>Cantidad de Productos {" "} <span> {cantTotal} </span> </p>
         </div>
        }
    </header>
  )
}
