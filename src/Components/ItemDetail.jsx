import '../itemdetail.css'
import { Fragment } from 'react';
import { Card, CardMedia, CardActions, Typography,} from '@material-ui/core';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button } from '@material-ui/core';




const ItemDetail = (props) => {
  const { marca, modelo, precio, imagen, detalle } = props.item;
  return (
    <Fragment>
    <Box sx={{
        display: 'flex',
        justifyContent: 'start',
        ml: 6.7,
    }}>
        <Button className="buttonBackProducts"><Link to="/products">Toda la flota</Link></Button>
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
        <Paper elevation={24} className='Grid'>
        <Card className='cardImg'>
                <img src={imagen} alt="" className='imgDetail' />
            </Card>
            <CardMedia>
                <Typography variant='h2'>{marca}</Typography>
                <Typography variant='h3'>{modelo}</Typography>
                <Typography variant='h5'>{detalle}</Typography>
                <Typography variant ='h6'>Precio por dia $ {precio}</Typography>
                <CardActions disableSpacing className='cardactions'>
                
                 
                </CardActions>
                <ItemCount  stock={5} initial={1}/>
            </CardMedia>
        </Paper>
        
    </Box>
    </Fragment>
  )}

export default ItemDetail