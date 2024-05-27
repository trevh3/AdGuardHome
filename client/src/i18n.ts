import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import langDetect from 'i18next-browser-languagedetector';

import { LANGUAGES, BASE_LOCALE } from './helpers/twosky';

// @ts-expect-error TS(2732): Cannot find module './__locales/ar.json'. Consider... Remove this comment to see the full error message
import ar from './__locales/ar.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/be.json'. Consider... Remove this comment to see the full error message
import be from './__locales/be.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/bg.json'. Consider... Remove this comment to see the full error message
import bg from './__locales/bg.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/cs.json'. Consider... Remove this comment to see the full error message
import cs from './__locales/cs.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/da.json'. Consider... Remove this comment to see the full error message
import da from './__locales/da.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/de.json'. Consider... Remove this comment to see the full error message
import de from './__locales/de.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/en.json'. Consider... Remove this comment to see the full error message
import en from './__locales/en.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/es.json'. Consider... Remove this comment to see the full error message
import es from './__locales/es.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/fa.json'. Consider... Remove this comment to see the full error message
import fa from './__locales/fa.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/fi.json'. Consider... Remove this comment to see the full error message
import fi from './__locales/fi.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/fr.json'. Consider... Remove this comment to see the full error message
import fr from './__locales/fr.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/hr.json'. Consider... Remove this comment to see the full error message
import hr from './__locales/hr.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/hu.json'. Consider... Remove this comment to see the full error message
import hu from './__locales/hu.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/id.json'. Consider... Remove this comment to see the full error message
import id from './__locales/id.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/it.json'. Consider... Remove this comment to see the full error message
import it from './__locales/it.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/ja.json'. Consider... Remove this comment to see the full error message
import ja from './__locales/ja.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/ko.json'. Consider... Remove this comment to see the full error message
import ko from './__locales/ko.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/nl.json'. Consider... Remove this comment to see the full error message
import nl from './__locales/nl.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/no.json'. Consider... Remove this comment to see the full error message
import no from './__locales/no.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/pl.json'. Consider... Remove this comment to see the full error message
import pl from './__locales/pl.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/pt-br.json'. Consi... Remove this comment to see the full error message
import ptBR from './__locales/pt-br.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/pt-pt.json'. Consi... Remove this comment to see the full error message
import ptPT from './__locales/pt-pt.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/ro.json'. Consider... Remove this comment to see the full error message
import ro from './__locales/ro.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/ru.json'. Consider... Remove this comment to see the full error message
import ru from './__locales/ru.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/si-lk.json'. Consi... Remove this comment to see the full error message
import siLk from './__locales/si-lk.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/sk.json'. Consider... Remove this comment to see the full error message
import sk from './__locales/sk.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/sl.json'. Consider... Remove this comment to see the full error message
import sl from './__locales/sl.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/sr-cs.json'. Consi... Remove this comment to see the full error message
import srCS from './__locales/sr-cs.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/sv.json'. Consider... Remove this comment to see the full error message
import sv from './__locales/sv.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/th.json'. Consider... Remove this comment to see the full error message
import th from './__locales/th.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/tr.json'. Consider... Remove this comment to see the full error message
import tr from './__locales/tr.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/uk.json'. Consider... Remove this comment to see the full error message
import uk from './__locales/uk.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/vi.json'. Consider... Remove this comment to see the full error message
import vi from './__locales/vi.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/zh-cn.json'. Consi... Remove this comment to see the full error message
import zhCN from './__locales/zh-cn.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/zh-hk.json'. Consi... Remove this comment to see the full error message
import zhHK from './__locales/zh-hk.json';
// @ts-expect-error TS(2732): Cannot find module './__locales/zh-tw.json'. Consi... Remove this comment to see the full error message
import zhTW from './__locales/zh-tw.json';
// @ts-expect-error TS(6142): Module './helpers/helpers' was resolved to '/Users... Remove this comment to see the full error message
import { setHtmlLangAttr } from './helpers/helpers';

const resources = {
    ar: { translation: ar },
    be: { translation: be },
    bg: { translation: bg },
    cs: { translation: cs },
    da: { translation: da },
    de: { translation: de },
    en: { translation: en },
    'en-us': { translation: en },
    es: { translation: es },
    fa: { translation: fa },
    fi: { translation: fi },
    fr: { translation: fr },
    hr: { translation: hr },
    hu: { translation: hu },
    id: { translation: id },
    it: { translation: it },
    ja: { translation: ja },
    ko: { translation: ko },
    nl: { translation: nl },
    no: { translation: no },
    pl: { translation: pl },
    'pt-br': { translation: ptBR },
    'pt-pt': { translation: ptPT },
    ro: { translation: ro },
    ru: { translation: ru },
    'si-lk': { translation: siLk },
    sk: { translation: sk },
    sl: { translation: sl },
    'sr-cs': { translation: srCS },
    sv: { translation: sv },
    th: { translation: th },
    tr: { translation: tr },
    uk: { translation: uk },
    vi: { translation: vi },
    'zh-cn': { translation: zhCN },
    'zh-hk': { translation: zhHK },
    'zh-tw': { translation: zhTW },
};

const availableLanguages = Object.keys(LANGUAGES);

i18n
    .use(langDetect)
    .use(initReactI18next)
    .init(
        {
            resources,
            lowerCaseLng: true,
            fallbackLng: BASE_LOCALE,
            keySeparator: false,
            nsSeparator: false,
            returnEmptyString: false,
            interpolation: {
                escapeValue: false,
            },
            react: {
                wait: true,
            },
            whitelist: availableLanguages,
        },
        () => {
            if (!availableLanguages.includes(i18n.language)) {
                i18n.changeLanguage(BASE_LOCALE);
            }
            setHtmlLangAttr(i18n.language);
        },
    );

export default i18n;
