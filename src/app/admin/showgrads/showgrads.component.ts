import { Observable } from "rxjs";


import { Component, OnInit } from "@angular/core";
import { Grad } from 'src/app/gradmanagement/Grad';
import { GradService } from 'src/app/grad.service';

@Component({
  selector: "app-showgrads",
  templateUrl: "./showgrads.component.html",
  styleUrls: ["./showgrads.component.css"]
})
export class ShowgradsComponent implements OnInit {
  grads: Observable<Grad[]>;
  headElements=['Name','College', 'Location Preference', 'DoJ', 'Batch','DoJ Reconfirmation(Y/N)',
  'Remarks', 'Course','Branch','Current Percentage', 'Person Contact', 'Email Id',
  'DoB', 'Native Place', 'Current Place', 'Parent Contact', 'Postal Address',
  'Active'];

  constructor(private gradService: GradService) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.grads = this.gradService.getGradsList();
  }

  deleteGrad(emailId: string) {
    this.gradService.deleteGrad(emailId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}
