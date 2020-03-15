import React from "react";
import { Wrapper, Title, SubTitle } from "./styles";

export default function Message({
  title = "Nothing here :(",
  subtitle = "No records found"
}) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Wrapper>
  );
}
