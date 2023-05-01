import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, MainModal } from './Modal.styled';

export function Modal({ closeModal, largeImage }) {
  const modalRoot = document.querySelector('#modal-root');

  useEffect(() => {
    const handleEscape = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
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
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
};
