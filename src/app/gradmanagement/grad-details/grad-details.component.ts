import { Grad } from './../grad';
import { Component, OnInit, Input } from '@angular/core';
import { GradService } from 'src/app/grad.service';
import { ShowgradsComponent } from 'src/app/admin/showgrads/showgrads.component';
import { GradmanagementModule } from '../gradmanagement.module';

@Component({
  selector: 'app-grad-details',
  templateUrl: './grad-details.component.html',
  styleUrls: ['./grad-details.component.css']
})
export class GradDetailsComponent implements OnInit {

     @Input() grad: Grad;
  
    constructor(private GradService: GradService, private listComponent: ShowgradsComponent) { }
  
    ngOnInit() {
    }
    //updateActive(val: boolean) { this.grad.active = val; }

   }


