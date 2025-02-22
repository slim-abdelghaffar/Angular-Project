import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Apartment } from 'src/app/core/models/apartement';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {
  newApartment: Apartment = new Apartment();  // Initialisation de l'objet nouvel appartement

  constructor(private router: Router) {}

  // Fonction pour soumettre le formulaire et ajouter l'appartement
  onSubmit(): void {
    // Vous pouvez ajouter ici la logique pour envoyer l'appartement à un service ou une API
    console.log(this.newApartment);
    // Après soumission, rediriger vers la liste des appartements
    this.router.navigate(['/apartments-list']);
  }
}
