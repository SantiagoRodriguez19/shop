import  React from 'react';
import { useState, useEffect} from "react";
//import promesaManual from "../Services/promesaManual";
import ItemList from "./ItemList";
//import { Link } from "react-router-dom";
import { useParams } from 'react-router';
import { collection, getDocs, getFirestore} from "firebase/firestore"
import app from '../Services/firebase'






const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { type } = useParams();

    useEffect(() => {
        const db = getFirestore(app);
        const itemsCollection = collection(db, "items");
        getDocs(itemsCollection)
            .then((snapshot) => {
                if(type === undefined) {
                setProducts(snapshot.docs.map((doc)=>({id:doc.id,...doc.data()})))
                } else {
                    let data = snapshot.docs.map((doc)=>({id:doc.id,...doc.data()}));
                        setProducts(data.filter((doc)=> doc.type === type));
                }
    })
    }, [type]);


    return (
    
                  
          
             <ItemList products={products} />
            
             
   
    );

}

export default ItemListContainer;