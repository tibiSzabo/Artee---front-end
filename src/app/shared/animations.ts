import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';

export const fadeTrigger = trigger('fadeState', [
  transition(':enter', [
    style({opacity: 0}),
    animate('500ms cubic-bezier(1,.16,.95,.95)')
  ]),

  transition(':leave', animate('500ms cubic-bezier(1,.16,.95,.95)', style({opacity: 0})))
]);

export const headerImageTrigger = trigger('headerImageState', [
  transition('* => *', [
    style({opacity: 0.1}),
    animate(450)
  ])

  // transition(':leave', animate(300, style({opacity: 0})))
]);

export const listItemRemoved = trigger('itemRemovedState', [
  transition(':leave', [
    style({transform: 'scale(1)'}),
    animate('350ms 200ms cubic-bezier(1,.1,1,.99)', style({transform: 'scale(0)'}))
  ])
]);

export const listAnimation = trigger('listAnimation', [
  transition('* => *', [

    query(':enter', style({opacity: 0}), {optional: true}),

    query(':enter', stagger('300ms', [
      animate('1s ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
        style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
        style({opacity: 1, transform: 'translateY(0)', offset: 1.0}),
      ]))]), {optional: true}),

    query(':leave', stagger('300ms', [
      animate('1s ease-in', keyframes([
        style({opacity: 1, transform: 'translateY(0)', offset: 0}),
        style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
        style({opacity: 0, transform: 'translateY(-75%)', offset: 1.0}),
      ]))]), {optional: true})
  ])
]);

