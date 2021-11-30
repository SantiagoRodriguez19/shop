

import {useState} from "react";
import Button from '@mui/material/Button';
import { AddToCart } from "./Button"

export default function ItemCount({stock, initial}) {
    
    
    const [count, setCount] = useState(initial)
 
   const sumar = () =>{
       const newValue = count + 1
       if (newValue <= stock){
           setCount(newValue)
       }
   }


   const restar = () =>{
    const newValue = count - 1
    if (newValue >= initial){
        setCount(newValue)
    }
}


const onAdd = () =>{

    setCount(initial);
   //const mensaje = `Agregaste ${count} producto`;
    //if (count === 1)
    //    alert(mensaje)
    //    else{
    //    alert(`${mensaje}s`)
     //   }
    }



    return (
    <>
       
        
        <div>
            <Button variant="contained" onClick={sumar}> + </Button>
            <h2> {count} </h2>
            <Button variant="contained" onClick={restar}> - </Button>
        </div>
        <br />
          
          <AddToCart onAdd={onAdd}></AddToCart>  
    </>
    );
    } 