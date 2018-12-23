import { animate, style, transition, trigger } from '@angular/animations';

export const routeFadeStateTrigger = trigger('routeFadeState', [
  transition(':enter', [
    style({opacity: 0}),
    animate(400)
  ]),

  transition(':leave', animate(400, style({opacity: 0})))
]);
