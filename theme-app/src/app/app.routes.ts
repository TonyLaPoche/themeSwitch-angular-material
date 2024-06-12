import { Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {AboutComponent} from "./views/about/about.component";

export const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    title: "Home - Antoine Terrade"
  },
  {
    path:'about',
    component: AboutComponent,
    title: 'About - Antoine Terrade'
  }
];
