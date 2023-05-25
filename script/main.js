
const nav = document.querySelector('.nav');

let navButton = document.querySelector('#navButton');

const main = document.querySelector('main');


navButton.addEventListener('click', () => {
    nav.classList.toggle('navActive');
});

main.addEventListener('click', () => {
    nav.classList.remove('navActive');
});


let adicionar = document.querySelector('.adicionar')

adicionar.addEventListener('click', () => {

    let produtoIn = document.querySelector('#tdProduto')

    let produtosTr = document.createElement('tr');
    produtosTr.classList.add('produtos')

    let produtoTd = document.createElement('td');
    let excluirTd = document.createElement('td');
    let iconTrash = document.createElement('i');
    iconTrash.classList.add('excluir')
    iconTrash.classList.add('bx')
    iconTrash.classList.add('bxs-trash-alt')

    excluirTd.appendChild(iconTrash);

    produtosTr.appendChild(produtoTd);
    produtosTr.appendChild(excluirTd)

    produtoTd.textContent = produtoIn.value;

    let tabela = document.querySelector('.tabela');

    tabela.appendChild(produtosTr);
    let produtos = document.querySelectorAll('.produtos');

        for(let i = 0 ; i < produtos.length ; i++){
            excluir = produtos[i].querySelector('.excluir');
            excluir.addEventListener('click', () => {
                tabela.removeChild(produtos[i])
    })  
}
})
