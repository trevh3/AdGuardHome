// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useSelector, shallowEqual } from 'react-redux';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { TOAST_TRANSITION_TIMEOUT } from '../../helpers/constants';
// @ts-expect-error TS(6142): Module './Toast' was resolved to '/Users/igorloban... Remove this comment to see the full error message
import Toast from './Toast';
import './Toast.css';

const Toasts = () => {
    const toasts = useSelector((state: any) => state.toasts, shallowEqual);

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TransitionGroup className="toasts">
            {toasts.notices?.map((toast: any) => {
                const { id } = toast;
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                return <CSSTransition
                        key={id}
                        timeout={TOAST_TRANSITION_TIMEOUT}
                        classNames="toast"
                >
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Toast {...toast} />
                </CSSTransition>;
            })}
        </TransitionGroup>
    );
};

export default Toasts;
