function desenharCarrinhoDePerfumes(carrinho, tagHTML) {

    tagHTML.innerHTML = '';//zera

    for (let i = 0; i < carrinho.listaDePerfumes.length; i++) {
        tagHTML.innerHTML += `
        <div class='card'>
            <span>${carrinho.listaDePerfumes[i].foto}</span>
            <span>${carrinho.listaDePerfumes[i].descricao}</span>
            <span>${carrinho.listaDePerfumes[i].valor}</span>
        </div>
        `;  
    }
    
}