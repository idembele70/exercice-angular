import { Component, OnDestroy, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor, AsyncPipe } from '@angular/common';
import { Observable, Subject, takeUntil, BehaviorSubject } from 'rxjs';

import { EmailFormComponent } from '../mid/day-06/email-form/email-form.component';
import { UserService } from '../../services/mid/day-06/user.service';
import { User } from '../../models/mid/day-06/user';
import { UserRowComponent } from '../mid/day-06/user-row/user-row.component';
import { RegisterFormComponent } from '../mid/day-06/register-form/register-form.component';
import { PostService } from '../../services/mid/day-06/post.service';
import { Post } from '../../models/mid/day-06/post';
import { ErrorService } from '../../services/mid/day-06/error.service';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [EmailFormComponent, NgFor, UserRowComponent, AsyncPipe, RegisterFormComponent],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss',
})
export class MainViewComponent implements OnInit {
  users$: Observable<User[]> = this.userService.getUsers$();
  posts$: Observable<Post[]> = this.postService.getPosts$();
  constructor(
    private readonly userService: UserService,
    private readonly http: HttpClient,
    private readonly postService: PostService,
    private readonly errorService: ErrorService
    ) {};

  onFetchUsers() {
   this.userService.fetchUsers()
  }

  ngOnInit() {
   this.userService.fetchUsers()
  }

  trackUser(index: number, user: User) {
    return user.id;
  }

  onLoginRequest() {
    this.http.get('https://jsonplaceholder.typicode.com/login').subscribe()
  }

  onFetchTodosRequest() {
    this.http.get('https://jsonplaceholder.typicode.com/todosss').subscribe()
  }

  onFetchAllPost() {
    this.postService.fetchPosts();
  }

  trackPost(index: number, post: Post) {
    return post.id;
  }

  errorMessage$ = this.errorService.getMessage$();
  private readonly baseUrl = 'https://mock.httpstatus.io';
  onInternalServerErrorFetch() {
    const url = new URL('500', this.baseUrl);
    this.http.get(url.href).subscribe();
  }

  onForbiddenErrorFetch() {
    const url = new URL('401', this.baseUrl);
    this.http.get(url.href).subscribe();
  }
}
