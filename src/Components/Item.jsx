import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


 

const Item = ({marca, modelo, imagen, precio, id }) =>{
    return (
    <Link to={`/item/${id}`}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={imagen}
          alt={modelo}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {marca}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {modelo}
          </Typography>
        </CardContent>
             </Card>
      </Link>
    );
  }

export default Item;