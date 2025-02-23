import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {
  apartForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.apartForm = this.fb.group({
      apartNum: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      floorNum: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      surface: ['', Validators.required],
      terrace: [false],
      surfaceterrace: [{ value: '', disabled: true }],
      category: ['', Validators.required],
      ResidenceId: ['', Validators.required]
    });

    this.apartForm.get('terrace')?.valueChanges.subscribe(value => {
      if (value) {
        this.apartForm.get('surfaceterrace')?.enable();
      } else {
        this.apartForm.get('surfaceterrace')?.disable();
        this.apartForm.get('surfaceterrace')?.setValue('');
      }
    });
  }

  addApartment() {
    if (this.apartForm.valid) {
      console.log('Nouvel Appartement:', this.apartForm.value);
    } else {
      console.log('Formulaire invalide');
    }
  }
}
