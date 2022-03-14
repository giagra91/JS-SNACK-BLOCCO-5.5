const zucchine = [
    {
        varietà : `romana`,
        peso : 200,
        lunghezza : 20,
    },
    {
        varietà : `fiorentina`,
        peso : 150,
        lunghezza : 18,
    },
    {
        varietà : `napoletana`,
        peso : 200,
        lunghezza : 19,
    },
    {
        varietà : `tonda`,
        peso : 100,
        lunghezza : 10,
    },
    {
        varietà : `laziale`,
        peso : 120,
        lunghezza : 12,
    },
    {
        varietà : `romana`,
        peso : 250,
        lunghezza : 22,
    },
    {
        varietà : `nera`,
        peso : 210,
        lunghezza : 23,
    },
    {
        varietà : `friulana`,
        peso : 300,
        lunghezza : 20,
    },
    {
        varietà : `emiliana`,
        peso : 180,
        lunghezza : 14,
    },
    {
        varietà : `asiatica`,
        peso : 140,
        lunghezza : 13,
    },
];

let pesoZucchine = 0;
let pesoZucchineMinori = 0;
let pesoZucchineMaggiori = 0;
zucchine.forEach((element) => {
    pesoZucchine += element.peso;
})
console.log(pesoZucchine)


const lunghezzaMaggiore = zucchine.filter((element) => {
    if (element.lunghezza > 15){
        pesoZucchineMaggiori += element.peso;
        return true;
    }
})
console.log(lunghezzaMaggiore)

const lunghezzaMinore = zucchine.filter((element) => {
    if (element.lunghezza < 15){
        pesoZucchineMinori += element.peso;
        return true;
    }
})
console.log(lunghezzaMinore)
console.log(pesoZucchineMaggiori)
console.log(pesoZucchineMinori)

