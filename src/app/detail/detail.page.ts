import { Component, OnInit } from '@angular/core';
import { ArticleService } from './../article.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
article;
  constructor(private articleService : ArticleService) { }

  ngOnInit() {
    this.article = this.articleService.currentArticle;
  }
    
}
