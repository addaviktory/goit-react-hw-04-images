import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, MainModal } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ closeModal, largeImage }) => {

  const handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      closeModal();
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [closeModal]);

  return createPortal(
    <Overlay
      onClick={() => {
        closeModal();
      }}
    >
      <MainModal>
        <img src={largeImage} alt="your request" />
      </MainModal>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
};