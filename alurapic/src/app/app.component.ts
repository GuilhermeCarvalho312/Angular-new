import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AluraPic';

  urlImage1: string =
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg';
  urlImage2: string =
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/atom/atom-original.svg';
}
