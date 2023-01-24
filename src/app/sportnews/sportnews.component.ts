import { Component, OnInit } from '@angular/core';
import { WebnewsService } from '../service/webnews.service';

@Component({
  selector: 'app-sportnews',
  templateUrl: './sportnews.component.html',
  styleUrls: ['./sportnews.component.css']
})
export class SportnewsComponent implements OnInit {

  sports: any = [];

  products: any[]=[];
  newsPerPage: number = 4;
  public selectedPage = 1;


  constructor(private service: WebnewsService) { }

  ngOnInit(): void {
    this.service.getSports().subscribe({
      next:(sports: any)=>{
      this.sports = sports.articles
      let pageIndex =(this.selectedPage -1)* this.newsPerPage;
      this.products = this.sports.slice(pageIndex, this.newsPerPage);
        }
          
      })
  }

  changePageSize(event: Event){
    const newSize = (event.target as HTMLInputElement).value;
    this.newsPerPage = Number(newSize);
    this.changePage(1);
}

get pageNumbers(): number[]{
  return Array(Math.ceil(this.sports.length/this.newsPerPage))
  .fill(0).map((x,i)=>i+1);
}

changePage(page: any){
  this.selectedPage = page;
  this.slicedProducts();
}


slicedProducts(){
  let pageIndex =(this.selectedPage -1)* this.newsPerPage;
  let endIndex = (this.selectedPage  - 1 )* this.newsPerPage + this.newsPerPage;
  this.products = [];
  this.products = this.sports.slice(pageIndex, endIndex);
}


}
