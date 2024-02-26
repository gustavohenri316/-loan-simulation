import { Routes } from '@angular/router';
import { SuccessPageComponent } from '../pages/success-page/success-page.component';
import { HomeComponent } from '../pages/home/home.component';

export const routes: Routes = [
  {title: 'Success Page', path: 'success', component: SuccessPageComponent},
  {title: 'Simulação de Credito', path: '', component: HomeComponent}
];
