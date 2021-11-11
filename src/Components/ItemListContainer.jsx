//import * as React from 'react';
import ItemCount from "./ItemCount";


export default function ItemListContainer({greeting}) {
    //console.log("soy props de ilc", greeting);
    return (
    <>
             <h1> {greeting} </h1>
             <ItemCount  stock={5} initial={1}/>
    </>
    );

}