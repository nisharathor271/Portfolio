import { useEffect } from 'react';

const ImagePreloader = ({ images = [] }) => {
  useEffect(() => {
    const preloadImages = () => {
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
        // Add to cache
        img.onload = () => {
          // Image is now cached
        };
      });
    };

    // Preload images after a short delay to not block initial render
    const timer = setTimeout(preloadImages, 100);
    return () => clearTimeout(timer);
  }, [images]);

  return null;
};

export default ImagePreloader;