import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <div className='container'>
        <div className='producto-detalle'>
            <img src={item.img} alt={item.nombre}/>
            <div>
                <h3 className='titulo'>{item.nombre}</h3>
                <p className='caracteristicas'>{item.caracteristicas}</p>
                <p className='tipo'>{item.tipo}</p>
                <p className='precio'>${item.precio}</p>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail