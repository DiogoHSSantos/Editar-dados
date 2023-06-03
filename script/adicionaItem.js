function adicionarItem(ulLista,input){
    inItem = input.value;

    const liLista = document.createElement('li');
    liLista.classList.add('produto');
    liLista.id = idAleatorio()

    liLista.textContent = inItem;

    let trash = document.createElement('i');
    trash.classList.add('botaoExcluir');
    trash.classList.add('bx');
    trash.classList.add('bxs-trash-alt');

    let checkBox = document.createElement('input');
    checkBox.type = ('checkbox');
    checkBox.classList.add('checkBox');

    ulLista.appendChild(liLista);
    liLista.appendChild(trash);
    liLista.appendChild(checkBox);

    let classeDeProdutos = document.querySelectorAll('.produto');
    
    item = classeDeProdutos;

    
    
    return item;

    
};

function idAleatorio(){
    return Math.floor(Math.random() * 1000);
}
