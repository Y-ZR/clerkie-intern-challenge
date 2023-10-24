import Image from 'next/image';
import React from 'react';

// Define the props interface
interface IconProps {
  title: string;
  dimensions: number;
  spaced: boolean;
}

// Create a functional component called Icon
const Icon: React.FC<IconProps> = ({ title, dimensions, spaced }) => {
  // Construct the JSX for the icon
  return (
    <Image
      src={`/${title}.svg`}
      alt={title}
      width={dimensions}
      height={dimensions}
      style={spaced ? { marginLeft: '10px', marginRight: '10px' } : {}}
    />
  );
};

export default Icon;