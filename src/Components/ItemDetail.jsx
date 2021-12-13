import React, { Fragment } from 'react';
import '../itemdetail.css'
import { Card, CardMedia, CardActions, Typography,} from '@material-ui/core';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button } from '@material-ui/core';
import {useCartContext} from "./CartContext"


const ItemDetail = ({item}) => {
//console.log("prueba de item",item)
    const {setCart,addItem} = useCartContext();

    const onAdd = (count) => {
        setCart(count);
        addItem(item, count);
      };

    return (
        <Fragment>
        <Box sx={{
            display: 'flex',
            justifyContent: 'start',
            ml: 6.7,
        }}>
            <Button className="buttonBackProducts"><Link to="/products">Productos</Link></Button>
        </Box>
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                '& > :not(style)': {
                    m: 5,
                    width: 1300,
                    height: 500,
                },
            }}
        >
            <Paper elevation={24} className='Grid' key={item.id}>
            <Card className='cardImg'>
                    <img src={item.imagen} alt="" className='imgDetail' />
                </Card>
                <CardMedia>
                    <Typography variant='h3'>{item.marca}</Typography>
                    
                    <Typography variant='h5'>{item.modelo}</Typography>
                    <Typography variant='h5'>{item.detalle}</Typography>
                    <Typography variant ='h6'>$ {item.precio}</Typography>
                    <CardActions disableSpacing className='cardactions'>
                        <Typography variant="h6" color="textSecondary"><span>stock:{item.Stock}</span></Typography>
                    <ItemCount stock={item.stock} onAdd={onAdd}/>
                
                    </CardActions>
                </CardMedia>
            </Paper>
        </Box>
    </Fragment>

  
    )
}

export default ItemDetail
