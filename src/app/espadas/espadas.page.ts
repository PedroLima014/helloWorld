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
    valor: 117,
    foto: "https://www.espadaskatana.com.br/wp-content/uploads/2017/09/Principal-1-300x300.jpg"
  },
    {
      nome: "Espada - Rapieira",
      descricao: "82cm - lâmina fina como uma agulha para estocadas",
      valor: 122,
      foto: "https://de.technolong.com/f/be16e728b620f39c219d216c014b72b3"
    },
    {
      nome:"Espada - Claymore",
      descricao: "101,5cm - lâmina grande estilo medieval de dois fios",
      valor: 437,
      foto:"https://i.etsystatic.com/10226552/r/il/1bb46c/3975278591/il_fullxfull.3975278591_2m5k.jpg"
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
