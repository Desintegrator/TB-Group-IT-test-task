import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Switch from '../Switch/Switch';
import Field from '../Field/Field';
import Slider from '../Slider/Slider';
import './Form.css';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state={};
        this.state.additionalFields=false;
    }

    render() {
        const {
            title,
        } = this.props;

        return (
            <form className="form">
                <h1 className="form__title">{title}</h1>
                <Field title="Поле 1">
                    <Switch />
                </Field>
                <Field title="Дополнительные поля">
                    <Switch onClick={isActive => this.setState({ additionalFields: isActive })} />
                </Field>
                {this.state.additionalFields ?
                    <Field title="Дополнительное поле">
                        <Switch />
                    </Field> : null}
            </form>
        );
    }
};

Form.propTypes = {
    title: PropTypes.string.isRequired,
}
