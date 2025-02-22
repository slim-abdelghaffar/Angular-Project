import { Component, OnInit } from '@angular/core';
import { Residence } from 'src/app/core/models/residence';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R1.jpg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpg", status: "En Construction" }
  ];
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
  
  constructor() {}

  ngOnInit(): void {}
}
