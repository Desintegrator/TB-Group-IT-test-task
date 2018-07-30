import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Slider.css';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.state.isHold = false;
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onHandleMove = this.onHandleMove.bind(this);
  }

  getNewValue() {
    return 0;
  }

  onHandleMove(e) {
    const {
      slider,
      handle,
      track,
    } = this;

    const {
      onChange,
    } = this.props;

    const coordX = e.clientX ? e.clientX : e.touches[0].clientX ? e.touches[0].clientX : 0;
    const sliderRect = slider.getBoundingClientRect();
    const sliderLeft = sliderRect.left;
    const sliderRight = sliderRect.right;
    const sliderWidth = sliderRect.width;

    let deltaX = coordX - sliderLeft;
    deltaX = deltaX < 0 ? 0 : deltaX > sliderWidth ? sliderWidth : deltaX;

    const newValue = parseInt(deltaX * 100 / sliderWidth, 10);
    handle.style.left = `${newValue}%`;
    track.style.width = `${newValue}%`;
    this.setState({ value: newValue });

    onChange && onChange(newValue);
  }

  onMouseUp() {
    window.removeEventListener('mouseup', this.onMouseUp);
    window.removeEventListener('mousemove', this.onHandleMove);
    this.setState({ isHold: false });
  }

  onMouseDown() {
    window.addEventListener('mouseup', this.onMouseUp);
    window.addEventListener('mousemove', this.onHandleMove);
    this.setState({ isHold: true });
  }

  onTouchEnd() {
    window.removeEventListener('touchend', this.onTouchEnd);
    window.removeEventListener('touchmove', this.onHandleMove);
    this.setState({ isHold: false });
  }

  onTouchStart() {
    window.addEventListener('touchend', this.onTouchEnd);
    window.addEventListener('touchmove', this.onHandleMove);
    this.setState({ isHold: true });
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.onMouseUp);
    window.removeEventListener('touchend', this.onTouchEnd);
    window.removeEventListener('mousemove', this.onHandleMove);
    window.removeEventListener('touchmove', this.onHandleMove);
  }

  render() {
    return (
      <div
        className="slider"
        onMouseDown={this.onMouseDown}
        onTouchStart={this.onTouchStart}
        ref={slider => this.slider = slider}
      >
        <div className="slider__rail"></div>
        <div
          className="slider__track"
          ref={track => this.track = track}  
        ></div>
        <div
          className="slider__handle"
          ref={handle => this.handle = handle}  
        ></div>
      </div>
    );
  }
}

Slider.propTypes = {
  defaultValue: PropTypes.number,
  onChange: PropTypes.func,
}

Slider.defaultProps = {
  defaultValue: 0,
}
