//import * as React from 'react';
//import { SettingsApplicationsTwoTone } from "@mui/icons-material";
import { useState, useEffect} from "react";
import ItemCount from "./ItemCount";
import promesaManual from "../Services/promesaManual";
import ItemList from "./ItemList";
import ItemDetailContainer from "./ItemDetailContainer";






export default function ItemListContainer({greeting}) {
    //console.log("soy props de ilc", greeting);

    const [productos, setProductos] = useState([[]])
    console.log("los productos del hook", productos)
    
    useEffect (() =>{
        promesaManual
        .then(res =>{
            setProductos(res)
        })
        .catch(err => alert("tenemos una falla", err))
    
    }, [])

    return (
    <>
             <h1> {greeting} </h1>
             <ItemCount  stock={5} initial={1}/>
             <ItemList productos={productos} />
             <ItemDetailContainer />
             
    </>
    );

}