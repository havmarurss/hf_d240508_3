import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'hf_d240508_3';
  delay: number;
  date: number = Date.now();
  dateToDisplay: number;
  initialDate: number = Date.now();

  ngOnInit() {
    console.log(this.date);
  }

  getDelay(delay: number) {
    this.delay = delay;
    this.initialDate = this.date;
    this.date += this.delay * 24 * 60 * 60 * 1000;
    this.dateToDisplay = this.date;
  }
}
