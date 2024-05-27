import {
    sortIp,
    countClientsStatistics,
    findAddressType,
    subnetMaskToBitMask,
// @ts-expect-error TS(6142): Module '../helpers/helpers' was resolved to '/User... Remove this comment to see the full error message
} from '../helpers/helpers';
import { ADDRESS_TYPES } from '../helpers/constants';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('sortIp', () => {
    // @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('ipv4', () => {
        // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
        test('one octet differ', () => {
            const arr = [
                '127.0.2.0',
                '127.0.3.0',
                '127.0.1.0',
            ];
            const sortedArr = [
                '127.0.1.0',
                '127.0.2.0',
                '127.0.3.0',
            ];
            // @ts-expect-error TS(2304): Cannot find name 'expect'.
            expect(arr.sort(sortIp)).toStrictEqual(sortedArr);
        });
        // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
        test('few octets differ', () => {
            const arr = [
                '192.168.11.10',
                '192.168.10.0',
                '192.168.11.11',
                '192.168.10.10',
                '192.168.1.10',
                '192.168.0.1',
                '192.168.1.0',
                '192.168.1.1',
                '192.168.11.0',
                '192.168.0.10',
                '192.168.10.11',
                '192.168.0.11',
                '192.168.1.11',
                '192.168.0.0',
                '192.168.10.1',
                '192.168.11.1',
            ];
            const sortedArr = [
                '192.168.0.0',
                '192.168.0.1',
                '192.168.0.10',
                '192.168.0.11',
                '192.168.1.0',
                '192.168.1.1',
                '192.168.1.10',
                '192.168.1.11',
                '192.168.10.0',
                '192.168.10.1',
                '192.168.10.10',
                '192.168.10.11',
                '192.168.11.0',
                '192.168.11.1',
                '192.168.11.10',
                '192.168.11.11',
            ];
            // @ts-expect-error TS(2304): Cannot find name 'expect'.
            expect(arr.sort(sortIp)).toStrictEqual(sortedArr);

            // Example from issue https://github.com/AdguardTeam/AdGuardHome/issues/1778#issuecomment-640937599
            const arr2 = [
                '192.168.2.11',
                '192.168.3.1',
                '192.168.2.100',
                '192.168.2.2',
                '192.168.2.1',
                '192.168.2.10',
                '192.168.2.99',
                '192.168.2.200',
                '192.168.2.199',
            ];
            const sortedArr2 = [
                '192.168.2.1',
                '192.168.2.2',
                '192.168.2.10',
                '192.168.2.11',
                '192.168.2.99',
                '192.168.2.100',
                '192.168.2.199',
                '192.168.2.200',
                '192.168.3.1',
            ];
            // @ts-expect-error TS(2304): Cannot find name 'expect'.
            expect(arr2.sort(sortIp)).toStrictEqual(sortedArr2);
        });
    });
    // @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('ipv6', () => {
        // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
        test('only long form', () => {
            const arr = [
                '2001:db8:11a3:9d7:0:0:0:2',
                '2001:db8:11a3:9d7:0:0:0:3',
                '2001:db8:11a3:9d7:0:0:0:1',
            ];
            const sortedArr = [
                '2001:db8:11a3:9d7:0:0:0:1',
                '2001:db8:11a3:9d7:0:0:0:2',
                '2001:db8:11a3:9d7:0:0:0:3',
            ];
            // @ts-expect-error TS(2304): Cannot find name 'expect'.
            expect(arr.sort(sortIp)).toStrictEqual(sortedArr);
        });
        // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
        test('only short form', () => {
            const arr = [
                '2001:db8::',
                '2001:db7::',
                '2001:db9::',
            ];
            const sortedArr = [
                '2001:db7::',
                '2001:db8::',
                '2001:db9::',
            ];
            // @ts-expect-error TS(2304): Cannot find name 'expect'.
            expect(arr.sort(sortIp)).toStrictEqual(sortedArr);
        });
        // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
        test('long and short forms', () => {
            const arr = [
                '2001:db8::',
                '2001:db7:11a3:9d7:0:0:0:2',
                '2001:db6:11a3:9d7:0:0:0:1',
                '2001:db6::',
                '2001:db7:11a3:9d7:0:0:0:1',
                '2001:db7::',
            ];
            const sortedArr = [
                '2001:db6::',
                '2001:db6:11a3:9d7:0:0:0:1',
                '2001:db7::',
                '2001:db7:11a3:9d7:0:0:0:1',
                '2001:db7:11a3:9d7:0:0:0:2',
                '2001:db8::',
            ];
            // @ts-expect-error TS(2304): Cannot find name 'expect'.
            expect(arr.sort(sortIp)).toStrictEqual(sortedArr);
        });
    });
    // @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('ipv4 and ipv6', () => {
        // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
        test('ipv6 long form', () => {
            const arr = [
                '127.0.0.3',
                '2001:db8:11a3:9d7:0:0:0:1',
                '2001:db8:11a3:9d7:0:0:0:3',
                '127.0.0.1',
                '2001:db8:11a3:9d7:0:0:0:2',
                '127.0.0.2',
            ];
            const sortedArr = [
                '127.0.0.1',
                '127.0.0.2',
                '127.0.0.3',
                '2001:db8:11a3:9d7:0:0:0:1',
                '2001:db8:11a3:9d7:0:0:0:2',
                '2001:db8:11a3:9d7:0:0:0:3',
            ];
            // @ts-expect-error TS(2304): Cannot find name 'expect'.
            expect(arr.sort(sortIp)).toStrictEqual(sortedArr);
        });
        // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
        test('ipv6 short form', () => {
            const arr = [
                '2001:db8:11a3:9d7::1',
                '127.0.0.3',
                '2001:db8:11a3:9d7::3',
                '127.0.0.1',
                '2001:db8:11a3:9d7::2',
                '127.0.0.2',
            ];
            const sortedArr = [
                '127.0.0.1',
                '127.0.0.2',
                '127.0.0.3',
                '2001:db8:11a3:9d7::1',
                '2001:db8:11a3:9d7::2',
                '2001:db8:11a3:9d7::3',
            ];
            // @ts-expect-error TS(2304): Cannot find name 'expect'.
            expect(arr.sort(sortIp)).toStrictEqual(sortedArr);
        });
        // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
        test('ipv6 long and short forms', () => {
            const arr = [
                '2001:db8:11a3:9d7::1',
                '127.0.0.3',
                '2001:db8:11a3:9d7:0:0:0:2',
                '127.0.0.1',
                '2001:db8:11a3:9d7::3',
                '127.0.0.2',
            ];
            const sortedArr = [
                '127.0.0.1',
                '127.0.0.2',
                '127.0.0.3',
                '2001:db8:11a3:9d7::1',
                '2001:db8:11a3:9d7:0:0:0:2',
                '2001:db8:11a3:9d7::3',
            ];
            // @ts-expect-error TS(2304): Cannot find name 'expect'.
            expect(arr.sort(sortIp)).toStrictEqual(sortedArr);
        });
        // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
        test('always put ipv4 before ipv6', () => {
            const arr = [
                '::1',
                '0.0.0.2',
                '127.0.0.1',
                '::2',
                '2001:db8:11a3:9d7:0:0:0:2',
                '0.0.0.1',
                '2001:db8:11a3:9d7::1',
            ];
            const sortedArr = [
                '0.0.0.1',
                '0.0.0.2',
                '127.0.0.1',
                '::1',
                '::2',
                '2001:db8:11a3:9d7::1',
                '2001:db8:11a3:9d7:0:0:0:2',
            ];
            // @ts-expect-error TS(2304): Cannot find name 'expect'.
            expect(arr.sort(sortIp)).toStrictEqual(sortedArr);
        });
    });
    // @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('cidr', () => {
        // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
        test('only ipv4 cidr', () => {
            const arr = [
                '192.168.0.1/9',
                '192.168.0.1/7',
                '192.168.0.1/8',
            ];
            const sortedArr = [
                '192.168.0.1/7',
                '192.168.0.1/8',
                '192.168.0.1/9',
            ];
            // @ts-expect-error TS(2304): Cannot find name 'expect'.
            expect(arr.sort(sortIp)).toStrictEqual(sortedArr);
        });
        // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
        test('ipv4 and cidr ipv4', () => {
            const arr = [
                '192.168.0.1/9',
                '192.168.0.1',
                '192.168.0.1/32',
                '192.168.0.1/7',
                '192.168.0.1/8',
            ];
            const sortedArr = [
                '192.168.0.1/7',
                '192.168.0.1/8',
                '192.168.0.1/9',
                '192.168.0.1/32',
                '192.168.0.1',
            ];
            // @ts-expect-error TS(2304): Cannot find name 'expect'.
            expect(arr.sort(sortIp)).toStrictEqual(sortedArr);
        });
        // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
        test('only ipv6 cidr', () => {
            const arr = [
                '2001:db8:11a3:9d7::1/32',
                '2001:db8:11a3:9d7::1/64',
                '2001:db8:11a3:9d7::1/128',
                '2001:db8:11a3:9d7::1/24',
            ];
            const sortedArr = [
                '2001:db8:11a3:9d7::1/24',
                '2001:db8:11a3:9d7::1/32',
                '2001:db8:11a3:9d7::1/64',
                '2001:db8:11a3:9d7::1/128',
            ];
            // @ts-expect-error TS(2304): Cannot find name 'expect'.
            expect(arr.sort(sortIp)).toStrictEqual(sortedArr);
        });
        // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
        test('ipv6 and cidr ipv6', () => {
            const arr = [
                '2001:db8:11a3:9d7::1/32',
                '2001:db8:11a3:9d7::1',
                '2001:db8:11a3:9d7::1/64',
                '2001:db8:11a3:9d7::1/128',
                '2001:db8:11a3:9d7::1/24',
            ];
            const sortedArr = [
                '2001:db8:11a3:9d7::1/24',
                '2001:db8:11a3:9d7::1/32',
                '2001:db8:11a3:9d7::1/64',
                '2001:db8:11a3:9d7::1/128',
                '2001:db8:11a3:9d7::1',
            ];
            // @ts-expect-error TS(2304): Cannot find name 'expect'.
            expect(arr.sort(sortIp)).toStrictEqual(sortedArr);
        });
    });
    // @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('invalid input', () => {
        const originalWarn = console.warn;

        // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
        beforeEach(() => {
            // @ts-expect-error TS(2304): Cannot find name 'jest'.
            console.warn = jest.fn();
        });

        // @ts-expect-error TS(2304): Cannot find name 'afterEach'.
        afterEach(() => {
            // @ts-expect-error TS(2304): Cannot find name 'expect'.
            expect(console.warn).toHaveBeenCalled();
            console.warn = originalWarn;
        });

        // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
        test('invalid strings', () => {
            const arr = ['invalid ip', 'invalid cidr'];
            // @ts-expect-error TS(2304): Cannot find name 'expect'.
            expect(arr.sort(sortIp)).toStrictEqual(arr);
        });
        // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
        test('invalid ip', () => {
            const arr = ['127.0.0.2.', '.127.0.0.1.', '.2001:db8:11a3:9d7:0:0:0:0'];
            // @ts-expect-error TS(2304): Cannot find name 'expect'.
            expect(arr.sort(sortIp)).toStrictEqual(arr);
        });
        // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
        test('invalid cidr', () => {
            const arr = ['127.0.0.2/33', '2001:db8:11a3:9d7:0:0:0:0/129'];
            // @ts-expect-error TS(2304): Cannot find name 'expect'.
            expect(arr.sort(sortIp)).toStrictEqual(arr);
        });
        // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
        test('valid and invalid ip', () => {
            const arr = ['127.0.0.4.', '127.0.0.1', '.127.0.0.3', '127.0.0.2'];
            // @ts-expect-error TS(2304): Cannot find name 'expect'.
            expect(arr.sort(sortIp)).toStrictEqual(arr);
        });
    });
    // @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('mixed', () => {
        // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
        test('ipv4, ipv6 in short and long forms and cidr', () => {
            const arr = [
                '2001:db8:11a3:9d7:0:0:0:1/32',
                '192.168.1.2',
                '127.0.0.2',
                '2001:db8:11a3:9d7::1/128',
                '2001:db8:11a3:9d7:0:0:0:1',
                '127.0.0.1/12',
                '192.168.1.1',
                '2001:db8::/32',
                '2001:db8:11a3:9d7::1/24',
                '192.168.1.2/12',
                '2001:db7::/32',
                '127.0.0.1',
                '2001:db8:11a3:9d7:0:0:0:2',
                '192.168.1.1/24',
                '2001:db7::/64',
                '2001:db7::',
                '2001:db8::',
                '2001:db8:11a3:9d7:0:0:0:1/128',
                '192.168.1.1/12',
                '127.0.0.1/32',
                '::1',
            ];
            const sortedArr = [
                '127.0.0.1/12',
                '127.0.0.1/32',
                '127.0.0.1',
                '127.0.0.2',
                '192.168.1.1/12',
                '192.168.1.1/24',
                '192.168.1.1',
                '192.168.1.2/12',
                '192.168.1.2',
                '::1',
                '2001:db7::/32',
                '2001:db7::/64',
                '2001:db7::',
                '2001:db8::/32',
                '2001:db8::',
                '2001:db8:11a3:9d7::1/24',
                '2001:db8:11a3:9d7:0:0:0:1/32',
                '2001:db8:11a3:9d7::1/128',
                '2001:db8:11a3:9d7:0:0:0:1/128',
                '2001:db8:11a3:9d7:0:0:0:1',
                '2001:db8:11a3:9d7:0:0:0:2',
            ];
            // @ts-expect-error TS(2304): Cannot find name 'expect'.
            expect(arr.sort(sortIp)).toStrictEqual(sortedArr);
        });
    });
});

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('findAddressType', () => {
    // @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('ip', () => {
        // @ts-expect-error TS(2304): Cannot find name 'expect'.
        expect(findAddressType('127.0.0.1')).toStrictEqual(ADDRESS_TYPES.IP);
    });
    // @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('cidr', () => {
        // @ts-expect-error TS(2304): Cannot find name 'expect'.
        expect(findAddressType('127.0.0.1/8')).toStrictEqual(ADDRESS_TYPES.CIDR);
    });
    // @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('mac', () => {
        // @ts-expect-error TS(2304): Cannot find name 'expect'.
        expect(findAddressType('00:1B:44:11:3A:B7')).toStrictEqual(ADDRESS_TYPES.UNKNOWN);
    });
});

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('countClientsStatistics', () => {
    // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('single ip', () => {
        // @ts-expect-error TS(2304): Cannot find name 'expect'.
        expect(countClientsStatistics(['127.0.0.1'], {
            '127.0.0.1': 1,
        })).toStrictEqual(1);
    });
    // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('multiple ip', () => {
        // @ts-expect-error TS(2304): Cannot find name 'expect'.
        expect(countClientsStatistics(['127.0.0.1', '127.0.0.2'], {
            '127.0.0.1': 1,
            '127.0.0.2': 2,
        })).toStrictEqual(1 + 2);
    });
    // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('cidr', () => {
        // @ts-expect-error TS(2304): Cannot find name 'expect'.
        expect(countClientsStatistics(['127.0.0.0/8'], {
            '127.0.0.1': 1,
            '127.0.0.2': 2,
        })).toStrictEqual(1 + 2);
    });
    // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('cidr and multiple ip', () => {
        // @ts-expect-error TS(2304): Cannot find name 'expect'.
        expect(countClientsStatistics(['1.1.1.1', '2.2.2.2', '3.3.3.0/24'], {
            '1.1.1.1': 1,
            '2.2.2.2': 2,
            '3.3.3.3': 3,
        })).toStrictEqual(1 + 2 + 3);
    });
    // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('mac', () => {
        // @ts-expect-error TS(2304): Cannot find name 'expect'.
        expect(countClientsStatistics(['00:1B:44:11:3A:B7', '2.2.2.2', '3.3.3.0/24'], {
            '1.1.1.1': 1,
            '2.2.2.2': 2,
            '3.3.3.3': 3,
        })).toStrictEqual(2 + 3);
    });
    // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('not found', () => {
        // @ts-expect-error TS(2304): Cannot find name 'expect'.
        expect(countClientsStatistics(['4.4.4.4', '5.5.5.5', '6.6.6.6'], {
            '1.1.1.1': 1,
            '2.2.2.2': 2,
            '3.3.3.3': 3,
        })).toStrictEqual(0);
    });
});

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('subnetMaskToBitMask', () => {
    const subnetMasks = [
        '0.0.0.0',
        '128.0.0.0',
        '192.0.0.0',
        '224.0.0.0',
        '240.0.0.0',
        '248.0.0.0',
        '252.0.0.0',
        '254.0.0.0',
        '255.0.0.0',
        '255.128.0.0',
        '255.192.0.0',
        '255.224.0.0',
        '255.240.0.0',
        '255.248.0.0',
        '255.252.0.0',
        '255.254.0.0',
        '255.255.0.0',
        '255.255.128.0',
        '255.255.192.0',
        '255.255.224.0',
        '255.255.240.0',
        '255.255.248.0',
        '255.255.252.0',
        '255.255.254.0',
        '255.255.255.0',
        '255.255.255.128',
        '255.255.255.192',
        '255.255.255.224',
        '255.255.255.240',
        '255.255.255.248',
        '255.255.255.252',
        '255.255.255.254',
        '255.255.255.255',
    ];

    // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('correct for all subnetMasks', () => {
        // @ts-expect-error TS(2304): Cannot find name 'expect'.
        expect(
            subnetMasks.map((subnetMask) => {
                const bitmask = subnetMaskToBitMask(subnetMask);
                return subnetMasks[bitmask] === subnetMask;
            }).every((res) => res === true),
        ).toEqual(true);
    });
});
