import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Field.css';

export default class Field extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const {
            title,
            children,
        } = this.props;

        return (
            <div className="field">
                <div className="field__title">{title}</div>
                {children}
            </div>
        );
    }
}
    
Field.propTypes = {
    title: PropTypes.string.isRequired,
}
