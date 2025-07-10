export const TextureBG = () => {
  return (
    <svg
      className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="cloth-texture" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02"
            numOctaves="5"
            result="turbulence"
          />
          <feDiffuseLighting
            in="turbulence"
            lightingColor="#fcf3e6"
            surfaceScale="1.2"
          >
            <feDistantLight azimuth="45" elevation="60" />
          </feDiffuseLighting>
        </filter>
      </defs>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        filter="url(#cloth-texture)"
        fill="none"
      />
    </svg>
  );
};
