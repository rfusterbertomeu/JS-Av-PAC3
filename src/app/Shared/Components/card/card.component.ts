import { Component, Input, OnInit } from '@angular/core';
import { CategoryDTO } from 'src/app/Category/models/category.dto';
import { CardDTO } from '../../Models/card.dto';
import { SharedService } from 'src/app/Shared/Services/shared.service';
import { PostService } from 'src/app/Post/services/post.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() item: CardDTO = new CardDTO('', '', '', '' , 0, 0, '', new Date(), false);


  constructor(
    private postService: PostService,
    private sharedService: SharedService){}
  ngOnInit():void {}

  
  like(postId: string): void {
    let errorResponse: any;

    this.postService.likePost(postId).subscribe(
      () => {
        this.loadPosts();
      },
      (error: HttpErrorResponse) => {
        errorResponse = error.error;
        this.sharedService.errorLog(errorResponse);
      }
    );
  }
  loadPosts() {
    throw new Error('Method not implemented.');
  }

  dislike(postId: string): void {
    let errorResponse: any;

    this.postService.dislikePost(postId).subscribe(
      () => {
        this.loadPosts();
      },
      (error: HttpErrorResponse) => {
        errorResponse = error.error;
        this.sharedService.errorLog(errorResponse);
      }
    );
  }
}
