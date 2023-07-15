import React from 'react';

function Display({ expression }) {
  return (
    <div className="Display">
      <input className='input-Display' type="text" value={expression} readOnly />
    </div>
  );
}

export default Display;
