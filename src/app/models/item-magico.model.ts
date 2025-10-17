import { TipoItemMagicoEnum } from "./tipo-item-magico.enum";

export interface ItemMagico {
    id:number,
    nome: string,
    tipo: TipoItemMagicoEnum,
    poder: number,
    imagem: string,
    descricao?: string
}