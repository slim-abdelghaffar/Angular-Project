import { Component, OnInit } from '@angular/core';
import { Apartment } from 'src/app/core/models/apartement';

@Component({
  selector: 'app-apartement',
  templateUrl: './apartement.component.html',
  styleUrls: ['./apartement.component.css']
})
export class ApartementComponent implements OnInit {
  apartments: Apartment[] = [
    {
      apartNum: 101,
      floorNum: 1,
      surface: 75,
      terrace: true,
      surfaceterrace: 20,
      category: '2 chambres',
      ResidenceId: 1
    },
    {
      apartNum: 102,
      floorNum: 1,
      surface: 80,
      terrace: false,
      surfaceterrace: 0,
      category: '3 chambres',
      ResidenceId: 1
    }
  ];

  ngOnInit(): void {
    console.log(this.apartments); // Vérifiez les données dans la console
  }
}
