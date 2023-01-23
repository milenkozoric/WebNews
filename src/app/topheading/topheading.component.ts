import { Component, OnInit } from '@angular/core';
import { WebnewsService } from '../service/webnews.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {


  topHeadings: any = [];

  constructor(private service: WebnewsService) { }

  ngOnInit(): void {

    this.service.getTopHeading().subscribe({
      next: (result : any)=>{
        this.topHeadings = result.articles
      console.log(this.topHeadings);
              
      }
    })

  }

}
