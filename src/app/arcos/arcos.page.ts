import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arcos',
  templateUrl: './arcos.page.html',
  styleUrls: ['./arcos.page.scss'],
})
export class ArcosPage implements OnInit {

  listaProdutos = [
    {nome: "Arco - Mongol",
    descricao: "um arco curvado grande em forma de 'M'",
    valor: 210
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

  constructor() { }

  ngOnInit() {
  }

}
