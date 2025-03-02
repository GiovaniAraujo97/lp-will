import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { IphoneComponent } from './iphone/iphone.component';
import { CarsComponent } from './cars/cars.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { MentorshipComponent } from './mentorship/mentorship.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'iphone', component: IphoneComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'apartments', component: ApartmentsComponent },
  { path: 'mentorship', component: MentorshipComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }  // Para qualquer rota inválida, redireciona para a home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configura as rotas
  exports: [RouterModule]  // Exporta o RouterModule para ser usado no AppModule
})
export class AppRoutingModule {}
