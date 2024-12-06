import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Pastikan jalur ini benar
import { AppComponent } from './app/app.component'; // Pastikan AppComponent diimpor dengan benar

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
