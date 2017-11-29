import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import "rxjs/Rx";
import { Posts } from '../models/posts';

@Injectable()
export class PostService {

  constructor(private http: Http) { }

  getPosts() {
      return this.http.get('https://jsonplaceholder.typicode.com/posts/')
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any){
    console.error(error);
    return Promise.reject(error);
  }

}
