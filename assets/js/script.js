/*
Por tag: getElementByTagName()
Por Id: getElementById()
por nome: getElementByName()
por Classe: getElementByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("input#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
  let txtNome = document.querySelector("#txtNome")
  if (nome.value.length < 3){
    txtNome.innerHTML = 'Nome Inválido'
    nome.style.border = "3px solid red"
    txtNome.style.color = "red"
  }else{
    txtNome.innerHTML = "Nome Válido"
    nome.style.border = "3px solid green"
    txtNome.style.color = "green"
    nomeOk = true
  }
}

function validaEmail(){
  let txtEmail = document.querySelector("#txtEmail")
  if (email.value.indexOf('@') == -1 || email.value.indexOf(".") == -1){
    txtEmail.innerHTML = "E-mail Inválido"
    email.style.border = "3px solid red"
  }else{
    txtEmail.innerHTML = "E-mail Válido"
    email.style.border = "3px solid green"
    emailOk = true
  }
}

function validaAssunto(){
  let txtAssunto = document.querySelector("#txtAssunto")
  if(assunto.value.length >= 100){
    txtAssunto.innerHTML = "Texto muito grande, permitido no máximo 100 caracteres"
    assunto.style.border = "3px solid red"
    assunto.style.display = "block"
  }else{
    txtAssunto.style.display = "none"
    assuntoOk = true
  }
}

function enviar(){
  if (nomeOk == true && emailOk == true && assuntoOk == true){
    alert ("Formulário enviado com sucesso!!")
  }else{
    alert("Preencha o formulário corretamente antes de Enviar...")
  }
}

function mapaZoom(){
  mapa.style.width = "600px"
  mapa.style.height = "500px"
}

function mapaNormal(){
  mapa.style.width = "400px"
  mapa.style.height = "250px"
}