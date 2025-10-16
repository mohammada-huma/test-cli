import {
  bootstrapStandaloneApps,
  type ProvidableApp,
  withShellEnvironment,
} from '@huma-engineering/app-kit';
import { includingChannels } from '@huma-engineering/portal-channels/app';
import { environment } from './environments/environment.development';

const apps: ProvidableApp[] = [includingChannels()];

export const standaloneApps = bootstrapStandaloneApps(
  withShellEnvironment({
    hostUrl: environment.HOST_URL,
  }),
  ...apps,
);
