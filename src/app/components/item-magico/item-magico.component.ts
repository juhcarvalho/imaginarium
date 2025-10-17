import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ItemMagico } from '../../models/item-magico.model';
import { TipoItemMagicoEnum } from '../../models/tipo-item-magico.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-magico',
  standalone: true,
  imports: [CardModule, CommonModule],
  templateUrl: './item-magico.component.html',
  styleUrl: './item-magico.component.scss'
})
export class ItemMagicoComponent {
  itensMagicos: ItemMagico[] = [];

  constructor() {
    this.itensMagicos = [
      { 
        id: 1, nome: "Um Anel", tipo: TipoItemMagicoEnum.ANEL, poder: 100, 
        imagem: "https://uploads.jovemnerd.com.br/wp-content/uploads/2018/07/senhor-dos-aneis-serie.jpg", 
        descricao: 'Um anel poderoso criado por Sauron para controlar todos os outros anéis mágicos. Torna seu portador invisível e corrompe sua vontade.'
      },
      { 
        id: 2, nome: "Andúril", tipo: TipoItemMagicoEnum.ESPADA, poder: 85, 
        imagem: "https://i.ebayimg.com/thumbs/images/g/MOIAAeSw8mloxo64/s-l1200.jpg", 
        descricao: 'Espada reforjada a partir dos fragmentos de Narsil. É a arma de Aragorn e símbolo de sua linhagem real.'
      },
      { 
        id: 3, nome: "Palantír", tipo: TipoItemMagicoEnum.ORBRE, poder: 70, 
        imagem: "https://m.media-amazon.com/images/I/71IT5CLEULL._UF350,350_QL80_.jpg", 
        descricao: 'Uma esfera mágica usada para comunicação e visão à distância. Pode revelar verdades, mas também manipular quem a usa.'
      },
      { 
        id: 4, nome: "Luz de Eärendil", tipo: TipoItemMagicoEnum.FRASCO, poder: 50, 
        imagem: "https://www.aceroymagia.com/Images/articulo/lampara-de-earendil/01-Lampara-de-Earendil.jpg", 
        descricao: 'Um frasco que contém a luz de uma estrela sagrada. Brilha intensamente e afasta criaturas das trevas.'
      },
    ]
  }
}
