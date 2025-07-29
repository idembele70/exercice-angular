import { Component, OnInit, inject } from '@angular/core';
import { NgFor, AsyncPipe } from '@angular/common';
import { PasswordStrengthValidatorComponent } from '../day/ten/password-strength-validator/password-strength-validator.component';
import { SearchPipe } from '../../pipes/day/ten/search/search.pipe';
import { Appareil } from '../../models/day/ten/appareil';
import { LoaderDirective } from '../../directives/day/ten/loader/loader.directive';
import { PostService } from '../../services/day/ten/post/post.service';
import { UserListComponent } from '../day/ten/user-list/user-list.component';
import { User } from '../../models/day/ten/user';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [PasswordStrengthValidatorComponent, SearchPipe, LoaderDirective, AsyncPipe, NgFor, UserListComponent],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss',
})
export class MainViewComponent {
  readonly appareils: Appareil[] = [
  { name: 'Laptop' },
  { name: 'Keyboard' },
  { name: 'Phone' },
  ];

  readonly emptyAppareils: Appareil[] = [];

  private readonly postService = inject(PostService);

  readonly posts$ = this.postService.getPosts$();

  readonly users: User[] = [
    { firstName: 'toto', lastName: 'name', email: 'toto@mail.invalid' },
    { firstName: 'titi', lastName: 'name', email: 'titi@mail.invalid' },
  ];

}
