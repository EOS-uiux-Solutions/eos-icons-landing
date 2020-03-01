import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = props => {
  const { children } = props;
  const elRef = useRef(null);
  if (!elRef.current) {
    const div = document.createElement('div');
    elRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal');
    modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;

export const ModalComponent = props => {
  const { children, cancelText, okText, onCancel, onOk } = props;

  return (
    // <Modal>
    <div className="modal">
      <div className="modal-content">
        <div className="flex flex-row" style={{ padding: '20px' }}>
          {children}
        </div>
        <div className="flex flex-row">
          <div
            className="flex-content"
            align="center"
            style={{
              backgroundColor: '#B8BECE',
              borderRadius: '0px 0px 0px 7px',
              padding: '16px',
              color: 'white',
              fontWeight: 'bold'
            }}
            onClick={onCancel}
          >
            {cancelText ? cancelText : 'Cancel'}
          </div>
          <div
            className="flex-content"
            align="center"
            style={{
              backgroundColor: '#EB796F',
              borderRadius: '0px 0px 7px 0px',
              padding: '16px',
              color: 'white',
              fontWeight: 'bold'
            }}
            onClick={onOk}
          >
            {okText ? okText : 'Accept'}
          </div>
        </div>
      </div>
    </div>
    // </Modal>
  );
};
