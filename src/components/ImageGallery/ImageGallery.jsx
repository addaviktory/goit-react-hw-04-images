import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  ImageGalleryUl,
  ImageGalleryItemLi,
  ImageGalleryItemImage,
} from './ImageGallery.styled';
import { Loader } from '../Loader/Loader';

const ImageGallery = ({ hits, openModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    const handleImageLoaded = () => {
      setIsLoading(false);
    };
    if (currentImage) {
      setIsLoading(true);
      const image = new Image();
      image.src = currentImage;
      image.addEventListener('load', handleImageLoaded);
      return () => image.removeEventListener('load', handleImageLoaded);
    }
  }, [currentImage]);

  const handleImageClick = largeImageURL => {
    setIsLoading(true);
    setCurrentImage(largeImageURL);
    openModal(largeImageURL);
  };

  return (
    <>
      <ImageGalleryUl>
        {hits &&
          hits.map(({ id, webformatURL, largeImageURL }) => {
            return (
              <ImageGalleryItemLi
                key={id}
                onClick={() => handleImageClick(largeImageURL)}
              >
                <ImageGalleryItemImage src={webformatURL} alt={id} />
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
        <img src={currentImage} alt="large" style={{ display: 'none' }} />
      )}
    </>
  );
};

ImageGallery.propTypes = {
  hits: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
