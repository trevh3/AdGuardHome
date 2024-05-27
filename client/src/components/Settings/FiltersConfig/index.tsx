// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'loda... Remove this comment to see the full error message
import debounce from 'lodash/debounce';

import { DEBOUNCE_TIMEOUT } from '../../../helpers/constants';
// @ts-expect-error TS(6142): Module './Form' was resolved to '/Users/igorlobano... Remove this comment to see the full error message
import Form from './Form';
// @ts-expect-error TS(6142): Module '../../../helpers/helpers' was resolved to ... Remove this comment to see the full error message
import { getObjDiff } from '../../../helpers/helpers';

const FiltersConfig = (props: any) => {
    const { initialValues, processing } = props;

    const handleFormChange = debounce((values: any) => {
        const diff = getObjDiff(initialValues, values);

        if (Object.values(diff).length > 0) {
            props.setFiltersConfig(values);
        }
    }, DEBOUNCE_TIMEOUT);

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Form
            initialValues={initialValues}
            onSubmit={handleFormChange}
            onChange={handleFormChange}
            processing={processing}
        />
    );
};

FiltersConfig.propTypes = {
    initialValues: PropTypes.object.isRequired,
    processing: PropTypes.bool.isRequired,
    setFiltersConfig: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
};

export default withTranslation()(FiltersConfig);
