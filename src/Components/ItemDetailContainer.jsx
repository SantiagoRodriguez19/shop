import { useEffect, useState } from "react";
import prisma from "../imagenes/prisma.jpg";
import ItemDetail from "./ItemDetail";

const productoEjemplo = {
    "precio": 1350,
    "id": 9,
    "marca": "Chevrolet",
    "modelo": "Prisma",
    "detalle": "Auto familiar, sumamente comodo. Amplio baul  de mas de 500 litros. Interior muy grande para viajar comodo 5 personas",
    "imagen": prisma
  };

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect(()=>{
        setTimeout((setProduct(productoEjemplo)),2000)
        console.log(product)
    }, [])

    return(
        <>
            <h3>ItemDetalContainer</h3>
            <ItemDetail
                product={product}
            />

        </>
    )

  }

  export default  ItemDetailContainer