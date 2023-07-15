import { Component, ElementRef, HostListener, Inject, Renderer2 } from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cars-website';
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  @HostListener("window:scroll", ['$event'])
  onWindowScroll(e: Event) {
    let goTopElement = this.elementRef.nativeElement.querySelector(".go-top");
    let display = this.document.documentElement.scrollTop >= 500 || this.document.body.scrollTop >= 500 ? 'block' : 'none';
    this.renderer.setStyle(goTopElement, 'display', display);
  }

  goTop() {
    let scrollStep = -window.scrollY / (300 / 15),
      scrollInterval = setInterval(() => {
        if (window.scrollY != 0) {
          window.scrollBy(0, scrollStep);
        }
        else {
          clearInterval(scrollInterval);
        };
      }, 15);
  }

}

