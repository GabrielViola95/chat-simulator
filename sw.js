self.addEventListener("install", e=>{
    console.log("instalando Service Worker")
})

self.addEventListener("activate",()=>{
    console.log("el Service Worker está activo")
})

let nombre1 = prompt("Nombre de chat 1");



// self.addEventListener('fetch',()=>{
//     // console.log("service worker interceptando petición")      

// })

// self.addEventListener("message",e=>{
    
//     console.log(e.data);
//     e.source.postMessage(createChatsw(textos))
// })





