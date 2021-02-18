it('sem testes ainda', () => { })

//metódo antigo, usando callback
// const getSomething = callback => {
//     setTimeout(() => {
//         callback(12);
//     }, 1000)
// }

// //metódo antigo, usando callback
// const system = () => {
//     console.log('init');
//     getSomething(some => { 
//         console.log(`Something is ${some}`)
//         console.log('end');
//     })
// }

//metódo novo, usando promise
// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(13);
//         }, 1000)
//     })

// }

// const system = () => {
//     console.log('init');
//     const prom = getSomething()
//     prom.then(some => {
//         console.log(`Something is ${some}`)
//         console.log('end');
//     })
// }

//metódo novo, usando promise com async await
 const getSomething = () => {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             resolve(13);
         }, 1000)
     })
 }
 const system = async () => {
     console.log('init');
     const some = await getSomething()
     console.log(`Something is ${some}`)
     console.log('end')
 }

system();

