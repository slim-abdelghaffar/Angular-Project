import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
  residenceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.residenceForm = this.fb.group({
      id: [''],  // Champ caché
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', Validators.required],
      image: ['', [Validators.required, Validators.pattern('https?://.+')]],
      status: ['Disponible', Validators.required],
      apartments: this.fb.array([])  // Tableau dynamique pour les appartements
    });
  }

  // Getter pour accéder à la liste des appartements
  get apartments(): FormArray {
    return this.residenceForm.get('apartments') as FormArray;
  }

  // Ajouter un appartement
  addApartment() {
    const apartmentForm = this.fb.group({
      apartmentNumber: ['', Validators.required],
      floorNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      surface: ['', Validators.required],
      terrace: ['no'],
      surfaceTerrace: [{ value: '', disabled: true }],
      category: ['S+1', Validators.required]
    });

    this.apartments.push(apartmentForm);
  }

  // Supprimer un appartement de la liste
  removeApartment(index: number) {
    this.apartments.removeAt(index);
  }

  // Gérer l'activation du champ Surface Terrace
  onTerraceChange(index: number, value: string) {
    const apartment = this.apartments.controls[index] as FormGroup;
    if (value === 'yes') {
      apartment.get('surfaceTerrace')?.enable();
    } else {
      apartment.get('surfaceTerrace')?.disable();
      apartment.get('surfaceTerrace')?.setValue('');
    }
  }
  

  // Soumettre le formulaire
  submitForm() {
    if (this.residenceForm.valid) {
      console.log("Nouvelle Résidence avec Appartements :", this.residenceForm.value);
    }
  }
}
