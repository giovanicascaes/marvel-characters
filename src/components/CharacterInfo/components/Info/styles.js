import styled, { css } from "styled-components";
import Cover from "components/Cover";

const COVER_HEIGHT = 440;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

export const StyledCover = styled(Cover).attrs({
  cardHeight: COVER_HEIGHT
})`
  border-radius: 15px;
  ${props =>
    !props.isLoading &&
    css`
      box-shadow: 0px 10px 30px -10px rgba(0, 0, 0, 0.5);
    `};
  width: 350px;
  height: ${COVER_HEIGHT}px;
  margin-bottom: 80px;
`;
