import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from 'src/app/core/models/residence';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent implements OnInit {
  residence: Residence = {
    id: 0,  // ID par défaut 0 pour une nouvelle résidence
    name: '',
    address: '',
    image: '',
    status: 'Disponible'
  };
  isUpdateMode: boolean = false;
  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R1.jpg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpg", status: "En Construction" }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.isUpdateMode = true;  // Si l'ID est présent, on est en mode mise à jour
      this.residence = this.loadResidence(Number(id)) || this.residence; // Charge la résidence à mettre à jour
    }
  }

  loadResidence(id: number): Residence | undefined {
    return this.listResidences.find(res => res.id === id);
  }

  saveResidence(): void {
    if (this.isUpdateMode) {
      // Mise à jour de la résidence existante
      const index = this.listResidences.findIndex(res => res.id === this.residence.id);
      if (index !== -1) {
        this.listResidences[index] = { ...this.residence }; // Mise à jour dans le tableau
      }
    } else {
      // Ajout d'une nouvelle résidence
      const newId = this.listResidences.length ? Math.max(...this.listResidences.map(res => res.id)) + 1 : 1;
      this.residence.id = newId;
      this.listResidences.push(this.residence);
    }

    // Redirection après sauvegarde
    this.router.navigate(['/home']);  // Remplacez '/home' par la route où vous souhaitez rediriger après la sauvegarde
  }

  cancel(): void {
    this.router.navigate(['/home']); // Annule et redirige vers la page d'accueil
  }
}
