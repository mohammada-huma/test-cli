import { StandaloneApp } from '@huma-engineering/app-kit';

/** Channels's Main Application Class */
export class ChannelsApp extends StandaloneApp {
  override readonly id = 'PORTAL_CHANNELS';

  override readonly name = 'Channels portal';

  override readonly description = 'Sample description';

  override readonly routingConfig = {
    prefix: 'portal-channels',
    routeLoader: () =>
      import('./portal-channels.routes').then((r) => r.PORTAL_ROUTES),
  };

  /** @inheritdoc */
  override hasAccess(): boolean {
    return true;
  }
}
