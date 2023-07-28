import React, {useState, useContext} from 'react';
import Button from 'react-bootstrap/Button'
import './ItemCount.css'


export const ItemCount = ({count, sub, add})=>{


    return(
        <>
        <div className="itemCount">
            <div className="itemCountControls">
                <Button variant="dark" onClick={sub}>-</Button>
                <p className="pContador"> {count} </p>
                <Button variant="dark" onClick={add}>+</Button>
            </div>

            </div>
        </>

    )
}
