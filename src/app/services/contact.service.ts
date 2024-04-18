import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contact } from '../types/contact';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const URL = environment.apiEmail;
@Injectable({
  providedIn: 'root'
})

export class ContactService {


  constructor(private http: HttpClient) { }

  sendEmail(form: Contact): Observable<Contact> {
    return this.http.post<Contact>(URL, form);
  }
}
