import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryUl, ImageGalleryItemLi, ImageGalleryItemImage } from './ImageGallery.styled';
import { Loader } from '../Loader/Loader';

export const ImageGallery = ({ hits, openModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleImageClick = (largeImageURL) => {
    setIsLoading(true);
    setCurrentImage(largeImageURL);
    openModal(largeImageURL)
  };

  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  return (
    <>
      <ImageGalleryUl>
        {hits &&
          hits.map(({ id, webformatURL, largeImageURL }) => {
            return (
              <ImageGalleryItemLi key={id} onClick={() => handleImageClick(largeImageURL)}>
                <ImageGalleryItemImage src={webformatURL} alt={id} onLoad={handleImageLoaded} />
              </ImageGalleryItemLi>
            );
          })}
      </ImageGalleryUl>
      {isLoading && (
        <div className="loader-container">
          <Loader size={300} />
        </div>
      )}
      {currentImage && (
        <img
          src={currentImage}
          alt="large"
          onLoad={() => setIsLoading(false)}
          style={{ display: 'none' }}
        />
      )}
    </>
  );
};

ImageGallery.propTypes = {
  hits: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};