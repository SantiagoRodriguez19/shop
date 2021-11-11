
import { getThemeProps } from "@mui/system";
import {useState} from "react";

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
   const mensaje = `Agregaste ${count} producto`;
    if (count === 1)
        alert(mensaje)
        else{
        alert(`${mensaje}s`)
        }
    }



    return (
    <>
        <h1> Soy el contador </h1>
        
        <div>
            <button onClick={sumar}> + </button>
            <h2> {count} </h2>
            <button onClick={restar}> - </button>
        </div>
            <button onClick={onAdd}> enviar al carrito </button>
    </>
    );
    } 