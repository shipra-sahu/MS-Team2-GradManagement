import { Component, OnInit } from "@angular/core";
import { Grad } from 'src/app/gradmanagement/Grad';
import { GradService } from 'src/app/grad.service';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: "app-showgrads",
  templateUrl: "./showgrads.component.html",
  styleUrls: ["./showgrads.component.css"]
})
export class ShowgradsComponent implements OnInit {
  grads: Grad[];
  headElements = ["Employee Code", "Name", "Email", "College", "Location ", "DoJ", "Batch", "DoJ Reconfirmation(Y/N)",
    "Remarks", "Course", "Branch", "Current Percentage/CGPA", "Personal Contact", "Personal Email",
    "DoB", "Native Place", "Current Place", "Parent Contact", "Postal Address", "CV Link",
    "Action"];
  title = 'angular-confirmation-dialog';

  constructor(private gradService: GradService,public dialog: MatDialog) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.gradService.getGradsList()
      .subscribe(data => this.grads = data._embedded.gradList);
  }

  deleteGrad(id: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '390px',
      disableClose: true,
      data: "Do you really want to delete... ?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        this.gradService.deleteGrad(id)
          .subscribe(
            data => {
              console.log(data);
              this.reloadData();
            },
            error => console.log(error));
      }
    });

  }
}


