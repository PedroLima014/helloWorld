import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adagas',
  templateUrl: './adagas.page.html',
  styleUrls: ['./adagas.page.scss'],
})
export class AdagasPage implements OnInit {

  listaProdutos = [
    {
    nome: "Adaga - ",
    descricao: "",
    valor: 0
  },
    {
      nome: "Adaga - ",
      descricao: "",
      valor: 0
    },
    {
      nome:"Adaga - ",
      descricao: "",
      valor: 0
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
