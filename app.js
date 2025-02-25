//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nome = document.getElementById("amigo")
let listaAmigos = []

let listaApresentada = document.getElementById("listaAmigos")



function mostrarLista(){
    listaApresentada.innerHTML = '';

    for(let i = 0; i < listaAmigos.length; i++){
        let newLi = document.createElement('li')
        newLi.innerHTML = listaAmigos[i]
        listaApresentada.appendChild(newLi)
    }
}


function adicionarAmigo(){
    listaAmigos.push(nome.value)
    nome.value = ''

    console.log(listaAmigos)
    console.log(listaAmigos.length)

    mostrarLista()

}

