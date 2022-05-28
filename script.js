function conversor(input) {
  let resultado = document.getElementById("resultado")
  //o parseInt está convertendo os valores do input para números decimais
  let valorConvertido = parseInt(input.value, 2)
  resultado.innerHTML = valorConvertido
}

//essa função esconde o texto do input ao clicar nele para digitar
function hide(valor){
valor.value = null
}