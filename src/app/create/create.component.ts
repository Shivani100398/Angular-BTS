
import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {  //controller
  bug:Bug=new Bug(); //model -stores all form data
  remainingText1=120;
  remainingText2=70;
  constructor(private bugService:BugService) { }
  valueChange(value:number)
  {

    this.remainingText2=70-value;

  }
  valueChange2(value1:number)
  {
    this.remainingText1=120-value1;
  }

  save(){
    if (!this.bug.name.trim()) {
      alert("Please provide bug name");
    }
    else if (this.bug.name.length > 50) {
      alert("Bug name cannot be more than 50 character");
    }
    else if (!this.bug.projectId.trim()) {
      alert("Please provide project id");
    }
    else if (this.bug.projectId.length > 50) {
      alert("project id cannot be more than 50 character");
    }
    else if (!this.bug.testerId.trim()) {
      alert("Please provide tester id");
    }
    else if (this.bug.testerId.length > 50) {
      alert("tester id cannot be more than 50 character");
    }
    else if (!this.bug.product.trim()) {
      alert("Please provide product name");
    }
    else if (this.bug.product.length >50) {
      alert("product name cannot be more than 50 character");
    }
    else if (!this.bug.module.trim()) {
      alert("Please provide module name");
    }
    else if (this.bug.module.length > 50) {
      alert("module name cannot be more than 50 character");
    }
    else if (!this.bug.buildVersion.trim()) {
      alert("Please provide build version");
    }
    else if (this.bug.buildVersion.length > 50) {
      alert("build version cannot be more than 50 character");
    }
    else if (!this.bug.synopsis.trim()) {
      alert("Please provide synopsis");
    }
   else if (!this.bug.description.trim()) {
      alert("Please provide description");
    }

    const promise = this.bugService.save(this.bug);
    promise.subscribe(response=> {
      console.log(response);
      alert("Make sure everything entered is correct");

      alert('Bug added..')

    },
    error=> {
      console.log(error.ok);{
        let message:string=error.headers.get("error");
        if(message.length<100){
          alert("Error..!! :"+error.headers.get("error"));
        }
        else if(message.indexOf('ETA')>-1){
          alert("ETA Date cannot be a past date");
        }
      else{
      alert('error Happened')
      }
    }
    })

  }
  ngOnInit(): void {

  }
}
