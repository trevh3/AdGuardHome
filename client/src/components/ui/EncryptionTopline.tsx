// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import { Trans } from 'react-i18next';
import isAfter from 'date-fns/is_after';
import addDays from 'date-fns/add_days';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useSelector } from 'react-redux';
// @ts-expect-error TS(6142): Module './Topline' was resolved to '/Users/igorlob... Remove this comment to see the full error message
import Topline from './Topline';
import { EMPTY_DATE } from '../../helpers/constants';

const EXPIRATION_ENUM = {
    VALID: 'VALID',
    EXPIRED: 'EXPIRED',
    EXPIRING: 'EXPIRING',
};

const EXPIRATION_STATE = {
    [EXPIRATION_ENUM.EXPIRED]: {
        toplineType: 'danger',
        i18nKey: 'topline_expired_certificate',
    },
    [EXPIRATION_ENUM.EXPIRING]: {
        toplineType: 'warning',
        i18nKey: 'topline_expiring_certificate',
    },
};

const getExpirationFlags = (not_after: any) => {
    const DAYS_BEFORE_EXPIRATION = 5;

    const now = Date.now();
    const isExpiring = isAfter(addDays(now, DAYS_BEFORE_EXPIRATION), not_after);
    const isExpired = isAfter(now, not_after);

    return {
        isExpiring,
        isExpired,
    };
};

const getExpirationEnumKey = (not_after: any) => {
    const { isExpiring, isExpired } = getExpirationFlags(not_after);

    if (isExpired) {
        return EXPIRATION_ENUM.EXPIRED;
    }

    if (isExpiring) {
        return EXPIRATION_ENUM.EXPIRING;
    }

    return EXPIRATION_ENUM.VALID;
};

const EncryptionTopline = () => {
    const not_after = useSelector((state: any) => state.encryption.not_after);

    if (not_after === EMPTY_DATE) {
        return null;
    }

    const expirationStateKey = getExpirationEnumKey(not_after);

    if (expirationStateKey === EXPIRATION_ENUM.VALID) {
        return null;
    }

    const { toplineType, i18nKey } = EXPIRATION_STATE[expirationStateKey];

    return (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Topline type={toplineType}>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Trans components={[<a href="#encryption" key="0">link</a>]}>
                    {i18nKey}
                </Trans>
            </Topline>
    );
};

export default EncryptionTopline;
