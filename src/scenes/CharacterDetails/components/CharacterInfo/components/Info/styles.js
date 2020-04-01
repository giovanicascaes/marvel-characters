import styled, { css } from "styled-components";
import Cover from "components/Cover";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

export const StyledCover = styled(Cover).attrs({
  style: { height: 440 },
  withBorder: true
})`
  border-radius: 10px;
  ${props =>
    !props.isLoading &&
    css`
      box-shadow: 0px 10px 40px -10px rgba(0, 0, 0, 0.5);
    `};
  width: 350px;
  margin-bottom: 80px;
`;
