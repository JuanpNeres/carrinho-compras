function adicionar(){
    //recuperar valores nome do produto, quantidade e valor.
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    //calcular o preço, o nosso subtotal;
    let subtotal = quantidade * valorProduto;

    //adicionar no carrinho;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
        </section>`

    //atualizar o valor total;
}

function limpar(){

}