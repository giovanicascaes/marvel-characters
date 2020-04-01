import styled from "styled-components";
import { Card } from "antd";

export const StyledCard = styled(Card)`
  object-fit: cover;

  div.ant-card-body {
    height: 100%;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
