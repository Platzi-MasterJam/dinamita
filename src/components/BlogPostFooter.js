import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import { getData } from '../utils';

export default class BlogPostFooter extends React.Component {
    render() {
        const post = _.get(this.props, 'post');
        const dateType = _.get(this.props, 'dateType');
        const data = _.get(this.props, 'data');
        const date = _.get(post, 'date');
        const dateTimeAttr = moment(date).strftime('%Y-%m-%d %H:%M');
        const formattedDate = dateType === 'short' ? moment(date).strftime('%B %d, %Y') : moment(date).strftime('%A, %B %e, %Y');
        const postAuthorRef = _.get(post, 'author');
        const author = postAuthorRef ? getData(data, postAuthorRef) : null;
        const authorName = author ? _.trim(`${author.first_name} ${author.last_name}`) : null;

        return (
            <footer className="post-meta">
                <time className="published" dateTime={dateTimeAttr}>
                    {formattedDate}
                </time>
                {authorName && `, by ${authorName}`}
            </footer>
        );
    }
}
