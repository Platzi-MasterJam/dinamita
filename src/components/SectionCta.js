import React from 'react';
import _ from 'lodash';

import { htmlToReact } from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionCta extends React.Component {
    render() {
        const section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');
        const title = _.get(section, 'title');
        const subtitle = _.get(section, 'subtitle');
        const actions = _.get(section, 'actions');

        return (
            <section id={sectionId} className="block cta-block bg-accent outer">
                <div className="inner-large">
                    <div className="grid">
                        <div className="cell block-content">
                            {title && <h2 className="block-title">{title}</h2>}
                            {subtitle && <p className="block-copy">{htmlToReact(subtitle)}</p>}
                        </div>
                        {actions && (
                            <div className="cell block-buttons">
                                <CtaButtons actions={actions} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        );
    }
}
