import { API } from 'compressarr';

import { PLATFORM_NAME } from './settings';
import { ExampleCompressarrJobAction } from './jobAction';

/**
 * This method registers the job action with Compressarr.
 */
export = (api: API) => {
    api.registerJobAction(PLATFORM_NAME, ExampleCompressarrJobAction);
};