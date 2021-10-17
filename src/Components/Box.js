import styled from 'styled-components';
import { typography, space, color, flexbox } from 'styled-system'

export const Box = styled.div`
  ${typography};
  ${space};
  ${color};
`;

export const Flex = styled(Box)`
  display: flex;
  flex-basis: 0;
  ${flexbox};
`;