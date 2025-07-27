import React from 'react';
import backdrop from './assets/backdrop.png';

const BackdropPage = () => {
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <img
        src={backdrop}
        alt="Backdrop"
        className="w-full h-full object-fill absolute top-0 left-0"
      />
      </div>
  );
};

export default BackdropPage;
