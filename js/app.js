function adicionar(){
    //recuperar valores nome do produto, quantidade e valor.
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade');
    alert(nomeProduto);
    alert(valorProduto);
    alert(quantidade.value);  
    let subtotal = quantidade.value * valorProduto;
    alert(subtotal);

    //calcular o preço, o nosso subtotal;
    //adicionar no carrinho;
    //atualizat o valor total;
}

function limpar(){

}