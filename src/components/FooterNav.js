import React from 'react';
import _ from 'lodash';

import Action from './Action';

export default class FooterNav extends React.Component {
    render() {
        const section = _.get(this.props, 'section');
        const title = _.get(section, 'title');
        const navLinks = _.get(section, 'nav_links');

        return (
            <section className="cell widget widget-nav">
                {title && <h2 className="widget-title">{title}</h2>}
                {navLinks && (
                    <ul className="menu">
                        {_.map(navLinks, (action, actionIdx) => (
                            <li key={actionIdx} className="menu-item">
                                <Action action={action} />
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        );
    }
}
