import React from 'react';
import _ from 'lodash';

import { Link, withPrefix, classNames } from '../utils';
import Icon from './Icon';

export default class Action extends React.Component {
    render() {
        const action = _.get(this.props, 'action');
        const url = _.get(action, 'url');
        const label = _.get(action, 'label');
        const actionStyle = _.get(action, 'style', 'link');
        const hasIcon = _.get(action, 'has_icon');
        const actionIcon = _.get(action, 'icon', 'arrow-left');
        const actionIconPos = _.get(action, 'icon_position', 'left');
        const newWindow = _.get(action, 'new_window');
        const noFollow = _.get(action, 'no_follow');
        const attrs = {};
        if (newWindow) {
            attrs.target = '_blank';
        }
        if (newWindow || noFollow) {
            attrs.rel = [(newWindow ? 'noopener' : '') + (noFollow ? 'nofollow' : '')].join(' ');
        }

        return (
            <Link
                href={withPrefix(url)}
                {...attrs}
                className={classNames({
                    button: actionStyle === 'primary' || actionStyle === 'secondary',
                    secondary: actionStyle === 'secondary',
                    'has-icon': hasIcon
                })}
            >
                {hasIcon && <Icon icon={actionIcon} />}
                <span className={classNames({ 'order-first': actionIconPos === 'right' })}>{label}</span>
            </Link>
        );
    }
}
