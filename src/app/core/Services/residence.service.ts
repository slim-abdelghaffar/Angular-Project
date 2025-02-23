import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Residence } from '../models/residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
  private residenceUrl = 'http://localhost:3000/residences';
  private apartmentsUrl = 'http://localhost:3000/apartments';

  constructor(private http: HttpClient) {}
  getResidenceById(id: number): Observable<any> {
    return this.http.get<any>(`${this.residenceUrl}/${id}`);
  }
  
  getResidences(): Observable<any[]> {
    return this.http.get<any[]>(this.residenceUrl);
  }
  addResidence(residence: Residence): Observable<Residence> {
    return this.http.post<Residence>(this.residenceUrl, residence);
  }
  // Supprimer une résidence et ses appartements associés
  deleteResidence(id: number): Observable<void> {
    return this.http.get<any[]>(`${this.apartmentsUrl}?residenceId=${id}`).pipe(
      switchMap(apartments => {
        const deleteApartmentRequests = apartments.map(apartment =>
          this.http.delete(`${this.apartmentsUrl}/${apartment.id}`)
        );

        return forkJoin(deleteApartmentRequests).pipe(
          switchMap(() => this.http.delete<void>(`${this.residenceUrl}/${id}`))
        );
      })
    );
  }
}
