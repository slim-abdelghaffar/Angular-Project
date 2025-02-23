import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddResidenceComponent } from './Residence/add-residence/add-residence.component';  // Importer votre composant

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './residences/residences.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ApartmentsByResidenceComponent } from './Apartments/apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './Apartments/add-apartment/add-apartment.component';
import { RouterModule } from '@angular/router';
import { ResidenceDetailsComponent } from './Residence/residence-details/residence-details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApartmentsComponent } from './Apartments/apartement/apartement.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,

    ApartmentsByResidenceComponent,
    AddApartmentComponent,
    ResidenceDetailsComponent,
    AddResidenceComponent,
    ApartmentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
