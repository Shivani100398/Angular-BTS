import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bug } from './Bug';

@Injectable({
  providedIn: 'root'
})
export class BugService {

  constructor(private http: HttpClient) { }
  //Create Bug
  save(bug: Bug) {
    return this.http.post('http://localhost:8085/bug', bug, {
      headers: { "content-type": 'application/json' },
      responseType:"text"
    });
  }


  // View All Bugs
  getAllBugs(){
    return this.http.get('http://localhost:8085/bug')
  }

  //Get Bug by name
  getBugName(bugname:string  ){
    return this.http.get('http://localhost:8085/bug/name'+'/'+bugname);
  }
  //Get Bug by status
  getBugStatus(bugstatus:string  ){
    return this.http.get('http://localhost:8085/bug/status'+'/'+bugstatus);
  }
    //Get By NAme and Status Both
    getBugNameAndStatus(name:string,status:string){
      return this.http.get('http://localhost:8085/bug/search/'+name+'?status='+status);
    }

  //Update Bug
  update(bug: Bug, id: string) {
    return this.http.put('http://localhost:8085/bug'+'/'+id, bug, {
      headers: { "content-type": 'application/json' }

    });
  }
  //Delete Bug
  deleteBug(bugId:String){
    return this.http.delete('http://localhost:8085/bug'+'/'+bugId)
  }

}

