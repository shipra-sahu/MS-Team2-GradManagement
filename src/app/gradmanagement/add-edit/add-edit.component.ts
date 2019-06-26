import { Component, OnInit } from '@angular/core';
import { GradService } from 'src/app/grad.service';
import { Grad } from '../Grad';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  grad: Grad = new Grad();
  submitted = false;

  constructor(private gradService: GradService) { }

  ngOnInit() {
  }

  newGrad(): void {
    this.submitted = false;
    this.grad = new Grad();
  }

  save() {
    this.gradService.createGrad(this.grad)
      .subscribe(data => console.log(data), error => console.log(error));
    this.grad = new Grad();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
