import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as PostsAction from '../../actions';
import { PostDTO } from '../../models/post.dto';
import { Color } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  posts: PostDTO[];
  dades = [
    { "name":'Likes', "value":0 },
    { "name":'Dislikes', "value":0 }
  ];
  numLikes: number;
  numDislikes: number;

  constructor(private store: Store<AppState>) {
    this.posts = new Array<PostDTO>();
    this.numLikes = 0;
    this.numDislikes = 0;
    this.store.select('posts').subscribe((posts) => {
      this.posts = posts.posts;
      this.numLikes = 0;
      this.numDislikes = 0;
      this.posts.forEach((post) => {
        this.numLikes = this.numLikes + post.num_likes;
        this.numDislikes = this.numDislikes + post.num_dislikes;
      });
      this.dades = [
        { "name":'Likes', "value":this.numLikes },
        { "name":'Dislikes', "value":this.numDislikes }
      ];
    });
    
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  private loadPosts(): void {
    this.store.dispatch(PostsAction.getPosts()); 
  }
}
