const imagemVisualizacao = document.getElementById('imagem-visualizacao')
const tituloProduto = document.getElementById('titulo-produto')
const nomeCor = document.getElementById('nome-cor-selecionada')

const verdeCipreste = {
    nome: 'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
}
const azulInverno = {
    nome: 'Azul-inverno',
    pasta: 'imagens-azul-inverno'
}
const meiaNoite = {
    nome: 'Meia-noite',
    pasta: 'imagens-meia-noite'
}
const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
}
const rosaClaro = {
    nome: 'Rosa claro',
    pasta: 'imagens-rosa-claro'
}

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro]
const opcoesTamanho = ['41 mm', '45 mm' ]

let imagemSelecionada = 1
let tamanhoSelecionado = 1
let corSelecionada = 1

function trocarImagem() {
    const idOpcaoSelecionada = document.querySelector('[name = "opcao-imagem"]:checked').id /* buscando elemento com a propriedade name e que também está com a propriedade checked */

    imagemSelecionada = idOpcaoSelecionada.charAt(0) /* pegando o primerio caractere do id, exemplo: 'id="1-cor'. charAt(0) é igual a '1'*/

    imagemVisualizacao.src = './assets/opcoes-cores/imagens-azul-inverno/imagem-' + imagemSelecionada + '.jpeg' /* pega o numero recebido na imagemSelecionada e concatena na link pegando a imagem correspondente*/
}

function trocarTamanho() {
    // mudar o tamanho da caixa
    const idOpcaoSelecionada = document.querySelector('[name = "opcao-tamanho"]:checked').id
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0)
    
    //mudar o texto de acordo com o tamanho que a pessoa escolher
    tituloProduto.innerText = 'Pulseira loop esportiva '+ opcoesCores[corSelecionada].nome + ' para caixa de '+ opcoesTamanho[tamanhoSelecionado]

    //mudar tamanho
    if (opcoesTamanho[tamanhoSelecionado] === '41 mm') {
        imagemVisualizacao.classList.add('caixa-pequena')
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena')
    }
}

function trocarCor() {
    const idOpcaoSelecionada = document.querySelector('[name = "opcao-cor"]:checked').id
    corSelecionada = idOpcaoSelecionada.charAt(0)
    tituloProduto.innerText = 'Pulseira loop esportiva '+ opcoesCores[corSelecionada].nome + ' para caixa de '+ opcoesTamanho[tamanhoSelecionado]
    nomeCor.innerText = 'Cor - ' + opcoesCores[corSelecionada].nome

}