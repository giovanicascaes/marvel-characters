import React from "react";
import { Wrapper, Title, SubTitle } from "./styles";

export default function Empty({
  title = "Nada aqui :(",
  subtitle = "Nenhum registro encontrado"
}) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Wrapper>
  );
}
