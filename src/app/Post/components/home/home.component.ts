import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { SharedService } from 'src/app/Shared/Services/shared.service';
import * as PostsAction from '../../actions';
import { PostDTO } from '../../models/post.dto';
import { PostService } from '../../services/post.service';
import { CardDTO } from 'src/app/Shared/Models/card.dto';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  posts: PostDTO[];
  postsCards: CardDTO[];
  showButtons: boolean;
  loadPostsSubscribe: Subscription;

  private userId: string;

  constructor(
    private postService: PostService,
    private sharedService: SharedService,
    private store: Store<AppState>
  ) {
    this.userId = '';
    this.posts = new Array<PostDTO>();
    this.showButtons = false;
    this.postsCards = [];
    this.store.select('auth').subscribe((auth) => {
      this.showButtons = false;

      if (auth.credentials.user_id) {
        this.userId = auth.credentials.user_id;
      }
      if (auth.credentials.access_token) {
        this.showButtons = true;
      }
    });

    this.store.select('posts').subscribe((posts) => {
      this.postsCards = [];
      posts.posts.forEach((post) => { 
        this.postsCards.push({
          postId: post.postId,
          title: post.title,
          description: post.description,
          userAlias: post.userAlias,
          categories: post.categories,
          num_likes:post.num_likes,
          num_dislikes:post.num_dislikes,
          imatge: "https://material.angular.io/assets/img/examples/shiba2.jpg",
          imatge_description: "Photo of a Shiba Inu",
          publication_date: post.publication_date,
          showButtons: this.showButtons,
        });
      });
     
    });

    this.loadPostsSubscribe = this.sharedService.loadPosts$.subscribe((res:boolean) => {
      if(res){
         this.loadPosts();
      }
      });
  }

  ngOnInit(): void {
    this.loadPosts();
  }

  private loadPosts(): void {
    this.store.dispatch(PostsAction.getPosts());
  }

}
