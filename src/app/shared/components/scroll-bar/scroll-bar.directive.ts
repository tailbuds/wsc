import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScrollBar]',
})
export class ScrollBarDirective {
  constructor(el: ElementRef) {
    const stylesheet = `
      ::-webkit-scrollbar {
      width: 5px;

      }
      ::-webkit-scrollbar-track {
      background: #f2f2f2;
      border-radius: 1rem
      }
      ::-webkit-scrollbar-thumb {
      border-radius: 1rem;
      background: linear-gradient(var(--ion-color-light-tint), var(--ion-color-light));
      border: 4px solid #B7B7B7;
      }
      ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(var(--ion-color-light-tint), var(--ion-color-light));
      border: 4px solid #6E6E6E;
      }
    `;
    const styleElmt = el.nativeElement.shadowRoot.querySelector('style');

    if (styleElmt) {
      styleElmt.append(stylesheet);
    } else {
      const barStyle = document.createElement('style');
      barStyle.append(stylesheet);
      el.nativeElement.shadowRoot.appendChild(barStyle);
    }
  }
}
