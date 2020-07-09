import React from 'react';
import './../styles/components/Scale.css';

export function Scale({ scale, min, max }) {
  const ranges = scale.ticks(5);
  return (
    <div className='Scale'>
      {ranges.map((range, i) => (
        <div key={i} className='Scale-item'>
          <span>{range}</span>
          <div
            className='Scale-color'
            style={{ backgroundColor: scale(range) }}
          ></div>
        </div>
      ))}
    </div>
  );
}
