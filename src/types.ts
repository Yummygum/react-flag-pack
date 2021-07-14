import * as React from 'react'

export interface Props {
  code: string;
  size?: string;
  gradient?: 'top-down' | 'real-circular' | 'real-linear';
  hasBorder?: boolean;
  hasDropShadow?: boolean;
  hasBorderRadius?: boolean;
  className?: string;
}

declare class Flag extends React.Component<Props, void> {}
export default Flag
