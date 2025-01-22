import { useMemo, useState } from "react";

const breakPoints = {
  mobile: 768,
  tablet: 1024,
  desktop: 1440,
};

interface Device {
  currentScreenWidth: number;
  isMobile: boolean;
  isTablet: boolean;
  isDevice: { mobile: boolean };
}

export const useDevice = (): Device => {
  const [currentScreenWidth, setCurrentScreenWidth] = useState(
    window.innerWidth,
  );

  useMemo(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const bodyWidth = entries[0].target.clientWidth;

      setCurrentScreenWidth(bodyWidth);
    });

    resizeObserver.observe(document.body);
  }, []);

  const isDeviceMobile =
    !!navigator.userAgent.match("Android") ||
    !!navigator.userAgent.match("iPhone") ||
    !!navigator.userAgent.match("iPad");

  return {
    currentScreenWidth,
    isMobile: currentScreenWidth < breakPoints.tablet,
    isTablet: currentScreenWidth < breakPoints.desktop,
    isDevice: { mobile: isDeviceMobile },
  };
};
