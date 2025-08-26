import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DebounceClickDirective } from './directives/mid/day-03/debounce-click.directive';
import { MainViewComponent } from './components/main-view/main-view.component';
import { DelayedMessagePipe } from './pipes/mid/day-03/delayed-message.pipe';
import { LoggedComponent } from './components/mid/day-04/logged/logged.component';
import { LoginComponent } from './components/mid/day-04/login/login.component';
import { HighlightDirective } from './directives/mid/day-04/highlight.directive';
import { TodoFormComponent } from './components/mid/day-04/todo-form/todo-form.component';
import { CustomFilterPipe } from './pipes/mid/day-04/custom-filter.pipe';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
