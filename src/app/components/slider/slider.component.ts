import { Component, Input, AfterViewInit, OnDestroy } from '@angular/core';
 
declare var $: any;
 
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit, OnDestroy {
  @Input() prenom: string = '';
 
  private owlInstance: any;
 
  ngAfterViewInit() {
    setTimeout(() => {
      this.owlInstance = $('.homepage-slider').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        navText: [
          '<i class="fa fa-chevron-left"></i>',
          '<i class="fa fa-chevron-right"></i>'
        ],
        items: 1,
        smartSpeed: 600,
        responsive: {
          0: { items: 1 },
          768: { items: 1 },
          1000: { items: 1 }
        }
      });
 
      // Reset autoplay timer on manual nav
      $('.homepage-slider').on('click', '.owl-next, .owl-prev', () => {
        this.restartAutoplay();
      });
 
      // ✅ Pause autoplay only when hovering on slider buttons
      $('.homepage-slider').on('mouseenter', '.slider-btn a', () => {
        this.owlInstance.trigger('stop.owl.autoplay');
      });
      $('.homepage-slider').on('mouseleave', '.slider-btn a', () => {
        this.owlInstance.trigger('play.owl.autoplay', [8000]);
      });
 
      // Keyboard navigation
      const sliderElement = document.querySelector('.homepage-slider');
      if (sliderElement) {
        sliderElement.addEventListener('mouseenter', () => {
          document.addEventListener('keydown', this.handleArrowKeys);
        });
        sliderElement.addEventListener('mouseleave', () => {
          document.removeEventListener('keydown', this.handleArrowKeys);
        });
      }
    }, 0);
  }
 
  handleArrowKeys = (event: KeyboardEvent) => {
    if (!this.owlInstance) return;
 
    if (event.key === 'ArrowRight') {
      this.owlInstance.trigger('next.owl.carousel');
      this.restartAutoplay();
    } else if (event.key === 'ArrowLeft') {
      this.owlInstance.trigger('prev.owl.carousel');
      this.restartAutoplay();
    }
  };
 
  restartAutoplay() {
    if (this.owlInstance) {
      this.owlInstance.trigger('stop.owl.autoplay');
      this.owlInstance.trigger('play.owl.autoplay', [5000]);
    }
  }
 
  ngOnDestroy() {
    if (this.owlInstance) {
      this.owlInstance.trigger('destroy.owl.carousel');
      $('.homepage-slider').removeClass('owl-loaded').find('.owl-stage-outer').children().unwrap();
    }
    document.removeEventListener('keydown', this.handleArrowKeys);
  }
}