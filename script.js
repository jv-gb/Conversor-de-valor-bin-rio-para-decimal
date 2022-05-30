function conversor(input) {
  let resultado = document.getElementById("resultado")
  //o parseInt está convertendo os valores do input para números decimais
  let valorConvertido = parseInt(input.value, 2)
 //O condicional agora retorna uma mensagem caso os caracteres inseridos não sejam 0 ou 1
  if (isNaN(valorConvertido)) {
   return resultado.innerHTML = "Favor inserir apenas 0 e 1"
  }else {
   return resultado.innerHTML = valorConvertido
  }
}

//essa função esconde o texto do input ao clicar nele para digitar
function hide(valor) {
  valor.value = null
}



