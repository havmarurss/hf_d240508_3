import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DelayInputComponent } from './delay-input/delay-input.component';
import { TimerDisplayComponent } from './timer-display/timer-display.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FiddleComponent } from './fiddle/fiddle.component';

@NgModule({
  declarations: [
    AppComponent,
    DelayInputComponent,
    TimerDisplayComponent,
    FiddleComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
