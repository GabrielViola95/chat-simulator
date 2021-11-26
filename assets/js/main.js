
// variables

let boxChats = document.getElementById('box__chats');

let textos = document.getElementById('input-text');

let btn = document.getElementById('btn');

//

let boxChats2 = document.getElementById('box__chats2');

let textos2 = document.getElementById('input-text2');

let btn2 = document.getElementById('btn2');


// Prompt

let prompt1 = prompt("Nombre de chat 1");
let prompt2 = prompt("Nombre de chat 1");

let name1 = document.getElementById('name');
let name2 = document.getElementById('name2');

name1.innerHTML = prompt1
name2.innerHTML = prompt2

// WORKER

if(navigator.serviceWorker){
    navigator.serviceWorker.register("sw.js");
}







// cambiar color teléfono
const celular1 = document.getElementById('celular1');
const nameBox = document.querySelector('.name__box');
const nameBox2 = document.querySelector('.name__box2');
const btnColor = document.getElementById('btn-color');
const btnColor2 = document.getElementById('btn-color2');
const btnSend = document.querySelector('.chat__send-message');
const chatSendMessage = document.querySelector(".chat__send-message");
const chatSendMessage2 = document.getElementById('chat__send-message2');


btnColor.addEventListener("click", ()=>{
    nameBox.classList.toggle('nameBox-color');
    btnColor.classList.toggle('nameBox-color');
    boxChats.classList.toggle('border-boxChats');
    btn.classList.toggle('pink-color');
    chatSendMessage.classList.toggle('chatSendMessage');
    textos.classList.toggle('addColorTextos');
})

btnColor2.addEventListener("click", ()=>{
    nameBox2.classList.toggle('nameBox-color');
    btnColor2.classList.toggle('nameBox-color');
    boxChats2.classList.toggle('border-boxChats');
    btn2.classList.toggle('pink-color');
    chatSendMessage2.classList.toggle('chatSendMessage');
    textos2.classList.toggle('addColorTextos');

})

// Events

btn.addEventListener("click", ()=>{
    if (textos.value !== ""){
        boxChats.appendChild(createChat(textos.value));
        boxChats2.appendChild(createChatsw(textos.value));
        textos.value = "";
        textos.focus();
        boxChats.scrollTop = boxChats.scrollHeight - boxChats.clientHeight;
        boxChats2.scrollTop = boxChats2.scrollHeight - boxChats2.clientHeight;
    }
})

btn.addEventListener("keypress", function (e){
    if(e.key === "Enter"){
        boxChats.appendChild(createChat(textos.value));
        boxChats2.appendChild(createChatsw(textos.value));
        textos.value = "";
        textos.focus();
        boxChats.scrollTop = boxChats.scrollHeight - boxChats.clientHeight;
        boxChats2.scrollTop = boxChats2.scrollHeight - boxChats2.clientHeight;
    }
})



// function


const createChat = (texto) =>{
    const container = document.createElement("DIV");
    const textChat = document.createElement("P");

    textChat.textContent = texto;

    container.classList.add("chat");

    container.appendChild(textChat);

    return container;
}
const createChatsw = (texto) =>{
    const container = document.createElement("DIV");
    const textChat = document.createElement("P");

    textChat.textContent = texto;

    container.classList.add("chat__sw");

    container.appendChild(textChat);

    return container;
}

// Events 2

btn2.addEventListener("click", ()=>{
    if (textos2.value !== ""){
        boxChats2.appendChild(createChat2(textos2.value));
        boxChats.appendChild(createChatsw(textos2.value));
        textos2.value = "";
        textos2.focus();
        boxChats.scrollTop = boxChats.scrollHeight - boxChats.clientHeight;
        boxChats2.scrollTop = boxChats2.scrollHeight - boxChats2.clientHeight;
    }
})

// function 2


const createChat2 = (texto) =>{
    const container = document.createElement("DIV");
    const textChat2 = document.createElement("P");

    textChat2.textContent = texto;

    container.classList.add("chat");

    container.appendChild(textChat2);

    return container;
}








