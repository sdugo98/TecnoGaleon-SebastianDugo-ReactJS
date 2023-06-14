import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from "react";
import { IconButton } from  '@mui/material';
import Badge from '@mui/material/Badge';

const CartWidget = ({cartStack}) => {
    return(
        <IconButton color="blue" aria-label="Agregar al carrito" size='large'>
            <Badge badgeContent={4} color="error">
        <ShoppingCartIcon htmlColor='#ffff'/>
        </Badge>
      </IconButton>
    )
};


export default CartWidget;