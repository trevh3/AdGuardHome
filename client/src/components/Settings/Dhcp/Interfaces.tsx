// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { shallowEqual, useSelector } from 'react-redux';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import { Field, reduxForm } from 'redux-form';
import { Trans, useTranslation } from 'react-i18next';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import propTypes from 'prop-types';
// @ts-expect-error TS(6142): Module '../../../helpers/form' was resolved to '/U... Remove this comment to see the full error message
import { renderSelectField } from '../../../helpers/form';
import { validateRequiredValue } from '../../../helpers/validators';
import { FORM_NAME } from '../../../helpers/constants';

const renderInterfaces = (interfaces: any) => Object.keys(interfaces)
    .map((item) => {
        const option = interfaces[item];
        const { name } = option;

        const [interfaceIPv4] = option?.ipv4_addresses ?? [];
        const [interfaceIPv6] = option?.ipv6_addresses ?? [];

        const optionContent = [name, interfaceIPv4, interfaceIPv6].filter(Boolean).join(' - ');

        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        return <option value={name} key={name}>{optionContent}</option>;
    });

const getInterfaceValues = ({
    gateway_ip,
    hardware_address,
    ip_addresses,
}: any) => [
    {
        name: 'dhcp_form_gateway_input',
        value: gateway_ip,
    },
    {
        name: 'dhcp_hardware_address',
        value: hardware_address,
    },
    {
        name: 'dhcp_ip_addresses',
        value: ip_addresses,
        render: (ip_addresses: any) => ip_addresses
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            .map((ip: any) => <span key={ip} className="interface__ip">{ip}</span>),
    },
];

const renderInterfaceValues = ({
    gateway_ip,
    hardware_address,
    ip_addresses,
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
}: any) => <div className='d-flex align-items-end dhcp__interfaces-info'>
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <ul className="list-unstyled m-0">
        {getInterfaceValues({
            gateway_ip,
            hardware_address,
            ip_addresses,
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        }).map(({ name, value, render }) => value && <li key={name}>
            // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            <span className="interface__title"><Trans>{name}</Trans>: </span>
            {render?.(value) || value}
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </li>)}
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </ul>
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
</div>;

const Interfaces = () => {
    const { t } = useTranslation();

    const {
        processingInterfaces,
        interfaces,
        enabled,
    } = useSelector((store: any) => store.dhcp, shallowEqual);

    const interface_name = useSelector(
        (store: any) => store.form[FORM_NAME.DHCP_INTERFACES]?.values?.interface_name,
    );

    if (processingInterfaces || !interfaces) {
        return null;
    }

    const interfaceValue = interface_name && interfaces[interface_name];

    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    return <div className="row dhcp__interfaces">
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <div className="col col__dhcp">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Field
                    name="interface_name"
                    component={renderSelectField}
                    className="form-control custom-select pl-4 col-md"
                    validate={[validateRequiredValue]}
                    label='dhcp_interface_select'
            >
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                <option value='' disabled={enabled}>
                    {t('dhcp_interface_select')}
                // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                </option>
                {renderInterfaces(interfaces)}
            </Field>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        </div>
        {interfaceValue
        && renderInterfaceValues(interfaceValue)}
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </div>;
};

renderInterfaceValues.propTypes = {
    gateway_ip: propTypes.string.isRequired,
    hardware_address: propTypes.string.isRequired,
    ip_addresses: propTypes.arrayOf(propTypes.string).isRequired,
};

export default reduxForm({
    form: FORM_NAME.DHCP_INTERFACES,
})(Interfaces);
