// VARIAVEIS

let numerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// FUNCOES

function exibirTexto (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial(){
    exibirTexto('h1', 'Jogo do Número Secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10');
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeLista = numerosSorteados.lenght;
    
    if (quantidadeLista == numeroMaximo) {
        numerosSorteados = [];
    }
    
    if(numerosSorteados.includes(numeroEscolhido)){
        gerarNumeroAleatorio();
    }else{
        numerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo () {
    chute = document.querySelector('input');
    chute.value ='';
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTexto('h1','Acertou');
        let palavraTentativa = tentativas >1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}`;
        exibirTexto('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTexto('p', 'O número secreto é menor');
        }else{
            exibirTexto('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    limparCampo();
    tentativas = 1;
    mensagemInicial();
}



// COMANDOS

mensagemInicial();


