import React from 'react';

const DrawerToggleButton = ({click}) => {
  return (
    <button className='toggle-button' onClick={click}>
      <div className='toggle-button_line' />
      <div className='toggle-button_line' />
      <div className='toggle-button_line' />
    </button>
  );
};

export default DrawerToggleButton;
