// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import classnames from 'classnames';
import { COMMENT_LINE_DEFAULT_TOKEN } from './constants';

const renderHighlightedLine = (line: any, idx: any, commentLineTokens = [COMMENT_LINE_DEFAULT_TOKEN]) => {
    const isComment = commentLineTokens.some((token) => line.trim().startsWith(token));

    const lineClassName = classnames({
        'text-gray': isComment,
        'text-transparent': !isComment,
    });

    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    return <div className={lineClassName} key={idx}>{line || '\n'}</div>;
};
export const getTextareaCommentsHighlight = (ref: any, lines: any, className = '', commentLineTokens: any) => {
    const renderLine = (line: any, idx: any) => renderHighlightedLine(line, idx, commentLineTokens);

    // @ts-expect-error TS(7026): JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    return <code className={classnames('text-output font-monospace', className)} ref={ref}>{lines?.split('\n').map(renderLine)}</code>;
};

export const syncScroll = (e: any, ref: any) => {
    // eslint-disable-next-line no-param-reassign
    ref.current.scrollTop = e.target.scrollTop;
};
