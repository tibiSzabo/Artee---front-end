import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeTrigger = trigger('fadeState', [
  transition(':enter', [
    style({opacity: 0}),
    animate(300)
  ]),

  transition(':leave', animate(300, style({opacity: 0})))
]);

export const headerImageTrigger = trigger('headerImageState', [
  transition('* => *', [
    style({opacity: 0.6}),
    animate(250)
  ])

  // transition(':leave', animate(300, style({opacity: 0})))
]);
