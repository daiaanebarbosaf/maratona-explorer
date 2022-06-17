//quer dizer: pesquisa lá dentro do meu elemento o ID resposta e seleciona e coloca nessa variável
const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')

document.addEventListener("keypress", function(e){
  if(e.key === "Enter"){
    //console.log("Aperto o enter")
    const btn = document.querySelector("#buttonPerguntar")
    btn.click();
  }
})

const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

// clicar em fazer pergunta
function fazerPergunta() {

  //pedimos para mostrar o valor que tem dentro do inputPergunta
  //console.log(inputPergunta.value)

  // se inputPergunta for vazio então mostre o alerta
  if(inputPergunta.value == ""){
    alert("Digite sua dúvida")
    return
  }
  //desabilita o potão depois de fazer a pergunta
  buttonPerguntar.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"

  //length nops retorna a quantidade de itens há dentro do array
  const totalRespostas = respostas.length

  //aqui é feito o caculo para gerar um número aleatoriamente. Math.floor transforma o numero em inteiro, enquanto que Math.random faz o sorteio
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  //console.log(respostas[numeroAleatorio])

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;

  //sumir a pergunta e a resposta
  setTimeout(function(){
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute('disabled')
  }, 3000)

}
