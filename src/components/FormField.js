import React from 'react';
import _ from 'lodash';

import { classNames } from '../utils';

export default class FormField extends React.Component {
    render() {
        const field = _.get(this.props, 'field');
        const hideLabels = _.get(this.props, 'hideLabels');
        const inputType = _.get(field, 'input_type');
        const label = _.get(field, 'label');
        const name = _.get(field, 'name');
        const defaultValue = _.get(field, 'default_value');
        const options = _.get(field, 'options');
        const required = _.get(field, 'is_required');
        const attr = {};
        const nameLabel = `${name}-label`;
        if (label) {
            attr['aria-labelledby'] = nameLabel;
        }
        if (required) {
            attr.required = true;
        }

        return (
            <React.Fragment>
                {inputType !== 'checkbox' && label && (
                    <label id={nameLabel} htmlFor={name} className={classNames({ 'screen-reader-text': hideLabels })}>
                        {label}
                    </label>
                )}
                {inputType === 'checkbox' ? (
                    <div className="form-checkbox">
                        <input id={name} type="checkbox" name={name} {...attr} />
                        {label && (
                            <label htmlFor={name} id={nameLabel}>
                                {label}
                            </label>
                        )}
                    </div>
                ) : inputType === 'select' ? (
                    <div className="form-select">
                        <select id={name} name={name} {...attr}>
                            {defaultValue && <option value="">{defaultValue}</option>}
                            {_.map(options, (option, optionIdx) => (
                                <option key={optionIdx} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                ) : inputType === 'textarea' ? (
                    <textarea id={name} name={name} rows="5" {...(defaultValue ? { placeholder: defaultValue } : null)} {...attr} />
                ) : (
                    <input id={name} type={inputType} name={name} {...(defaultValue ? { placeholder: defaultValue } : null)} {...attr} />
                )}
            </React.Fragment>
        );
    }
}
