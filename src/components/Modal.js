import React from 'react';
import './../styles/components/Modal.css';

export function Modal({ isOpen, onClose, children, title }) {
  return (
    <div className={`Modal ${isOpen ? 'show' : ''}`}>
      <div className='Modal-frame'>
        <div className='Modal-header'>
          <h2>{title}</h2>
          <button
            className='Modal-closeIcon'
            onClick={onClose}
            aria-label='icon'
          >
            &times;
          </button>
        </div>
        <div className='Modal-body'>{children}</div>
      </div>
    </div>
  );
}
