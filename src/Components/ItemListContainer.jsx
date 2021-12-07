import  React from 'react';
import { useState, useEffect} from "react";
import promesaManual from "../Services/promesaManual";
import ItemList from "./ItemList";
//import { Link } from "react-router-dom";
import { useParams } from 'react-router';






export default function ItemListContainer() {
    const { id } =useParams();
    const [products, SetProducts] = useState([])
        
    useEffect  (() =>{
        promesaManual
        .then (res =>{
                (id === undefined) ? SetProducts(res) : SetProducts (res.filter((prod) => prod.Type == id.toLowerCase()));
        })
        .catch(err => alert("tenemos una falla", err))
    
    }, [id])

    return (
    <>
             
             
          
             <ItemList products={products} />
            
             
    </>
    );

}