import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core';
import useStyles from './Styles';
import '../item.css';


const Item = ({product}) => {
    const classes = useStyles();

    return (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card className='Card'>
                <CardMedia className={classes.media} image={product.imagen} title={product.marca} />
                <CardContent>
                    <div className={classes.CardContent}>
                        <Typography variant="h4" gutterBottom>
                            {product.modelo}
                        </Typography>
                        <Typography variant="h6">
                            $ {product.precio}
                        </Typography>
                    </div>
                    <Button variant="contained" color="secondary" className='buttonDetail'><Link to={`/item/${product.id}`}>Detalle</Link></Button>
                </CardContent>
            </Card>
        </Grid>)
}

export default Item
