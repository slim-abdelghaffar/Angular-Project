import { Component, OnInit } from '@angular/core';
import { ApartmentService } from 'src/app/core/Services/apartements.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartement.component.html',
  styleUrls: ['./apartement.component.css']
})
export class ApartmentsComponent implements OnInit {
  apartments: any[] = [];

  constructor(private apartmentService: ApartmentService) { }

  ngOnInit(): void {
    this.getApartments();
  }

  getApartments(): void {
    this.apartmentService.getApartments().subscribe(
      data => {
        this.apartments = data;
        console.log('Appartements récupérés:', this.apartments);
      },
      error => {
        console.error('Erreur lors de la récupération des appartements:', error);
      }
    );
  }
}
