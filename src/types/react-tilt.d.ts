declare module 'react-tilt' {
  import * as React from 'react';

  export interface TiltOptions {
    reverse?: boolean;
    max?: number;
    perspective?: number;
    scale?: number;
    speed?: number;
    transition?: boolean;
    axis?: null | 'x' | 'y';
    reset?: boolean;
    easing?: string;
    glare?: boolean;
    'max-glare'?: number;
  }

  export interface TiltProps {
    className?: string;
    style?: React.CSSProperties;
    options?: TiltOptions;
    children?: React.ReactNode;
  }

  export const Tilt: React.FC<TiltProps>;
  export default Tilt;
}
