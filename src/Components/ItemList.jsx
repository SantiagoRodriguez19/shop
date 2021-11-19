import Item from "./Item"
import { Grid } from "@mui/material"

const ItemList = ({productos}) => {
    

    return(
       <div>

           <Grid container spacing={16} justify="center">

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