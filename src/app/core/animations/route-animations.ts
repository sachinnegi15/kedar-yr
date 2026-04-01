import {
  trigger,
  transition,
  style,
  query,
  animate
} from '@angular/animations';

export const fadeRouteAnimation = trigger('routeAnimations', [
  // We use a clean, fast fade-in for the entering page only.
  // This is the most reliable way to prevent 'flickering' and 'layout jumping'
  // that occurs when two pages exist simultaneously in the DOM.
  // `duration` is set from MotionPreferenceService (1ms when prefers-reduced-motion).
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({
          opacity: 0,
          display: 'block',
        }),
        animate('{{duration}} ease-out', style({ opacity: 1 })),
      ],
      { optional: true },
    ),
  ]),
]);
