import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



const ItemDetail = ({product, marca, modelo, precio, imagen, detalle}) =>{

    if(!product){

        return(null)
    }

    return(       
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={product.imagen}
                alt={modelo}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.marca}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.modelo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.detalle}
                </Typography>
                <Typography  variant="h5" component="div">
                  Precio diario $ {product.precio}
                </Typography>
              </CardContent>
                   </Card>
          );



       // <>
       // <div>   
       //     <h2>Soy el ItemDetail</h2>
        //    <h3>marca del auto: {product.marca}</h3>


      //  </div>


      //  </>
    

}

export default ItemDetail