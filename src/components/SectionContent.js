import React from 'react';
import _ from 'lodash';

import { withPrefix, markdownify } from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionContent extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');
        const background = _.get(section, 'background');
        const image = _.get(section, 'image');
        const imageAlt = _.get(section, 'image_alt');
        const title = _.get(section, 'title');
        const content = _.get(section, 'content');
        const actions = _.get(section, 'actions');

        return (
            <section id={sectionId} className={`block text-block bg-${background} outer`}>
                <div className="inner">
                    <div className="grid">
                        {image && (
                            <div className="cell block-preview">
                                <img src={withPrefix(image)} alt={imageAlt} />
                            </div>
                        )}
                        <div className="cell block-content">
                            {title && <h2 className="block-title underline">{title}</h2>}
                            {content && <div className="block-copy">{markdownify(content)}</div>}
                            {actions && (
                                <div className="block-buttons">
                                    <CtaButtons actions={actions} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
