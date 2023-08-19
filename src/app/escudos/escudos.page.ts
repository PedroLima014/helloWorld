import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escudos',
  templateUrl: './escudos.page.html',
  styleUrls: ['./escudos.page.scss'],
})
export class EscudosPage implements OnInit {
  listaProdutos = [
    {nome: "Escudo - Sctum",
    descricao: "Escudo romano de corpo todo",
    valor: 330
  },
    {
      nome: "Escudo - Broquel",
      descricao: "Escudo pequeno de pulso para combates com mobilidade",
      valor: 240
    },
    {
      nome:"Escudo - Aquecedor",
      descricao: "Escudo medieval em formato triangular",
      valor: 176
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
