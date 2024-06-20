let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
console.log(numeroSecreto);

exibirMensagemInicial();
function exibirTextoNaTela(tag,texto){
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate: 1.2});
//responsiveVoice é um comando usado para habilitar a fala da leitura do aplicativo
}

function exibirMensagemInicial(){
exibirTextoNaTela('h1','Jogo Do Numero Secreto');
exibirTextoNaTela('p', 'escolha um numero entre 1 e 10');
}
function vereficarChute() {
    let chute= document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertouu!!!');
        let palavraTentatitva = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas = `isso ai Você Descobriu o Numero Secreto com ${tentativas} ${palavraTentatitva}`;
        exibirTextoNaTela('p',mensagemTentativas);
        // busca um elemento pelo seu ID  e remove seu atributo
        document.getElementById('reiniciar').removeAttribute('disabled');
       } else{
         if (chute < numeroSecreto){
       exibirTextoNaTela('p',' o Numero Secreto é Maior');
       } else {
        exibirTextoNaTela('p',' o Numero Secreto é Menor ');
       }
       limparCampo();
       tentativas++;
      
    }     
 }
   
function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNalista = listaDeNumerosSorteados.length;
if (quantidadeDeElementosNalista == numeroLimite ){
   listaDeNumerosSorteados = [];
}




   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return(gerarNumeroAleatorio());
   }else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return(numeroEscolhido);
   }

}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
 }   
 function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
 }