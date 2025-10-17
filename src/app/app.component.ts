import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenubarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'imaginarium';

  items: MenuItem[] = [];
  
  ngOnInit() {
    this.items = [
      {
        label: '',
        icon: 'pi pi-home',
        routerLink: ['/home'],
        styleClass: 'p-mr-3' 

      },
      {
        label: 'Itens Mágicos',
        icon: 'pi pi-star',
        routerLink: ['/itens-magicos'],
        styleClass: 'p-mr-3' 

      },
      {
        label: 'Personagens',
        icon: 'pi pi-user',
        routerLink: ['/personagem']
      }
    ];
  }
}
