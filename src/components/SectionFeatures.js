import React from 'react';
import _ from 'lodash';
import {json} from '../../MOCK_DATA'

import { htmlToReact, withPrefix, markdownify } from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionFeatures extends React.Component {
/*     constructor(props) {
        super(props);
        this.state = {

        };
    } */
    renderFeature(feature, index) {
        const image = _.get(feature, 'image');
        const imageAlt = _.get(feature, 'image_alt');
        const title = _.get(feature, 'title');
        const content = _.get(feature, 'content');
        const actions = _.get(feature, 'actions');
        const valueElement = _.get(feature, 'valueElement')

        return (
            <div key={index} className="block-item">
                <div className="grid">
                    {image && (
                        <div className="cell block-preview featureCustom_space">
                            <img src={withPrefix(image)} alt={imageAlt} class="featureCustom_space-img" />
                            <p className="featureCustom_space-value block-title">{markdownify(valueElement)}</p>
                        </div>
                    )}
                    <div className="cell block-content">
                        <h3 className="block-title underline">{title}</h3>
                        <div className="block-copy">{markdownify(content)}</div>
                        {actions && (
                            <div className="block-buttons">
                                <CtaButtons actions={actions} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        let nodo = document.querySelectorAll('.featureCustom_space-value')
        let arrayNodo = [...nodo]
        arrayNodo.forEach((e, index) => {
            e.firstChild.textContent = json[index].valor
        })
    }


    render() {
        const section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');
        const background = _.get(section, 'background');
        const title = _.get(section, 'title');
        const subtitle = _.get(section, 'subtitle');
        const features = _.get(section, 'features');

        return (
            <section id={sectionId} className={`block features-block bg-${background} outer`}>
                <div className="block-header inner-small">
                    {title && <h2 className="block-title">{title}</h2>}
                    {subtitle && <p className="block-subtitle">{htmlToReact(subtitle)}</p>}
                </div>
                {features && <div className="inner">{_.map(features, (feature, index) => this.renderFeature(feature, index))}</div>}
            </section>
        );
    }
}
