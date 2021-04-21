import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
bug:Bug=new Bug();
bugResult:any;
  bugArray:Bug[]=[];
  name: string = '';
  remainingText1=50;
  remainingText2=100;
  constructor(private bugService: BugService) { }
  valueChange(value:number)
  {
    this.remainingText2=100-value;
  }
  valueChange2(value1:number)
  {
    this.remainingText1=50-value1;
  }
update()
{
  if (!this.bug.name.trim()) {
  alert("Please provide bug name");
}
else if (this.bug.name.length > 7) {
  alert("Bug name cannot be more than 7 character");
}
else if (!this.bug.projectId.trim()) {
  alert("Please provide project id");
}
else if (this.bug.projectId.length > 10) {
  alert("project id cannot be more than 10 character");
}
else if (!this.bug.testerId.trim()) {
  alert("Please provide tester id");
}
else if (this.bug.testerId.length > 10) {
  alert("tester id cannot be more than 10 character");
}
else if (!this.bug.product.trim()) {
  alert("Please provide product name");
}
else if (this.bug.product.length > 30) {
  alert("product name cannot be more than 30 character");
}
else if (!this.bug.module.trim()) {
  alert("Please provide module name");
}
else if (this.bug.module.length > 10) {
  alert("module name cannot be more than 10 character");
}
else if (!this.bug.buildVersion.trim()) {
  alert("Please provide build version");
}
else if (this.bug.buildVersion.length > 10) {
  alert("build version cannot be more than 10 character");
}
else if (!this.bug.synopsis.trim()) {
  alert("Please provide synopsis");
}
else if (!this.bug.description.trim()) {
  alert("Please provide description");
}

  const promise = this.bugService.update(this.bug,this.bug.id);
  promise.subscribe((response: any)=> {
    console.log(response);
    alert('Bug added..')

  },
    (  error: { ok: any; })=> {
    console.log(error);
    if(!error.ok)

    alert('error Happened')
  })

}

getBugName() {
  const bugName = this.name.trim();
  if (bugName) {
    const promise = this.bugService.getBugName(bugName);
    promise.subscribe(response => {
      this.bugResult = response;
      console.log(this.bugResult);
      if(this.bugResult.length){
        this.bugResult.forEach((bug: Bug) => {
          let etaDate = bug.etaDate;
          if (etaDate) {
            let finalEtaDate = etaDate.split('T')[0];
            bug.etaDate = finalEtaDate;
          }
          this.bug=bug;
        });
      }
      else{
        alert("Bug Name not in records");
      }
    },
      error => {
        console.log(error);
        alert('error happened..')
      })
  }
}

  ngOnInit(): void {
  }
}
