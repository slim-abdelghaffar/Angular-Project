import { Component } from '@angular/core';
import { Residence } from 'src/app/core/models/residence';
import { Apartment } from '../core/models/apartement';
Apartment
@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R1.jpg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpg", status: "En Construction" }
  ];

  searchTerm: string = ''; // Déclarez searchTerm comme une chaîne de caractères
  favorites: Residence[] = [];

  get filteredResidences(): Residence[] {
    return this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  showLocation(residence: Residence): void {
    if (residence.address === "inconnu") {
      alert("L’adresse de cette résidence est inconnue !");
    } else {
      alert(`Adresse : ${residence.address}`);
    }
  }
  getStatusClass(status: string): string {
    switch (status) {
      case 'Disponible':
        return 'status-disponible';
      case 'En Construction':
        return 'status-en-construction';
      case 'Vendu':
        return 'status-vendu';
      default:
        return '';
    }
  }
  apartments: { [residenceId: number]: Apartment[] } = {
    1: [
      { apartNum: 101, floorNum: 1, surface: 85, terrace: true, surfaceterrace: 15, category: 'T3', ResidenceId: 1 },
      { apartNum: 102, floorNum: 1, surface: 75, terrace: false, surfaceterrace: 0, category: 'T2', ResidenceId: 1 }
    ],
    2: [
      { apartNum: 201, floorNum: 2, surface: 90, terrace: true, surfaceterrace: 20, category: 'T3', ResidenceId: 2 }
    ],
    // Ajoutez d'autres appartements pour d'autres résidences
  };
  
  // Filtrer les résidences par adresse
 

  addToFavorites(residence: Residence): void {
    this.favorites.push(residence);
    alert(`${residence.name} ajouté aux favoris !`);
  }
}
