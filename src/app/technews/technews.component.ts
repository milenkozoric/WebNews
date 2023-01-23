import { Component, OnInit } from '@angular/core';
import { WebnewsService } from '../service/webnews.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  technologys: any= [];
  constructor(private service : WebnewsService) { }

  ngOnInit(): void {
    this.service.getTehnology().subscribe({
      next:(technology: any)=>{
        this.technologys= technology.articles
        console.log(this.technologys);
        
      }
    })
  }

}
