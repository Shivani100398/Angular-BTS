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
      headers: { "content-type": 'application/json' },
      responseType:"text"
    });
  }
  getAllBugs(){
    return this.http.get('http://localhost:8085/bug')
  }

  getBugName(bugname:string  ){
    return this.http.get('http://localhost:8085/bug/name'+'/'+bugname);
  }
  getBugStatus(bugstatus:string  ){
    return this.http.get('http://localhost:8085/bug/status'+'/'+bugstatus);
  }
}
