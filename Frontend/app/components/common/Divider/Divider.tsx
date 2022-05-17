import styled from 'styled-components/native';

const VSeparator = styled.View<{ size: string }>`
  height: ${({ size }) => GapSize[size]};
`;

const HSeparator = styled.View<{ size: string }>`
  width: ${({ size }) => GapSize[size]};
`;

const GapSize: Record<string, string> = {
  small: '8px',
  default: '16px',
  large: '32px',
};

interface DividerProps {
  size?: 'small' | 'default' | 'double';
  orientation?: 'horizontal' | 'vertical';
}

const Divider = ({ size = 'default', orientation }: DividerProps) => {
  // return <Separator />;
  return orientation === 'horizontal' ? <HSeparator size={size} /> : <VSeparator size={size} />;
};

export default Divider;
