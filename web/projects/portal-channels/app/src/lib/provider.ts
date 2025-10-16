import { createStandaloneAppProvider } from '@huma-engineering/app-kit';
import { ChannelsApp } from './portal-channels.app';

/**
 * Provides the Channels as a standalone application.
 */
export const includingChannels = createStandaloneAppProvider(ChannelsApp);
