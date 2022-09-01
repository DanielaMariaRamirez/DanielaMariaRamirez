import React from 'react'
import Data from './data';
import Item from './Item';

export default function Listado({setCantListado}) {
  return (
    <div className='container'>
      {Data.map((props) => 
          (<Item key={props.id} getInfo={props} setCantItem ={setCantListado} ></Item>
        )) 
      }
    </div>
  );
}
