import styled, { keyframes, css } from "styled-components";

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    display: none;
  }
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const BaseImg = styled.img`
  display: block;
  object-fit: cover;
  ${props =>
    props.isHidden &&
    css`
      animation: 0.3s ${fadeOut} ease-out;
      animation-fill-mode: forwards;
    `};
`;

export const ActualImg = styled.img`
  visibility: hidden;
  position: absolute;
  ${props =>
    props.isShown &&
    css`
      animation: 0.3s ${fadeIn} ease-out;
      top: 0;
      z-index: 1;
      object-fit: cover;
      display: block;
      visibility: visible;
    `};
`;

export const ImgBorder = styled.div`
  position: absolute;
  top: 0;
  z-index: 2;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;
