import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

interface SendEmail {
  to: string;
  fullName: string;
  mobile: string;
  subject: string;
  body: string;
}

export const API_URL = environment.apiEmail;
@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {}

  sendEmail(sendEmail: SendEmail) {
    return this.http.post(API_URL, sendEmail);
  }
}
