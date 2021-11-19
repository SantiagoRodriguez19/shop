


   const data = [
    {
      "precio": 1350,
      "id": 1,
      "marca": "Fiat",
      "modelo": "Cronos",
      "imagen": "imagenes/cronos.jpg"
    },
    {
      "precio": 1500,
      "id": 2,
      "marca": "Volkswagen",
      "modelo": "Virtus",
      "imagen": "imagenes/virtus.jpg"
    },
    {
      "precio": 990,
      "id": 3,
      "marca": "Renault",
      "modelo": "Kwid",
      "imagen": "imagenes/kwid.jpg"
    },
    {
      "precio": 1350,
      "id": 4,
      "marca": "Renault",
      "modelo": "Logan",
      "imagen": "imagenes/logan.jpg"
    },
    {
      "precio": 1500,
      "id": 5,
      "marca": "Ford",
      "modelo": "Ecosport",
      "imagen": "imagenes/ecosport.jpg"
    },
    {
      "precio": 1350,
      "id": 6,
      "marca": "Ford",
      "modelo": "Ka",
      "imagen": "imagenes/ka.jpg"
    },
    {
      "precio": 1100,
      "id": 7,
      "marca": "Volkswagen",
      "modelo": "Gol",
      "imagen": "imagenes/gol.jpg"
      },
      {
        "precio": 1800,
        "id": 8,
        "marca": "Fiat",
        "modelo": "Toro",
        "imagen": "imagenes/toro.jpg"
      },
      {
        "precio": 1350,
        "id": 9,
        "marca": "Chevrolet",
        "modelo": "Prisma",
        "imagen": "imagenes/prisma.jpg"
      }
  ]





const promesaManual = new Promise ((resolve, reject) =>{
    setTimeout(()=>{
        resolve(data)
        reject("fail")
    }, 2000)
   
})

export default promesaManual