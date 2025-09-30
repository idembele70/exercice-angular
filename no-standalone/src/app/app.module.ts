import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withInterceptors, HTTP_INTERCEPTORS, withInterceptorsFromDi } from '@angular/common/http';
import { AsyncPipe, NgIf } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DebounceClickDirective } from './directives/mid/day-10/debounce-click.directive';
import { MainViewComponent } from './components/main-view/main-view.component';
import { DelayedMessagePipe } from './pipes/mid/day-03/delayed-message.pipe';
import { LoggedComponent } from './components/mid/day-04/logged/logged.component';
import { LoginComponent } from './components/mid/day-04/login/login.component';
import { HighlightDirective } from './directives/mid/day-04/highlight.directive';
import { TodoFormComponent } from './components/mid/day-04/todo-form/todo-form.component';
import { CustomFilterPipe } from './pipes/mid/day-04/custom-filter.pipe';
import { ReactiveFormComponent } from './components/mid/day-05/reactive-form/reactive-form.component';
import { ProductRowComponent } from './components/mid/day-05/product-row/product-row.component';
import { HoverColorDirective } from './directives/mid/day-05/hover-color.directive';
import { TaskFormComponent } from './components/mid/day-05/task-form/task-form.component';
import { FilterByAgePipe } from './pipes/mid/day-05/filter-by-age.pipe';
import { RegisterFormComponent } from './components/mid/day-10/register-form/register-form.component';
import { loadingInterceptor } from './interceptors/mid/day-07/loading.interceptor';
import { UnauthorizedComponent } from './components/mid/day-07/unauthorized/unauthorized.component';
import { AdminComponent } from './components/mid/day-07/admin/admin.component';
import { CapitalizeAsyncPipe } from './pipes/mid/day-07/capitalize-async.pipe';
import { LoadingDirective } from './directives/mid/day-07/loading.directive';
import { CounterComponent } from './components/mid/day-09/counter/counter.component';
import { BetterAsyncPipe } from './pipes/mid/day-09/better-async.pipe';
import { IfRoleDirective } from './directives/mid/day-09/if-role.directive';
import { UserComponent } from './components/mid/day-09/user/user.component';
import { SignUpFormComponent } from './components/mid/day-09/sign-up-form/sign-up-form.component';
import { AdvancedCounterComponent } from './components/mid/day-10/advanced-counter/advanced-counter.component';
import { CapitilizeWordsPipe } from './pipes/mid/day-10/capitilize-words.pipe';
import { TodoListComponent } from './components/mid/day-10/todo-list/todo-list.component';
import { TodoRowComponent } from './components/mid/day-10/todo-row/todo-row.component';
import { CapitalizeNamePipe } from './pipes/mid/day-11/capitalize-name.pipe';
import { UserListComponent } from './components/mid/day-11/user-list/user-list.component';
import { HoverClassDirective } from './directives/mid/day-11/hover-class.directive';
import { LoginComponent as Day11LoginComponent } from './components/mid/day-11/login/login.component';
import { ProfileComponent } from './components/mid/day-11/profile/profile.component';
import { PostListComponent } from './components/mid/day-11/post/post-list.component';
import { AuthInterceptor } from './interceptors/mid/day-11/auth.interceptor';
import { RegisterComponent } from './components/mid/day-11/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    DebounceClickDirective,
    MainViewComponent,
    DelayedMessagePipe,
    LoggedComponent,
    LoginComponent,
    HighlightDirective,
    TodoFormComponent,
    CustomFilterPipe,
    ReactiveFormComponent,
    ProductRowComponent,
    HoverColorDirective,
    TaskFormComponent,
    FilterByAgePipe,
    RegisterFormComponent,
    UnauthorizedComponent,
    AdminComponent,
    CapitalizeAsyncPipe,
    LoadingDirective,
    CounterComponent,
    BetterAsyncPipe,
    IfRoleDirective,
    UserComponent,
    SignUpFormComponent,
    AdvancedCounterComponent,
    CapitilizeWordsPipe,
    TodoListComponent,
    TodoRowComponent,
    CapitalizeNamePipe,
    UserListComponent,
    HoverClassDirective,
    Day11LoginComponent,
    ProfileComponent,
    PostListComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgIf
  ],
  providers: [
    provideHttpClient(
      withInterceptorsFromDi()
    ),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AsyncPipe,
  ],
  bootstrap: [AppComponent],
  exports: [
    CapitalizeNamePipe
  ]
})
export class AppModule { }
