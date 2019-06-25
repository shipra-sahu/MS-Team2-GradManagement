// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl,  FormBuilder  } from "@angular/forms";

// @Component({
//   selector: 'app-add-edit',
//   templateUrl: './add-edit.component.html',
//   styleUrls: ['./add-edit.component.scss']
// })
// export class AddEditComponent implements OnInit {

//   exampleForm = new FormGroup ({
//     firstName: new FormControl(),
//     lastName: new FormControl(),

//   });
//   createForm() {
//     this.exampleForm = this.formBuilder.group({
//       firstName: '',
//       lastName: ''
//     });
// }
//   constructor(private formBuilder: FormBuilder) { 
//     this.createForm();
//   }
//   ngOnInit() {
//   }

// }


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
