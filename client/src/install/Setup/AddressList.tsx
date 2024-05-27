// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';

// @ts-expect-error TS(6142): Module '../../helpers/helpers' was resolved to '/U... Remove this comment to see the full error message
import { getIpList, getDnsAddress, getWebAddress } from '../../helpers/helpers';
import { ALL_INTERFACES_IP } from '../../helpers/constants';

const renderItem = ({
    ip,
    port,
    isDns,
}: any) => {
    const webAddress = getWebAddress(ip, port);
    const dnsAddress = getDnsAddress(ip, port);

    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    return <li key={ip}>{isDns
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        ? <strong>{dnsAddress}</strong>
        // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        : <a href={webAddress} target="_blank" rel="noopener noreferrer">{webAddress}</a>
    }
    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    </li>;
};

const AddressList = ({
    address,
    interfaces,
    port,
    isDns,
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
}: any) => <ul className="list-group pl-4">{
    address === ALL_INTERFACES_IP
        ? getIpList(interfaces)
            .map((ip: any) => renderItem({
                ip,
                port,
                isDns,
            }))
        : renderItem({
            ip: address,
            port,
            isDns,
        })
}
// @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
</ul>;

AddressList.propTypes = {
    interfaces: PropTypes.object.isRequired,
    address: PropTypes.string.isRequired,
    port: PropTypes.number.isRequired,
    isDns: PropTypes.bool,
};

renderItem.propTypes = {
    ip: PropTypes.string.isRequired,
    port: PropTypes.number.isRequired,
    isDns: PropTypes.bool.isRequired,
};

export default AddressList;
