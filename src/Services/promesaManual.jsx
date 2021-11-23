import cronos from "../imagenes/cronos.jpg";
import virtus from "../imagenes/virtus.jpg";
import kwid from "../imagenes/kwid.jpg";
import logan from "../imagenes/logan.jpg";
import ecosport from "../imagenes/ecosport.jpg";
import ka from "../imagenes/ka.jpg";
import gol from "../imagenes/gol.jpg";
import toro from "../imagenes/toro.jpg";
import prisma from "../imagenes/prisma.jpg";



   const data = [
    {
      "precio": 1350,
      "id": 1,
      "marca": "Fiat",
      "modelo": "Cronos",
      "imagen": cronos,
    },
    {
      "precio": 1500,
      "id": 2,
      "marca": "Volkswagen",
      "modelo": "Virtus",
      "imagen": virtus
    },
    {
      "precio": 990,
      "id": 3,
      "marca": "Renault",
      "modelo": "Kwid",
      "imagen": kwid
    },
    {
      "precio": 1350,
      "id": 4,
      "marca": "Renault",
      "modelo": "Logan",
      "imagen": logan
    },
    {
      "precio": 1500,
      "id": 5,
      "marca": "Ford",
      "modelo": "Ecosport",
      "imagen": ecosport
    },
    {
      "precio": 1350,
      "id": 6,
      "marca": "Ford",
      "modelo": "Ka",
      "imagen": ka
    },
    {
      "precio": 1100,
      "id": 7,
      "marca": "Volkswagen",
      "modelo": "Gol",
      "imagen": gol
      },
      {
        "precio": 1800,
        "id": 8,
        "marca": "Fiat",
        "modelo": "Toro",
        "imagen": toro
      },
      {
        "precio": 1350,
        "id": 9,
        "marca": "Chevrolet",
        "modelo": "Prisma",
        "imagen": prisma
      }
  ]





const promesaManual = new Promise ((resolve, reject) =>{
    setTimeout(()=>{
        resolve(data)
        reject("fail")
    }, 2000)
   
})

export default promesaManual