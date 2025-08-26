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
import { ReactiveFormComponent } from './components/mid/day-05/reactive-form/reactive-form.component';
import { ProductRowComponent } from './components/mid/day-05/product-row/product-row.component';
import { HoverColorDirective } from './directives/mid/day-05/hover-color.directive';
import { TaskFormComponent } from './components/mid/day-05/task-form/task-form.component';
import { FilterByAgePipe } from './pipes/mid/day-05/filter-by-age.pipe';

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
