import React from "react";
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Typography from '@mui/material/Typography';
import Swal from "sweetalert2"

const Alert = () =>{

    Swal.fire({
        position: "bottom",
        icon: "success",
        title: "Producto Agregado Al Carro",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        toast: true,
    })

}

export const AddToCart = ({onAdd}) => {
    return(
        <Button onClick={()=>{
            onAdd()
            Alert()
        }}>

        <Typography> Agregar al Carro </Typography>
            <AddShoppingCartIcon />
        
        </Button>
    )
}
