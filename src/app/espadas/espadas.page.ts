import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
