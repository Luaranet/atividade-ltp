// divListaProduto.insertAdjacentHTML('afterbegin', '');
class MeuErro extends Error{
  constructor(message){
    super(message);
    this.name = "Meu erro";
  }
}

class Produto {
    constructor(nome, dataDeCadastro, descricao, preco, img) {
      this.nome = nome;
      this.dataDeCadastro = dataDeCadastro;
      this.descricao = descricao;
      this.preco = preco;
      this.img = img;
    }

    mostrar() {
      try{
        return this.atributos()
      } catch(error) {
        return error
      }
    }

    atributos() {
      if (this.nome != ""){
        return this.nome + ' - ' + this.dataDeCadastro + ' - ' + this.descricao + ' -R$ ' + this.preco;
      } else {
        throw new MeuErro("Atributos nao podem ser vazios")
      }
    }
}

  class ProdutoDestaque extends Produto {
    constructor(nome, dataDeCadastro, descricao, preco, img) {
      super(nome, dataDeCadastro, descricao, preco, img); 
      this.img = img;
    }

    mostrarDestaque() {
        
      }

      atributos() {
        if(this.nome != "" && this.dataDeCadastro != "" && this.descricao != "" && this.preco != "" && this.img != "") {
          return this.nome + ' - ' + this.dataDeCadastro + ' - ' + this.descricao + ' - R$ ' + this.preco + '<br> <img src="' + this.img + '" class="sla">'; 
        } else {
          throw new MeuErro("Atributos não podem ser vazios")
        }
      }
}





  let produto = new Produto("", "27/05/2017", "complementar a roupa", 35);
  let produto2 = new Produto("Pulseira","17/12/2007","colocar no pulso", 10);
  let produto3 = new Produto("brinco","02/02/2022","complementar a roupa", 60);
  let produtoDestaque = new ProdutoDestaque("Anel de pedra", "28/06/2017", "Embelezar os dedos", 15, "https://img.elo7.com.br/product/600x380/3EB04F2/anel-com-pedra-natural-de-ametista-ametista.jpg");

    const atributos = produto.atributos();
    const atributos2 = produto2.atributos();
    const atributos3 = produto3.atributos();
    const atributos4 = produtoDestaque.atributos();
    console.log(atributos)
    console.log(atributos2)
    console.log(atributos3)
    console.log(atributos4)

  //ListaProduto.innerHTML = produto.mostrar();
  //ListaProduto2.innerHTML = produto2.mostrar();
  //ListaProduto3.innerHTML = produto3.mostrar();
  //ListaProdutoDestaque.innerHTML = produtoDestaque.mostrarDestaque();

