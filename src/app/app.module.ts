import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer.component';
import { CountdownTimerComponent } from './countdown.timer.component';
@NgModule({
    declarations: [AppComponent, TimerComponent, CountdownTimerComponent],
    imports: [
        BrowserModule,
        CommonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
