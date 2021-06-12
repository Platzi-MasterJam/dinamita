import React from 'react';
import _ from 'lodash';

import { htmlToReact, markdownify } from '../utils';

export default class SectionFaq extends React.Component {
    constructor(props) {
        super(props);
        this.handorgelRef = React.createRef();
    }

    componentDidMount() {
        const handorgelElm = _.get(this.handorgelRef, 'current');
        if (handorgelElm) {
            new handorgel(handorgelElm, {
                multiSelectable: true
            });
        }
    }

    renderFaqItem(faqItem, index) {
        const question = _.get(faqItem, 'question');
        const answer = _.get(faqItem, 'answer');

        return (
            <React.Fragment key={index}>
                <h3 className="faq-accordion-header handorgel__header">
                    <button className="handorgel__trigger">
                        <span>{question}</span>
                        <span className="handorgel__icon icon-plus" />
                    </button>
                </h3>
                <div className="faq-accordion-content handorgel__content">
                    <div className="handorgel__content-inner">{markdownify(answer)}</div>
                </div>
            </React.Fragment>
        );
    }

    render() {
        const section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');
        const background = _.get(section, 'background');
        const title = _.get(section, 'title');
        const subtitle = _.get(section, 'subtitle');
        const faqItems = _.get(section, 'faq_items');

        return (
            <section id={sectionId} className={`block faq-block bg-${background} outer`}>
                <div className="inner-small">
                    <div className="block-header">
                        {title && <h2 className="block-title">{title}</h2>}
                        {subtitle && <p className="block-subtitle">{htmlToReact(subtitle)}</p>}
                    </div>
                    {faqItems && (
                        <div className="faq-accordion handorgel" ref={this.handorgelRef}>
                            {_.map(faqItems, (faqItem, index) => this.renderFaqItem(faqItem, index))}
                        </div>
                    )}
                </div>
            </section>
        );
    }
}
