  import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';
import Swal from 'sweetalert2';

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
  status:string = '';
  constructor(private bugService: BugService) { }
  getBugNameAndStatus() {
    const bugName = this.name.trim();
    const bugStatus = this.status.trim();
    if (bugName&&bugStatus) {
      const promise = this.bugService.getBugNameAndStatus(bugName,bugStatus);
      promise.subscribe(response => {
        this.bugResult = response;
        if(this.bugResult.length){
            this.bugArray=this.bugResult;
          }
        else
        {
          alert("No matching bug name with "+bugStatus+" status");
        }
      },

        error => {
          console.log(error);
          alert('error happened..')
        })
    }
  else if(bugName){
      console.log("BugNAme");
      const promise = this.bugService.getBugName(bugName);
      promise.subscribe(response => {
        this.bugResult = response;
        if(this.bugResult.length){
            this.bugArray=this.bugResult;
          }
        else
        {
          alert("No bug found with name "+bugName);
        }
      },

        error => {
          console.log(error);
          alert('error happened..')
        })
    }

  else if(bugStatus){
     console.log("Bug status")
     const promise = this.bugService.getBugStatus(bugStatus);
     promise.subscribe(response => {
       this.bugResult = response;
       if(this.bugResult.length){
           this.bugArray=this.bugResult;
         }
       else
       {
         alert("No Bug  found with status "+bugStatus);
       }
     },

       error => {
         console.log(error);
         alert('error happened..')
       })
   }

  else{
 console.log("All Bugs")
 const observable = this.bugService.getAllBugs();
 observable.subscribe(response => {
   this.bugResult = response;
   if (this.bugResult.length) {
     this.bugArray = this.bugResult;
   }
 }, error => console.log(error));
}
}deleteBug(id: any, index: number) {
  //method for deletion of bug
  Swal.fire({
    title: 'Are you sure you want to delete?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Yes,Delete it',
    // cancelButtonText: 'Cancel',
  }).then((result) => {
    if (result.isConfirmed) {
      //if Yes is pressed
      const observable = this.bugService.deleteBug(id);
      observable.subscribe((response) => this.bugArray.splice(index, 1));
      Swal.fire('Deleted', 'Bug deleted successfully!', 'success');
    } else if (result.isDenied) {
      //if No is pressed
      Swal.fire('Cancelled', 'Deletion cancelled', 'error');
    }
  });
}

  ngOnInit(): void {
  }
}

