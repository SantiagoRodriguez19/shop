import Item from "./Item"
import { Grid } from "@mui/material"

const ItemList = ({productos}) => {
    console.log("item list productos", productos);

    return(
       <div>

           <Grid 
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                margin="25px">

           {productos.map((producto)=>{
               return(
                <Item
                    detalle={producto.detalle}
                    id = {producto.id}
                    marca = {producto.marca}
                    modelo = {producto.modelo}
                    precio = {producto.precio}
                    imagen = {producto.imagen}
                />
               );
           })}

           </Grid>

       </div>
    );
};


export default ItemList