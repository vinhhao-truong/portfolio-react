import { useMediaQuery } from 'react-responsive';

const useResponsive = (size) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

  switch(size) {
    case 'tablet-mobile':
      return isTabletOrMobile;
    case 'big-screen':
      return isBigScreen;
    case 'desktop-laptop':
      return isDesktopOrLaptop;
    case 'portrait':
      return isPortrait;
    default:
  }
}

export default useResponsive;