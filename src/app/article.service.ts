import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
   API_URL = environment.urlApi;
   currentArticle :any;
  constructor(private http : HttpClient) { }

  getData(){
    return this.http.get(`${this.API_URL}`)
  }
}
