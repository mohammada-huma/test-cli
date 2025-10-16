import { Routes } from '@angular/router';
import { languageLoader } from '@huma-engineering/portal-channels/i18n';
import { provideTranslationScope } from '@huma-engineering/tool-kit/i18n';

export const PORTAL_ROUTES: Routes = [
  {
    path: 'main',
    providers: [provideTranslationScope('channels', languageLoader())],
    loadComponent: () =>
      import('./portal-channels.component').then((c) => c.Channels),
    children: [],
  },
  {
    path: '**',
    redirectTo: 'main',
  },
];
