import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import promesaManual from '../Services/promesaManual';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const[item, setItem] = useState([]);
    const { id } = useParams();
    console.log(id);
    
    useEffect(() => {
      promesaManual
      .then(res => {
        setItem(res.find((prod) => prod.id === parseInt(id)));

       
      })
      .catch(err => console.log('error al obtener el producto', err))
     
    },[id])
  
    return (
     <ItemDetail item = {item}/>
    );};
  export default ItemDetailContainer;