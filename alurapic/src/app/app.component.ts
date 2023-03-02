import { Component } from '@angular/core';
import { Photo } from './photos/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AluraPic';

  photos: Array<Photo> = [
    {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      description: 'Typescript',
    },
    {
      url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/atom/atom-original.svg',
      description: 'Atom',
    },
  ];
}
