
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



export default function cartWidjet() {
    return (
    <IconButton
    size="large"
    aria-label="show 17 new items"
    color="inherit"
    >
    <Badge badgeContent={1} color="error">
        <ShoppingCartIcon />
    </Badge>
    </IconButton>

    );

}