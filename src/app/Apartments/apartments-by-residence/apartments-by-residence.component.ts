import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from 'src/app/core/models/apartement';

@Component({
  selector: 'app-apartments-by-residence',
  templateUrl: './apartments-by-residence.component.html',
  styleUrls: ['./apartments-by-residence.component.css']
})
export class ApartmentsByResidenceComponent implements OnInit {
  apartments: Apartment[] = [];  // Liste des appartements
  residenceId: number = 0;  // ID de la résidence

  // Exemple de données statiques pour les appartements
  apartmentsData: Apartment[] = [
    { apartNum: 1, floorNum: 1, surface: 80, terrace: true, surfaceterrace: 10, category: 'T2', ResidenceId: 1 },
    { apartNum: 2, floorNum: 2, surface: 90, terrace: false, surfaceterrace: 0, category: 'T3', ResidenceId: 2 },
    { apartNum: 3, floorNum: 1, surface: 75, terrace: true, surfaceterrace: 15, category: 'T2', ResidenceId: 2 },
    // autres appartements...
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Récupérer l'ID de la résidence depuis l'URL
    this.residenceId = Number(this.route.snapshot.paramMap.get('id'));

    // Charger les appartements correspondant à la résidence
    this.apartments = this.loadApartmentsByResidence(this.residenceId);
  }

  // Filtrer les appartements en fonction de l'ID de la résidence
  loadApartmentsByResidence(residenceId: number): Apartment[] {
    return this.apartmentsData.filter(apartment => apartment.ResidenceId === residenceId);
  }
}
