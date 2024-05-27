// @ts-expect-error TS(2732): Cannot find module 'MainRoot/.twosky.json'. Consid... Remove this comment to see the full error message
// eslint-disable-next-line import/no-extraneous-dependencies
import twosky from 'MainRoot/.twosky.json';

export const {
    languages: LANGUAGES,
    base_locale: BASE_LOCALE,
} = twosky[0];
