import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DatePipe, MatToolbar],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  today = new Date();
}
