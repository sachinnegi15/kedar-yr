import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export const revealAnimation = trigger('reveal', [
  state('hidden', style({
    opacity: 0,
    transform: 'translateY(10px)'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'translateY(0)'
  })),
  transition('hidden => visible', [
    animate('400ms cubic-bezier(0.33, 1, 0.68, 1)')
  ])
]);
