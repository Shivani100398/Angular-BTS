import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  bug:Bug = new Bug();
  bugResult:any;
  bugArray:Bug[]=[];
  name: string = '';
  status:string = 'NEW';
  constructor(private bugService: BugService) { }
  getBugName() {
    const bugName = this.name.trim();
    if (bugName) {
      const promise = this.bugService.getBugName(bugName);
      promise.subscribe(response => {
        this.bugResult = response;
        if(this.bugResult.length){
          this.bugResult.forEach(bug => {
            this.bugArray.push(bug);
          });
        }
        else{
          alert("Invalid Bug Name");
        }
      },
        error => {
          console.log(error);
          alert('error happened..')
        })
    }
    else {
      console.log(this.status);

    }
  }
  ngOnInit(): void {
  }
}

