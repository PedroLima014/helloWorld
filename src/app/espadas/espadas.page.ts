import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-espadas',
  templateUrl: './espadas.page.html',
  styleUrls: ['./espadas.page.scss'],
})
export class EspadasPage implements OnInit {

  listaProdutos = [
    {nome: "Espada - Katana",
    descricao: "97cm - curvada com um unico fio de corte",
    valor: 117
  },
    {
      nome: "Espada - Rapieira",
      descricao: "82cm - lâmina fina como uma agulha para estocadas",
      valor: 122
    },
    {
      nome:"Espada - Claymore",
      descricao: "101,5cm - lâmina grande estilo medieval de dois fios",
      valor: 437
    },
  ];

  qtdeItensCarrinho = 0

  listasProdutos = [
  ];


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
