import { Component, OnInit } from '@angular/core';
import { WebnewsService } from '../service/webnews.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css'],
})
export class TopheadingComponent implements OnInit {
  topHeadings: any[] = [];

  products: any[]=[];
  newsPerPage: number = 4;
  public selectedPage = 1;

  constructor(private service: WebnewsService) {}

  ngOnInit(): void {
    this.service.getTopHeading().subscribe({
      next: (result: any) => {
        this.topHeadings = result.articles;
        console.log(this.topHeadings);
        let pageIndex =(this.selectedPage -1)* this.newsPerPage;
        this.products = this.topHeadings.slice(pageIndex, this.newsPerPage);
      },
    });

  }

  changePageSize(event: Event){
      const newSize = (event.target as HTMLInputElement).value;
      this.newsPerPage = Number(newSize);
      this.changePage(1);
  }

  get pageNumbers(): number[]{
    return Array(Math.ceil(this.topHeadings.length/this.newsPerPage))
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
    this.products = this.topHeadings.slice(pageIndex, endIndex);
  }

}
