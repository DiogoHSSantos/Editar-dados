
const nav = document.querySelector('.nav');
const navButton = document.querySelector('#navButton');
const main = document.querySelector('main');

navButton.addEventListener('click', () => {
    nav.classList.toggle('navActive');
});
main.addEventListener('click', () => {
    nav.classList.remove('navActive');
});



const botaoAdicionar = document.querySelector('#adicionar');
const input = document.querySelector('#itemLista');
const ulLista = document.querySelector('#listaDeProdutos');
const botaoLimparLista = document.querySelector('#limparLista');

botaoAdicionar.addEventListener('click', ()=>{
    adicionarItem(ulLista,input);

    // let item = document.querySelectorAll('.produto')

    const lista = document.querySelector('#lista');

    deletarItem(lista)
    
    
        
    

    


    input.value = '';
    

    
});
   



// botaoLimparLista.addEventListener('click', ()=>{
//     ulLista.innerHTML = ''
//   });
