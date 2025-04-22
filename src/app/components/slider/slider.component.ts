import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Simulate a delay for slider initialization
    setTimeout(() => {
      const preloader = document.getElementById('preloader');
      const sliderArea = document.getElementById('slider-area');
      if (preloader) preloader.style.display = 'none';
      if (sliderArea) sliderArea.style.display = 'block';
    }, 1850); // Adjust the delay as needed
  }
}