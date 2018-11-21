import { Component } from "@angular/core";

@Component({
    selector : 'timer',
    templateUrl: './timer.component.html'
}
)
  export class TimerComponent {
    timeout: number;
    onCountdownCompleted(): void {
      alert('Time up !');
    }
    onProgress(data) {
        this.timeout = data;
    }
  }
