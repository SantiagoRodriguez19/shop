import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Item from './Item'
import useStyles from './Styles'

const ItemList = ({ products }) => {

    const classes = useStyles();

    return (
        <Fragment>
            <main className={classes.main}>
                   <Grid container justifyContent="center" spacing={4}>
                    {products.map((i)=>(
                        <Item
                            key={i.id}
                            id={i.id}
                            marca={i.marca}
                            modelo={i.modelo}
                            precio={i.precio}
                            imagen={i.imagen}
                            stock={i.stock}
                            detalle={i.detalle}
                            type={i.type}
                        />
                    ))}
                    </Grid>
            </main>
        </Fragment>
    )
}

export default ItemList