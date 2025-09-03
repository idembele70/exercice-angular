import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil, Subscription, BehaviorSubject } from 'rxjs';

import { Post } from '../../models/mid/day-07/post';
import { PostService } from '../../services/mid/day-07/post.service';
import { UserService } from '../../services/mid/day-07/user.service';
import { User } from '../../models/mid/day-07/user';
import { LoadingService } from '../../services/mid/day-07/loading.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss'
})
export class MainViewComponent implements OnInit, OnDestroy {
  posts$ = this.postService.getPosts$();
  private readonly destroy$ = new Subject<void>();
  user: User = { name: '', status: 'disconnected', role: 'user' }
  private userSubscription = new Subscription();

  constructor(
    private readonly postService: PostService,
    private readonly userService: UserService,
    private readonly router: Router,
    private readonly loadingService: LoadingService
    ) {}

  ngOnInit() {
    this.postService.loadPosts$()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe()
      this.userSubscription = this.userService.getUser$().subscribe(
        user => this.user = user
      );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.userSubscription)
      this.userSubscription.unsubscribe();
  }

  onLogin() {
    this.userService.login()
  }

  onLogout() {
    this.userService.logout();
  }

  onToggleRole() {
    const role = this.user.role;
    const newRole = role === 'admin' ? 'user' : 'admin';
    this.userService.setRole(newRole);
  }

  get isLoggedIn() { return this.userService.isLoggedIn() }
  get isLoggedOut() { return this.userService.isLoggedIn() === false }
  get isAdmin() { return this.userService.isAdmin() }

  goToAdminPage() {
    this.router.navigate(['admin'])
  }
  readonly capitalize$ = new BehaviorSubject<string>('');
  isLoading$ = this.loadingService.getState$();
}
