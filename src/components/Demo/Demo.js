import React from 'react';
import Switch from '../Switch/Switch';

const Demo = () => {
  return (
    <div className="container">
      <Switch 
        isActive={true}
        onClick={isActive => console.log(isActive)}
      />
    </div>
  );
};

export default Demo;
