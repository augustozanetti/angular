import { Component, OnInit } from '@angular/core';
import { Posts } from '../../models/posts';
import { PostService } from '../../services/post-service.service';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css'],
  providers: [PostService]
})
export class ListPostsComponent implements OnInit {
  posts: Posts[];
  errorMessage: string;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts()
  }

  getPosts(){
    this.postService.getPosts()
    .subscribe(data => this.posts = data, error => console.error(error));
  }
}
