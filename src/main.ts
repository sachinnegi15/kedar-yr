import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    window.requestAnimationFrame(() => {
      document.body.classList.add('loaded');
    });
  })
  .catch((err) => console.error(err));