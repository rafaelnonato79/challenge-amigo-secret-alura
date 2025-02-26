//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nome = document.getElementById("amigo")
let listaAmigos = []

let listaApresentada = document.getElementById("listaAmigos")

let resultado = document.getElementById('resultado')

document.addEventListener('keypress', function(event){
    if(event.key == 'Enter'){
        adicionarAmigo()
    }
})

function mostrarLista(){
    listaApresentada.innerHTML = '';

    for(let i = 0; i < listaAmigos.length; i++){
        let newLi = document.createElement('li')
        newLi.innerHTML = listaAmigos[i]
        listaApresentada.appendChild(newLi)
    }
}


function adicionarAmigo(){

    if(!nome.value){
      alert('Digite um nome válido')    
    }else{
        listaAmigos.push(nome.value)
        nome.value = ''
    
        console.log(listaAmigos)
        console.log(listaAmigos.length)
    
        mostrarLista()
    }

}

function sortearAmigo(){

    if(listaAmigos.length == 0 ){
        alert('Não existe amigos para sorterar. Por favor, adicionar nomes')
    }else{
        let numeroAleatorio = Math.floor(Math.random()* listaAmigos.length)
        console.log(listaAmigos[numeroAleatorio]) 
        resultado.innerHTML = `<li>${listaAmigos[numeroAleatorio]}</li`
    }
}




