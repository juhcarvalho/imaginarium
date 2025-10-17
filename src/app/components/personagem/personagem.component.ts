import { Component } from '@angular/core';
import { Personagem } from '../../models/personagem.model';
import { RacaEnum } from '../../models/raca.enum';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personagem',
  standalone: true,
  imports: [CardModule, CommonModule],
  templateUrl: './personagem.component.html',
  styleUrl: './personagem.component.scss'
})
export class PersonagemComponent {
  personagens : Personagem[] = [];

  constructor() {
    this.personagens = [
      { id: 1, nome: 'Gandalf', raca: RacaEnum.MAGO, nivel: 20, corFundo: '#D3D3D3', imagem: 'https://ae-pic-a1.aliexpress-media.com/kf/Sc06278ed35e340e8946e6dc81db43c92M.jpg_960x960q75.jpg_.avif', 
        descricao: 'Um mago poderoso e sábio, conhecido por sua barba longa e chapéu pontudo.' },
      { id: 2, nome: 'Legolas', raca: RacaEnum.ELFO, nivel: 18, corFundo: '#98FB98', 
        descricao: 'Um elfo ágil e habilidoso com arco e flecha, membro da Sociedade do Anel.', imagem: 'https://ae-pic-a1.aliexpress-media.com/kf/Sc2d66b84fb8d433ba0b020b61649c7608.jpg_960x960q75.jpg_.avif' },
      { id: 4, nome: 'Gimli', raca: RacaEnum.ORC, nivel: 17, corFundo: '#ef9e34cf', imagem: 'https://ae-pic-a1.aliexpress-media.com/kf/Scf1a549fbd7d4415a5f777d5bf96de02F.jpg_960x960q75.jpg_.avif',
        descricao: 'Um anão forte e corajoso, conhecido por sua lealdade e habilidade com o machado.'
      },
      { id: 5, nome: 'Sauron', raca: RacaEnum.MAIAR, nivel: 16, corFundo: '#ADD8E6', imagem: 'https://ae-pic-a1.aliexpress-media.com/kf/S1eb4052147c742ac8562ba69388dc13cW.jpg_960x960q75.jpg_.avif',
        descricao: 'O Senhor do Escuro, um ser maligno que busca dominar a Terra-média.'
      }
    ];
  }

}
