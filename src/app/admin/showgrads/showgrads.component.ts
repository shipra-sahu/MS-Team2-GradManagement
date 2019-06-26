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
  headElements=['Employee Code','Name','Email','College', 'Location ', 'DoJ', 'Batch','DoJ Reconfirmation(Y/N)',
  'Remarks', 'Course','Branch','Current Percentage/CGPA', 'Personal Contact', 'Personal Email',
  'DoB', 'Native Place', 'Current Place', 'Parent Contact', 'Postal Address', 'CV Link',
  'Action'];

  constructor(private gradService: GradService) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.grads = this.gradService.getGradsList();
  }

  deleteGrad(email: string) {
    this.gradService.deleteGrad(email)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}
