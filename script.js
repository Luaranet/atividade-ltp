// divListaProduto.insertAdjacentHTML('afterbegin', '');
class Produto {
    constructor(nome, dataDeCadastro, descricao, preco, img) {
      this.nome = nome;
      this.dataDeCadastro = dataDeCadastro;
      this.descricao = descricao;
      this.preco = preco;
      this.img = img;
    }

    mostrar() {
      return this.nome + ' - ' + this.dataDeCadastro + ' - ' + this.descricao + ' -R$ ' + this.preco;
    }
  }

  class ProdutoDestaque extends Produto {
    constructor(nome, dataDeCadastro, descricao, preco, img) {
      super(nome, dataDeCadastro, descricao, preco);
      this.img = img;
    }

    mostrarDestaque() {
        return this.nome + ' - ' + this.dataDeCadastro + ' - ' + this.descricao + ' - R$ ' + this.preco + '<br><img src="' + this.img + '" class="sla">';
      }
}


  let produto = new Produto("Colar", "27/05/2017", "complementar a roupa", 35);
  let produto2 = new Produto("Pulseira","17/12/2007","colocar no pulso", 10);
  let produto3 = new Produto("brinco","02/02/2022","complementar a roupa", 60);
  let produtoDestaque = new ProdutoDestaque("Anel de pedra", "28/06/2017", "Embelezar os dedos", 15, "https://img.elo7.com.br/product/600x380/3EB04F2/anel-com-pedra-natural-de-ametista-ametista.jpg");


  ListaProduto.innerHTML = produto.mostrar();
  ListaProduto2.innerHTML = produto2.mostrar();
  ListaProduto3.innerHTML = produto3.mostrar();
  
  ListaProdutoDestaque.innerHTML = produtoDestaque.mostrarDestaque();

