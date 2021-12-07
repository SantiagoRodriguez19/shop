import cronos from "../imagenes/cronos.jpg";
import virtus from "../imagenes/virtus.jpg";
import kwid from "../imagenes/kwid.jpg";
import logan from "../imagenes/logan.jpg";
import ecosport from "../imagenes/ecosport.jpg";
import ka from "../imagenes/ka.jpg";
import gol from "../imagenes/gol.jpg";
import toro from "../imagenes/toro.jpg";
import prisma from "../imagenes/prisma.jpg";



   const productos = [
    {
      "id": 1,
      "Type": "medianos",
      "precio": 1350,
      "marca": "Fiat",
      "modelo": "Cronos",
      "imagen": cronos,
      "Stock": 5,
      "detalle": "Auto familiar, sumamente comodo. Amplio baul  de mas de 500 litros. Interior muy grande para viajar comodo 5 personas",
    },
  
    {

      "id": 2,
      "Type": "medianos",
      "precio": 1500,
      "marca": "Volkswagen",
      "modelo": "Virtus",
      "imagen": virtus,
      "Stock": 5,
      "detalle": "Auto familiar, sumamente comodo. Amplio baul  de mas de 500 litros. Interior muy grande para viajar comodo 5 personas",
    },
    {
      "precio": 990,
      "Type": "chicos",
      "id": 3,
      "marca": "Renault",
      "modelo": "Kwid",
      "imagen": kwid,
      "Stock": 5,
      "detalle": "Auto familiar, sumamente comodo. Amplio baul  de mas de 500 litros. Interior muy grande para viajar comodo 5 personas",
    },
    {
      "precio": 1350,
      "id": 4,
      "marca": "Renault",
      "modelo": "Logan",
      "imagen": logan,
      "Stock": 5,
      "detalle": "Auto familiar, sumamente comodo. Amplio baul  de mas de 500 litros. Interior muy grande para viajar comodo 5 personas",
    },
    {
      "precio": 1500,
      "id": 5,
      "Type": "camionetas",
      "marca": "Ford",
      "modelo": "Ecosport",
      "imagen": ecosport,
      "Stock": 5,
      "detalle": "Auto familiar, sumamente comodo. Amplio baul  de mas de 500 litros. Interior muy grande para viajar comodo 5 personas",
    },
    {
      "precio": 1350,
      "id": 6,
      "Type": "medianos",
      "marca": "Ford",
      "modelo": "Ka",
      "imagen": ka,
      "Stock": 5,
      "detalle": "Auto familiar, sumamente comodo. Amplio baul  de mas de 500 litros. Interior muy grande para viajar comodo 5 personas",
    },
    {
      "precio": 1100,
      "id": 7,
      "Type": "chicos",
      "marca": "Volkswagen",
      "modelo": "Gol",
      "imagen": gol,
      "Stock": 5,
      "detalle": "Auto familiar, sumamente comodo. Amplio baul  de mas de 500 litros. Interior muy grande para viajar comodo 5 personas",
      },
      {
        "precio": 1800,
        "id": 8,
        "Type": "camionetas",
        "marca": "Fiat",
        "modelo": "Toro",
        "imagen": toro,
        "Stock": 5,
        "detalle": "Auto familiar, sumamente comodo. Amplio baul  de mas de 500 litros. Interior muy grande para viajar comodo 5 personas",
      },
      {
        "precio": 1350,
        "id": 9,
        "Type": "medianos",
        "marca": "Chevrolet",
        "modelo": "Prisma",
        "imagen": prisma,
        "Stock": 5,
        "detalle": "Auto familiar, sumamente comodo. Amplio baul  de mas de 500 litros. Interior muy grande para viajar comodo 5 personas",
      }
  ]





const promesaManual = new Promise ((resolve) =>{
    setTimeout(()=>{
        resolve(productos)
        }, 2000)
   
})

export default promesaManual