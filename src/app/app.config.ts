import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAppConfig, provideFirebaseService } from 'common-service';
import { environment } from '~environments/environment';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { HTTPLoaderFactory } from './loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAppConfig(environment),
    provideHttpClient(),
    provideFirebaseService(environment.firebaseConfig),
    provideTranslateService({
      defaultLanguage: environment.defaultLang,
      loader: {
        provide: TranslateLoader,
        useFactory: HTTPLoaderFactory,
        deps: [HttpClient],
      },
    }),
    importProvidersFrom([]),
  ]
};
