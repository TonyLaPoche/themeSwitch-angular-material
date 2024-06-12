import { Component } from '@angular/core';
import {HeaderComponent} from "./core/layout/header/header.component";
import {MainComponent} from "./core/layout/main/main.component";
import {FooterComponent} from "./core/layout/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MainComponent, FooterComponent],
  template:
  `
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'theme-app';
}
