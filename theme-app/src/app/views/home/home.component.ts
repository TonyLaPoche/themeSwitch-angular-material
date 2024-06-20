import {Component, inject} from '@angular/core';
import {MatCardModule,} from "@angular/material/card";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatCheckbox} from "@angular/material/checkbox";
import {ThemePalette} from "@angular/material/core";
import {FormsModule} from "@angular/forms";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {ThemesService} from "../../core/services/themes/switch-themes.service";
import {MatButton} from "@angular/material/button";
import {AsyncPipe} from "@angular/common";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        MatCardModule,
        MatRadioGroup,
        MatRadioButton,
        MatCheckbox,
        FormsModule,
        MatSlideToggle,
        MatButton,
        AsyncPipe
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

    themeService: ThemesService = inject(ThemesService);
    color: ThemePalette = 'primary'
}
