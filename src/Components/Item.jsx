import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


 

const Item = ({marca, modelo, imagen, precio}) =>{
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={imagen}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {marca}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {modelo}
          </Typography>
          <Typography  variant="h5" component="div">
            Precio diario $ {precio}
          </Typography>
        </CardContent>
             </Card>
    );
  }

export default Item;