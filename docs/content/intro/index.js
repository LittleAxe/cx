export * from './About';
export * from './GettingStarted';
export * from './FeatureList';
export * from './CommandLine';
export * from './StepByStep';
export * from './Jsx';

import { bumpVersion } from '../version';

//HMR
if (module.hot) {
    module.hot.accept();
    bumpVersion();
}