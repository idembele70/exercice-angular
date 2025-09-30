import { Component } from '@angular/core';

import { Post } from '../../../../models/mid/day-11/post.models';
import { PostService } from '../../../../services/mid/day-11/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post-list.component.html'
})
export class PostListComponent {
  readonly posts$ = this.postService.getPosts$();
  constructor(private readonly postService: PostService) {}
  
  trackById(_: number, post: Post) {
    return post.id
  }
}
