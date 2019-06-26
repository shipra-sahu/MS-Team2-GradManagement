import { Observable } from 'rxjs';
import { Grad } from '../Grad';
import { Component, OnInit, Input } from '@angular/core';
import { GradService } from 'src/app/grad.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';



@Component({
  selector: 'app-grad-details',
  templateUrl: './grad-details.component.html',
  styleUrls: ['./grad-details.component.css']
})
export class GradDetailsComponent implements OnInit {
    gradId: number;
    graduate: Grad;
    isLoaded: boolean = false;
  
    constructor(private gradService: GradService, private route:ActivatedRoute,private router:Router) {  
    }
  
    ngOnInit() {
      this.route.paramMap.subscribe((params: ParamMap)=>
      {
        this.gradId=parseInt(params.get('id'));
        this.gradService.getGrad(this.gradId).subscribe(data => this.graduate = data);
        
        console.log(this.graduate);
        if(this.graduate!=null)
          this.isLoaded=true;
        });   
    }
  }