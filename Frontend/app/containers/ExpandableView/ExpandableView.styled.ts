import styled from 'styled-components/native';
import { ExapndSize } from './ExpandableView.props';

const ExpandableView = styled.View<ExapndSize>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  overflow: hidden;
`;

export default ExpandableView;
