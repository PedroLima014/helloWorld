import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-adagas',
  templateUrl: './adagas.page.html',
  styleUrls: ['./adagas.page.scss'],
})
export class AdagasPage implements OnInit {

  listaProdutos = [
    {
    nome: "Adaga - Cigana",
    descricao: "uma lâmina curta curvada na ponta com um fio",
    valor: 105,
    foto: "https://i.ebayimg.com/thumbs/images/g/bngAAOSwxLdgkSly/s-l640.jpg"
  },
    {
      nome: "Adaga - Moderna",
      descricao: "Adaga do cabo preto e lâmina reta de aço",
      valor: 175,
      foto: "https://cdn.shopify.com/s/files/1/0626/8374/2430/files/Foto_Adaga-04.jpg"
    },
    {
      nome:"Adaga - Real",
      descricao: "base vermelha, detalhes dourados de aço",
      valor: 289,
      foto: "https://cdn.shopify.com/s/files/1/0626/8374/2430/files/Foto_Adaga-02.jpg"
    },
  ];

  qtdeItensCarrinho = 0

    constructor(public bdtemp: BdtempService) { }

    ngOnInit() {
    }

    addProdutoCarrinho(produto: any){
      this.bdtemp.addProdutoCarrinho(produto);
      this.buscarDadosCarrinho();
    }

    buscarDadosCarrinho(){
      this.qtdeItensCarrinho = this.bdtemp.buscar('qtdeItensCarrinho');
    }


}
