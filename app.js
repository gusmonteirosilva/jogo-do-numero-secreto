let numeros_sorteados = [];
let numero_limite = 10;

function gerar_numero_aleatorio() {
    let numero_escolhido = parseInt(Math.random() * numero_limite + 1);
    let quantidade_elementos = numeros_sorteados.length;

    if (quantidade_elementos == numero_limite) {
        numeros_sorteados = [];
    }

    if (numeros_sorteados.includes(numero_escolhido)) {
        return gerar_numero_aleatorio();
    } else {
        numeros_sorteados.push(numero_escolhido);
        return numero_escolhido;
    }
}

let tentativas = 0;

let numero_secreto = gerar_numero_aleatorio();
console.log(numero_secreto);

function exibir_texto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limpar_campo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciar_jogo() {
    numero_secreto = gerar_numero_aleatorio();
    limpar_campo();
    tentativas = 0;
    mensagem_inicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

function mensagem_inicial() {
    exibir_texto('h1', 'Jogo do número secreto');
    exibir_texto('p', 'Escolha um número entre 1 e 10');
}

mensagem_inicial();

function verificar_chute() {
    tentativas++;
    let chute = document.querySelector('input').value;
    
    console.log(chute == numero_secreto);

    if (chute == numero_secreto) {
        console.log("Você acertou!");
        exibir_texto('h1', 'Acertou!');
        let palavra_tentativa = tentativas > 1 ?'tentativas' : 'tentativa';
        let mensagem = `Você descrobriu o número secreto com ${tentativas} ${palavra_tentativa}`
        exibir_texto('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        console.log("Você errou");
        if (chute > numero_secreto) {
            exibir_texto('p', 'O número secreto é menor');
        }
        else {
            exibir_texto('p', 'O número secreto é maior');
        }
        limpar_campo();
    }
}
