import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.page.html',
  styleUrls: ['./promocoes.page.scss'],
})
export class PromocoesPage implements OnInit {

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
      nome:"Escudo - Sctum",
      descricao: "escudo grande de corpo de formato retangular",
      valor: 330
    },
    {
      nome: "Arco - Mongol",
      descricao: "grande com uma curva semelhante a um 'M' curvado",
      valor: 210
    },
    {
      nome:"Adaga - Cigana",
      descricao:"uma lâmina curta curvada na ponta com um fio",
      valor: 105
    },
  ];

  constructor(public bdtemp: BdtempService) { }

  ngOnInit() {
  }

  addProdutoCarrinho(produto: any){
    this.bdtemp.addProdutoCarrinho(produto);
  }

}
