import styled from "styled-components";
import Cover from "components/Cover";

export const StyledCover = styled(Cover)`
  width: ${props => props.cardWidth}px;
  height: ${props => props.cardHeight}px;
  object-fit: cover;
`;
