import { Component } from '@angular/core';

const items = [
  {
    description: 'Criar Evento',
    icon: '',
    link: '/home' 
  },
  {
    description: 'Início',
    icon: 'fa-solid fa-house',
    link: '/home' 
  },
  {
    description: 'Minhas inscrições',
    icon: 'fa-solid fa-ticket',
    link: '/subscriptions'
  },
  {
    description: 'Meus eventos',
    icon: 'fa-solid fa-square-poll-vertical',
    link: '/my-events'
  },
  {
    description: 'Calendário',
    icon: 'fa-solid fa-calendar',
    link: '/calendar'
  },
  {
    description: 'Configuração',
    icon: 'fa-solid fa-gear',
    link: '/settings'
  },
]

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  readonly items = items;

  trackByFn(i: number, item: any) {
    return item.link;
  }

}
