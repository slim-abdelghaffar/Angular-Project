import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../core/Services/common.service';
import { ResidenceService } from '../core/Services/residence.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent implements OnInit {
  listResidences: any[] = [];
  searchTerm: string = ''; // Search term for filtering
  favorites: any[] = [];  // List for favorites

  constructor(
    private commonService: CommonService, 
    private residenceService: ResidenceService,
    private router: Router
  ) {}

 

  // Get the number of residences with the same address
  get addressCount() {
    return this.commonService.getSameValueOf(this.listResidences, 'address', this.searchTerm);
  }

  // Filter residences by address
  get filteredResidences() {
    return this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Show location of a residence
  showLocation(residence: any): void {
    if (residence.address === "inconnu") {
      alert("L’adresse de cette résidence est inconnue !");
    } else {
      alert(`Adresse : ${residence.address}`);
    }
  }

  // Navigate to residence details page
  viewResidenceDetails(id: number): void {
    this.router.navigate([`/residence-details/${id}`]);
  }

  // Delete a residence
  deleteResidence(id: number): void {
    this.residenceService.deleteResidence(id).subscribe(() => {
      this.listResidences = this.listResidences.filter(residence => residence.id !== id);
    });
  }
  ngOnInit(): void {
    this.residenceService.getResidences().subscribe(data => {
      this.listResidences = data;
    });
  }
  // Add residence to favorites
  addToFavorites(residence: any): void {
    this.favorites.push(residence);
    alert(`${residence.name} ajouté aux favoris !`);
  }

  // Get the CSS class for the residence status
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
}
