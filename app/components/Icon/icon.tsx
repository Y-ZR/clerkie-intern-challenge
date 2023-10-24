import Image from 'next/image';
import { FC } from 'react';

// Define props interface for the Icon component
interface IconProps {
  src: string;      // Source for the image
  alt: string;      // Alt text for the image
  dimensions: number; // Dimensions for the image (width and height)
}

// Create a functional component named Icon that accepts props of type IconProps
const Icon: FC<IconProps> = ({ src, alt, dimensions }) => {
  return (
    // Render an Image component with properties provided in the props
    <Image
      src={src}        // Image source
      alt={alt}        // Alt text for the image
      width={dimensions} // Width of the image
      height={dimensions} // Height of the image
      style={{ marginLeft: '10px', marginRight: '10px' }} // Inline style for the image
    />
  );
}

export default Icon;