import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
//import promesaManual from '../Services/promesaManual';
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore} from "firebase/firestore"
import app from '../Services/firebase';


  const ItemDetailContainer = () => {
    let { id } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        const db = getFirestore(app);
        const itemsCollection = doc(db, "items", id);
         getDoc(itemsCollection).then((snapshot) => {
             setItem({ id: snapshot.id, ...snapshot.data() })
        });
    }, [id]);

    return (

          <ItemDetail item={item}></ItemDetail>
    );
  
  };
  
  export default ItemDetailContainer;