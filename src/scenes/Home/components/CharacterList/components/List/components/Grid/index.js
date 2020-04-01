import React from "react";
import Card from "scenes/Home/components/CharacterList/components/List/components/Card";
import { Wrapper } from "./styles";
import LoadMoreCard from "scenes/Home/components/CharacterList/components/List/components/LoadMoreCard";

export default function Grid({
  characters,
  isLoading,
  hasMoreToLoad,
  onLoadMore
}) {
  const cards = characters.map(({ id, name, thumbnail, imageUrl }, index) => (
    <Card
      key={index}
      id={id}
      name={name}
      imageUrl={
        thumbnail ? `${thumbnail.path}.${thumbnail.extension}` : imageUrl || ""
      }
      isLoading={isLoading && !id}
    />
  ));

  if (hasMoreToLoad) {
    cards.push(<LoadMoreCard onClick={onLoadMore} key={cards.length + 1} />);
  }

  return <Wrapper>{cards}</Wrapper>;
}
