import { animate, style, transition, trigger } from '@angular/animations';

export const routeFadeStateTrigger = trigger('routeFadeState', [
  transition(':enter', [
    style({opacity: 0}),
    animate(600)
  ]),

  transition(':leave', animate(50, style({opacity: 0})))
]);
