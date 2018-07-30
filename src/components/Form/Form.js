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
    this.state.sliderValue=10;
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
          <Switch
            onClick={isActive => this.setState({ additionalFields: isActive })}
            onText="ON"
            offText="OFF"
          />
        </Field>
        {this.state.additionalFields ?
          <Field title="Поле 3">
            <Switch />
          </Field> : null}
        <Field title="Поле 4">
          <div className="form__subtitle">Value: {this.state.sliderValue}</div>
          <Slider
            onChange={value => this.setState({ sliderValue: value })}
            defaultValue={this.state.sliderValue}
          />
        </Field>
      </form>
    );
  }
};

Form.propTypes = {
  title: PropTypes.string.isRequired,
}
