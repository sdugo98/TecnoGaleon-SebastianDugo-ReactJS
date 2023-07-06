import React from 'react'
import { Link } from 'react-router-dom';
const Item = ({producto}) => {
  return (
    <div className='producto'>
    <img src={producto.img} style={{maxWidth:250}} alt={producto.nombre}/>
        <div>
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
            <p>{producto.caracteristicas}</p>
            <Link to={`/item/${producto.id}`}>Ver más</Link>
        </div>
     </div>   
  )
}

export default Item;