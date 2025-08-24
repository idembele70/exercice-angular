import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DebounceClickDirective } from './directives/mid/day-03/debounce-click.directive';
import { MainViewComponent } from './components/main-view/main-view.component';
import { DelayedMessagePipe } from './pipes/mid/day-03/delayed-message.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DebounceClickDirective,
    MainViewComponent,
    DelayedMessagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
