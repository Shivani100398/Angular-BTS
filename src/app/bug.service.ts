import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bug } from './Bug';

@Injectable({
  providedIn: 'root'
})
export class BugService {

  constructor(private http: HttpClient) { }
  save(bug: Bug) {
    return this.http.post('http://localhost:8085/bug', bug, {
      headers: { "content-type": 'application/json' }
    });
  }
}
