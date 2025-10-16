import { Routes } from '@angular/router';
import { ItemMagicoComponent } from './components/item-magico/item-magico.component';
import { PersonagemComponent } from './components/personagem/personagem.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: 'itens-magicos', component: ItemMagicoComponent },
  { path: 'personagem', component: PersonagemComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
