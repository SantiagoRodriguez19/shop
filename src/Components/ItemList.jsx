import Item from "./Item"
import { Grid } from "@mui/material"

const ItemList = ({productos}) => {
    

    return(
       <div>

           <Grid 
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                margin="25px">

           {productos.map(producto=>{
               return(
                <Item
                llave = {producto.id}
                marca = {producto.marca}
                modelo = {producto.modelo}
                precio = {producto.precio}
                imagen = {producto.imagen}
                />
               )


           })}

           </Grid>

       </div>
    )
}


export default ItemList