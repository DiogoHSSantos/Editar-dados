

function deletarItem(lista){
    let itemLista = lista.querySelectorAll('.produto');

    for(let i = 0 ; i< itemLista.length ; i++){
        let iconeTrash = itemLista[i].querySelector('.botaoExcluir');
        iconeTrash.addEventListener('click', ()=>{
            itemLista[i].remove()
        });
    };
}