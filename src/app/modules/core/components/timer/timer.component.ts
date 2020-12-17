import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnChanges {

  @Input() public seconds: number;
  @Input() public minuites: number;
  @Output() public completedTimer = new EventEmitter();
  @Output() public PresentTimeSeconds = new EventEmitter();
  @Output() public PresentTimeMinuites = new EventEmitter();
  interval;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if ((changes.seconds || changes.minuites) && this.interval) {
      clearInterval(this.interval);
     }
    if (changes.seconds && changes.seconds.previousValue !== changes.seconds.currentValue) {
      this.seconds = changes.seconds.currentValue;
      console.log(this.seconds);
    }
    if (changes.minuites && changes.minuites.previousValue !== changes.minuites.currentValue) {
      this.minuites = changes.minuites.currentValue;
      console.log(this.minuites);
    }
     this.startTimer();
  }

  ngOnInit(): void {
    // this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.seconds === 0 && this.minuites === 0) {
        this.updateTime();
        this.completedTimer.emit('');
        clearInterval(this.interval);
      } else {
        if (this.seconds === 0 && this.minuites !== 0) {
          this.seconds = 59;
          this.minuites = this.minuites - 1;
          this.updateTime();
        } else if (this.minuites === 0 && this.seconds !== 0) {
          this.seconds = this.seconds - 1;
          this.updateTime();
        } else if (this.minuites !== 0 && this.seconds !== 0) {
          this.seconds = this.seconds - 1;
          this.updateTime();
        }
      }
    }, 1000);
  }

  updateTime() {
    this.PresentTimeSeconds.emit(this.seconds);
    this.PresentTimeMinuites.emit(this.minuites);
  }

}
