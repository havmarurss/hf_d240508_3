import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-delay-input',
  templateUrl: './delay-input.component.html',
})
export class DelayInputComponent {
  delayForm: FormGroup;
  date: number;
  @Output() changeValue = new EventEmitter<number>();

  ngOnInit(): void {
    this.delayForm = new FormGroup({
      delay: new FormControl(0),
    });
  }

  onSubmit() {
    // this.delaySubmitted = this.delayForm.value;
    this.date = this.delayForm.get('delay').value;
    this.changeValue.emit(this.date);
    console.log(this.delayForm.value);
  }
}
