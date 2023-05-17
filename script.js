// divListaProduto.insertAdjacentHTML('afterbegin', '');
class Produto {
    constructor(nome, datadecadastro, descricao, preco){
         this.nome = nome;
         this.datadecadastro = cadastro;
         this.descricao = descricao;
         this.preco = preco;
}

Mostrar(){
    return `<div>${this.nome}</div>`;
 return this.nome + this.datadecadastro + this.descricao + this.preco
}

}


class ProdutoDestaque extends produto{
    constructor(nome, datadecadastro, descricao, preco, img){
        super(nome, datadecadastro, descricao, preco);
        this.img = img;
    }

    Mostrar_destaque(){
        return `<center><img src="${this.img}"></center> 
    <center><h2>${this.nome}</h2></center> 
    <center><h5>Descrição:  ${this.descricao}</h5></center> 
    <center><h5>Data de Cadastro:  ${this.datadecadastro}</h5></center> <center><h5>Preço:  ${this.preco}</h5></center>`

    }
}

let Produto = new produto("Colar","27/05/2017","complementar a roupa", 35)
console.log(produto.Mostrar())
 
let ProdutoDestaque = new produtoDestaque("Anel de pedra","28/06/2017","Embelazar as mãos", 15,"https://img.ltwebstatic.com/images3_pi/2021/08/03/1627956390965f0ccbfef1d6b8abc816c5652a68d6_thumbnail_900x.webp")
console.log(ProdutoDestaque.Mostrar_destaque())




