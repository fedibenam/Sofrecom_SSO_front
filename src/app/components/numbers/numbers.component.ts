import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
 
@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss']
})
export class NumbersComponent implements AfterViewInit {
  @ViewChildren('counter') counters!: QueryList<ElementRef>;
 
  ngAfterViewInit() {
    this.counters.forEach((counterEl) => {
      const el = counterEl.nativeElement;
      const target = +el.getAttribute('data-target');
      let count = 0;
 
      const duration = 2000; // total duration in ms
      const steps = 100; // number of steps for smoothness
      const increment = target / steps;
      const intervalTime = duration / steps;
 
      const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
          el.textContent = '+' + target;
          clearInterval(interval);
        } else {
          el.textContent = '+' + Math.floor(count);
        }
      }, intervalTime);
    });
  }
}