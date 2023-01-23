import { Component, OnInit } from '@angular/core';
import { WebnewsService } from '../service/webnews.service';

@Component({
  selector: 'app-sportnews',
  templateUrl: './sportnews.component.html',
  styleUrls: ['./sportnews.component.css']
})
export class SportnewsComponent implements OnInit {

  sports: any = [];

  constructor(private service: WebnewsService) { }

  ngOnInit(): void {
    this.service.getSports().subscribe({
      next:(sports: any)=>{
      this.sports = sports.articles
          console.log(sports)
        }
          
      })
  }

}
