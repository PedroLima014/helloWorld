import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-arcos',
  templateUrl: './arcos.page.html',
  styleUrls: ['./arcos.page.scss'],
})
export class ArcosPage implements OnInit {

  listaProdutos = [
    {nome: "Arco - Mongol",
    descricao: "um arco curvado grande em forma de 'M'",
    valor: 210,
    foto: "https://http2.mlstatic.com/D_NQ_NP_789813-MLB28790155051_112018-O.webp"
  },
    {
      nome: "Arco - ",
      descricao: "",
      valor: 0
    },
    {
      nome:"Arco - ",
      descricao: "",
      valor: 0
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
