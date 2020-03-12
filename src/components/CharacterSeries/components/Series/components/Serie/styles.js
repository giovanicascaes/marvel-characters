import styled from "styled-components";
import Cover from "components/Cover";

const COVER_WIDTH = 150;
const COVER_HEIGHT = 200;

export const StyledCover = styled(Cover).attrs({
  cardHeight: COVER_HEIGHT
})`
  border-radius: 4px;
  width: ${COVER_WIDTH}px;
  height: ${COVER_HEIGHT}px;
  margin-right: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
`;

export const InfoWrapper = styled.div`
  width: calc(100% - ${COVER_WIDTH}px);
`;
