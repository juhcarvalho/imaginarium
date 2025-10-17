import { RacaEnum } from "./raca.enum";

export interface Personagem {
    id:number,
    nome: string,
    raca: RacaEnum,
    nivel: number,
    corFundo: string,
    imagem: string,
    descricao: string
}
