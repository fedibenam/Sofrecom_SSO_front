import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
 
@Component({
selector: 'app-news',
templateUrl: './news.component.html',
styleUrls: ['./news.component.scss']
})
export class NewsComponent implements AfterViewInit, OnDestroy {
@ViewChild('newsSlider') sliderRef!: ElementRef<HTMLDivElement>;
 
news = [
{
title: 'Titre 1',
description: 'Paragraphe pour la news 1.',
image: 'assets/news1.jpg'
},
{
title: 'Titre 2',
description: 'Paragraphe pour la news 2.',
image: 'assets/news2.jfif'
},
{
title: 'Titre 3',
description: 'Paragraphe pour la news 3.',
image: 'assets/N3.jpg'
}
];
 
activeIndex = 0;
 
private items: HTMLElement[] = [];
private freezeScroll = false;
private isHovering = false;
private hoverTimer: any;
private reFreezeTimer: any;
private lastScrollTime = 0;
private scrollAttemptsAtEdge = 0;
 
private readonly SCROLL_DELAY = 100;
private readonly HOVER_DELAY = 1000;
private readonly REFREEZE_DELAY = 2000;
private readonly SCROLL_THRESHOLD = 4;
private readonly MAX_SCROLL_ATTEMPTS = 10;
 
private wheelHandler = this.handleWheel.bind(this);
private scrollHandler = this.handleScroll.bind(this);
 
ngAfterViewInit(): void {
const slider = this.sliderRef.nativeElement;
this.items = Array.from(slider.querySelectorAll('.news-item')) as HTMLElement[];
 
window.addEventListener('scroll', this.scrollHandler, { passive: true });
window.addEventListener('wheel', this.wheelHandler, { passive: false });
 
slider.addEventListener('mouseenter', this.onMouseEnter.bind(this));
slider.addEventListener('mouseleave', this.onMouseLeave.bind(this));
 
this.showItem(this.activeIndex);
 
}
 
ngOnDestroy(): void {
window.removeEventListener('scroll', this.scrollHandler);
window.removeEventListener('wheel', this.wheelHandler);
}
 
private showItem(index: number) {
this.items.forEach((item, i) => {
item.style.transform = `translateY(${(i - index) * 100}%)`;
item.style.transition = 'transform 0.6s ease-in-out';
});
}
 
private unfreeze() {
this.freezeScroll = false;
this.scrollAttemptsAtEdge = 0;
}
 
private handleScroll() {
if (this.freezeScroll) return;
 
const slider = this.sliderRef.nativeElement;
const rect = slider.getBoundingClientRect();
const sliderHeight = slider.offsetHeight;
const viewportHeight = window.innerHeight;
 
if (rect.top < viewportHeight && rect.bottom > 0) {
  const visiblePercent = 1 - (rect.bottom / (viewportHeight + sliderHeight));
  const index = Math.min(
    this.items.length - 1,
    Math.max(0, Math.floor(visiblePercent * this.items.length))
  );
 
  if (index !== this.activeIndex) {
    this.activeIndex = index;
    this.showItem(this.activeIndex);
  }
}
 
}
 
private handleWheel(e: WheelEvent) {
if (!this.freezeScroll || !this.isHovering) return;
 
const now = Date.now();
if (now - this.lastScrollTime < this.SCROLL_DELAY) {
  e.preventDefault();
  return;
}
 
let moved = false;
 
if (e.deltaY > this.SCROLL_THRESHOLD && this.activeIndex < this.items.length - 1) {
  this.activeIndex++;
  moved = true;
} else if (e.deltaY < -this.SCROLL_THRESHOLD && this.activeIndex > 0) {
  this.activeIndex--;
  moved = true;
} else if (
  (e.deltaY > this.SCROLL_THRESHOLD && this.activeIndex === this.items.length - 1) ||
  (e.deltaY < -this.SCROLL_THRESHOLD && this.activeIndex === 0)
) {
  this.scrollAttemptsAtEdge++;
  if (this.scrollAttemptsAtEdge >= this.MAX_SCROLL_ATTEMPTS) {
    this.unfreeze();
  }
}
 
if (moved) {
  this.scrollAttemptsAtEdge = 0;
  this.showItem(this.activeIndex);
}
 
this.lastScrollTime = now;
e.preventDefault();
 
}
 
private onMouseEnter() {
clearTimeout(this.reFreezeTimer);
this.hoverTimer = setTimeout(() => {
this.freezeScroll = true;
this.isHovering = true;
}, this.HOVER_DELAY);
}
 
private onMouseLeave() {
clearTimeout(this.hoverTimer);
this.reFreezeTimer = setTimeout(() => {
if (this.isHovering && !this.freezeScroll) {
this.freezeScroll = true;
}
}, this.REFREEZE_DELAY);
 
this.isHovering = false;
this.unfreeze();
 
}
}