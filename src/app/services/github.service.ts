import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../types/repository.inteface';

export const GITHUB_API_URL = "https://api.github.com/users/vinipolitta/repos"

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getRepos(): Observable<Repository[]> {
    return this.http.get<Repository[]>(GITHUB_API_URL)
  }
}
