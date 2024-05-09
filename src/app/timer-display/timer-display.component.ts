import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-timer-display',
  templateUrl: './timer-display.component.html',
})
export class TimerDisplayComponent {
  @Input() date: number= 0;

}
