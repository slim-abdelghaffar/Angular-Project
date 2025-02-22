import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from 'src/app/core/models/residence';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  residence!: Residence; // Utilisation de l'opérateur non-null assertion
  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R1.jpg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpg", status: "En Construction" }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.residence = this.loadResidence(id) || { id: 0, name: '', address: '', image: '', status: '' }; // Valeur par défaut si non trouvé
  }

  loadResidence(id: number): Residence | undefined {
    return this.listResidences.find(res => res.id === id);
  }

  goToUpdateResidence(): void {
    if (this.residence) {
      this.router.navigate(['/add-residence', this.residence.id]);
    }
  }

  goToNextResidence(): void {
    if (!this.residence) return;

    const currentIndex = this.listResidences.findIndex(res => res.id === this.residence.id);
    if (currentIndex !== -1 && currentIndex < this.listResidences.length - 1) {
      const nextResidence = this.listResidences[currentIndex + 1];
      this.router.navigate(['/residence-details', nextResidence.id]);
    } else {
      alert("C'était la dernière résidence !");
    }
  }
}
