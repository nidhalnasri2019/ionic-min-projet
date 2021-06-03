import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ArticleService } from './../article.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    articles: any;
  constructor(private http :HttpClient , private router: Router, private articleService:ArticleService) { }

  ngOnInit() {
    this.getAllData();
  }

   getAllData(){
     this.articleService.getData().subscribe(res=>{
       this.articles = res ['data'],
       console.log(res);
     })
   }
   plusArticle(article){
     this.articleService.currentArticle=article;
     this.router.navigate(['/detail'])

   }
}
