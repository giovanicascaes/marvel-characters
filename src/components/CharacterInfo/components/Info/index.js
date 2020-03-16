import React, { useState, useEffect, useCallback } from "react";
import { Wrapper, StyledCover as Cover } from "./styles";
import View from "./components/View";
import Edit from "./components/Edit";

export default function Info({
  isLoading,
  isEditing,
  imageUrl,
  id,
  name,
  description
}) {
  const [character, setCharacter] = useState({
    id,
    name,
    description
  });

  const updateCharacter = useCallback(
    () =>
      setCharacter({
        id,
        name,
        description
      }),
    [description, id, name]
  );

  useEffect(() => {
    updateCharacter();
  }, [id, name, description, updateCharacter]);

  return (
    <Wrapper>
      <Cover imageUrl={imageUrl} isLoading={isLoading} name={name} />
      {isEditing ? (
        <Edit {...character} imageUrl={imageUrl} />
      ) : (
        <View {...character} isLoading={isLoading} />
      )}
    </Wrapper>
  );
}
