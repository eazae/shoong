import styled from 'styled-components/native';
import { ExapndSize } from './ExpandableView.props';

const ExpandableView = styled.View<ExapndSize>`
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  overflow: hidden;
  padding: 10px;
`;

export default ExpandableView;
