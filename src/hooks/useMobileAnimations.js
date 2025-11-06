import { useState, useEffect } from 'react';

const useMobileAnimations = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check for reduced motion preference
    const checkReducedMotion = () => {
      setPrefersReducedMotion(
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      );
    };

    checkMobile();
    checkReducedMotion();

    window.addEventListener('resize', checkMobile);
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', checkReducedMotion);

    return () => {
      window.removeEventListener('resize', checkMobile);
      mediaQuery.removeEventListener('change', checkReducedMotion);
    };
  }, []);

  const getAnimationClass = (baseClass, mobileClass = null) => {
    if (prefersReducedMotion) return '';
    if (isMobile && mobileClass) return mobileClass;
    return baseClass;
  };

  const getTransitionDuration = (desktop = 'duration-500', mobile = 'duration-300') => {
    if (prefersReducedMotion) return 'duration-0';
    return isMobile ? mobile : desktop;
  };

  const getHoverEffect = (effect) => {
    if (isMobile) return '';
    return effect;
  };

  return {
    isMobile,
    prefersReducedMotion,
    getAnimationClass,
    getTransitionDuration,
    getHoverEffect
  };
};

export default useMobileAnimations;