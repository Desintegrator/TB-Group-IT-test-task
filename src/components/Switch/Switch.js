import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Switch.css';

export default class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.state.isActive = this.props.isActive;
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const {
      onClick,
    } = this.props;

    const newState = !this.state.isActive;
    this.setState({ isActive: newState });

    onClick && onClick(newState);
  }

  render() {
    const {
      onText,
      offText,
    } = this.props;

    const switchClasses = classnames({
      switch: true,
      'switch_active': this.state.isActive,
    });

    return (
      <div
        className={switchClasses}
        onClick={this.onClick}
      >
        <div className="switch__inner">{this.state.isActive ? onText ? onText : null : offText ? offText : null}</div>
      </div>
    );
  }
}

Switch.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  onText: PropTypes.string,
  offText: PropTypes.string,
}

Switch.defaultProps = {
  isActive: false,
}