import { Component, OnInit } from '@angular/core';
import { WebnewsService } from '../service/webnews.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {

  business:any = [];

  constructor(private service: WebnewsService) { }

  ngOnInit(): void {
    this.service.getBusiness().subscribe({
      next:(business: any)=>{
        this.business = business.articles
        console.log(this.business);
        
       
        
      }
    })
  }

}
