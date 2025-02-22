import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidenceDetailsComponent } from './Residence/residence-details/residence-details.component';
import { AddResidenceComponent } from './Residence/add-residence/add-residence.component';
import { ApartmentsByResidenceComponent } from './Apartments/apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './Apartments/add-apartment/add-apartment.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ApartementComponent } from './Apartments/apartement/apartement.component';
import { ResidencesComponent } from './residences/residences.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Page d'accueil
  { path: 'residences', component: ResidencesComponent },
  { path: 'apartments', component: ApartementComponent },

  { path: 'residence-details/:id', component: ResidenceDetailsComponent } , // Assurez-vous que la route est correcte
  { path: 'residences/add', component: AddResidenceComponent },
  { path: 'apartment', component: ApartementComponent }, // Liste des appartements
  { path: 'residences/update/:id', component: AddResidenceComponent },
  { path: 'add-residence', component: AddResidenceComponent },
  { path: 'add-residence/:id', component: AddResidenceComponent },
  { path: 'apartments-by-residence/:id', component: ApartmentsByResidenceComponent },

  { path: 'add-apartment', component: AddApartmentComponent }, // Ajouter un appartement
  { path: '**', component: NotFoundComponent }, // Page 404
  { path: 'residences/:id', component: ResidenceDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}