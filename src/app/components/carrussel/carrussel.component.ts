import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  interval,
  Observable,
  startWith,
  Subject,
  switchMap,
  timer,
} from 'rxjs';
import { SlideInterface } from './slide.interface';

@Component({
  selector: 'app-carrussel',
  templateUrl: './carrussel.component.html',
  styleUrls: ['./carrussel.component.css']
})
export class CarrusselComponent implements OnInit, OnDestroy {
  @Input () project_images_carrussel: SlideInterface[] = [];

  currentIndex: number = 0;
  timeoutId?: number;

  delay: number = 2000;

  fade = 'slide '

  ngOnInit(): void {
    this.resetTimer();
  }
  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }
  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => {
      this.goToNext();
      this.fadesIn();
      this.fadesRemove();
    }, this.delay);

    this.delay = Number(this.project_images_carrussel[0].milisegs)
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.project_images_carrussel.length - 1
      : this.currentIndex - 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.project_images_carrussel.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }

  getCurrentSlideUrl() {
    return `url('${this.project_images_carrussel[this.currentIndex].url}')`;
  }

  fadesIn() {
    this.fade += 'animate__animated animate__fadeIn';
  }

  fadesRemove() {
    setTimeout(()=>{
      this.fade = 'slide ';
    }, 1000)
  }
}
