//import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core';
import useStyles from './Styles';
import '../item.css';


const Item = ({ id, imagen, stock, marca, precio, detalle, type, key, modelo}) => {
    const classes = useStyles();

    return (
        <Grid item key={key} xs={12} sm={6} md={4} lg={3}>
            <Card className='Card'>
                <CardMedia className={classes.media} image={imagen} title={marca} />
                <CardContent>
                    <div className={classes.CardContent}>
                        <Typography variant="h4" gutterBottom>
                            {}
                        </Typography>
                        <Typography variant="h6">
                             {marca}
                        </Typography>
                        <Typography variant="h6">
                             {modelo}
                        </Typography>
                      </div>
                    <Button variant="contained" color="secondary" className='buttonDetail'><Link to={`/item/${id}`}>Detalle</Link></Button>
                </CardContent>
            </Card>
        </Grid>)
}

export default Item
