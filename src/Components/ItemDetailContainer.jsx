import { useEffect, useState } from "react";
import promesaManual from "../Services/promesaManual";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    console.log('item', item);
    const { id } = useParams();
    console.log("Id use params", id);
    console.log("Dato id", typeof id)

    useEffect (() => {
        promesaManual.then((res) => {
            setItem(res.find((prod) => prod.id === parseInt(id)));
        });
        //console.log(product)
    }, [id]);
    return <ItemDetail  item={item} />
  };

  export default  ItemDetailContainer