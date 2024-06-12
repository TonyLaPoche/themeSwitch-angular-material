import {Component, inject} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {Theme, ThemesService} from "../../services/themes/switch-themes.service";
import {AsyncPipe} from "@angular/common";
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  themeService: ThemesService = inject(ThemesService);
  toggleTheme(theme: Theme) {
    this.themeService.switchTheme(theme === 'light' ? 'dark' : 'light');
  }
}
