const imagemVisualizacao = document.getElementById('imagem-visualizacao')

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

let imagemSelecionada = 1;

function trocarImagem() {
    const idOpcaoSelecionada = document.querySelector('[name = "opcao-imagem"]:checked').id /* buscando elemento com a propriedade name e que também está com a propriedade checked */

    imagemSelecionada = idOpcaoSelecionada.charAt(0) /* pegando o primerio caractere do id, exemplo: 'id="1-cor'. charAt(0) é igual a '1'*/

    imagemVisualizacao.src = './assets/opcoes-cores/imagens-azul-inverno/imagem-' + imagemSelecionada + '.jpeg' /* pega o numero recebido na imagemSelecionada e concatena na link pegando a imagem correspondente*/


}