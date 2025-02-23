import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Residence } from 'src/app/core/models/residence';
import { ResidenceService } from 'src/app/core/Services/residence.service';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
  // Définition de la variable residenceForm de type FormGroup
  residenceForm: FormGroup;

  constructor(private fb: FormBuilder, private residenceService: ResidenceService) {
    // Initialisation du formulaire avec des contrôles
    this.residenceForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      image: ['', Validators.required], // Ajoutez le champ image si nécessaire
      status: ['active', Validators.required], // Par défaut, l'état est "active"
    });
  }

  // Méthode pour ajouter une résidence
  addResidence(): void {
    if (this.residenceForm.valid) {
      const residenceData: Residence = this.residenceForm.value;
      this.residenceService.addResidence(residenceData).subscribe(
        (response) => {
          console.log('Résidence ajoutée avec succès', response);
          // Réinitialisez le formulaire après ajout
          this.residenceForm.reset({
            name: '',
            address: '',
            image: '',
            status: 'active',
          });
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de la résidence', error);
        }
      );
    } else {
      console.error('Le formulaire est invalide');
    }
  }

  // Méthode pour supprimer une résidence et ses appartements
  deleteResidence(residenceId: number): void {
    this.residenceService.deleteResidence(residenceId).subscribe(
      () => {
        console.log('Résidence et ses appartements supprimés avec succès');
        // Logique après la suppression, comme une redirection ou une mise à jour de l'UI
      },
      (error: any) => {
        console.error('Erreur lors de la suppression de la résidence et de ses appartements', error);
        // Gestion des erreurs
      }
    );
  }
}
