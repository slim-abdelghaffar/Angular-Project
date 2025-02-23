import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from 'src/app/core/Services/residence.service';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  residence: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private residenceService: ResidenceService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.residenceService.getResidenceById(id).subscribe(data => {
      this.residence = data;
    });
  }

  goToUpdateResidence(): void {
    this.router.navigate(['/add-residence', this.residence.id]);
  }
  
}
