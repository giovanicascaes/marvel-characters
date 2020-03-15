import React, { useState, useEffect, useCallback } from "react";
import { Wrapper, StyledCover as Cover } from "./styles";
import View from "./components/View";
import Edit from "./components/Edit";
import { getCharacter } from "services/storage";

export default function Info({
  isLoading,
  isEditing,
  imageUrl,
  id,
  name,
  description
}) {
  const updateCharacter = useCallback(
    () =>
      setCharacter(
        getCharacter(id) || {
          id,
          name,
          description
        }
      ),
    [description, id, name]
  );

  useEffect(() => {
    if (id) {
      updateCharacter();
    }
  }, [id, updateCharacter]);

  const [character, setCharacter] = useState({
    id,
    name,
    description
  });

  return (
    <Wrapper>
      <Cover imageUrl={imageUrl} isLoading={isLoading} name={name} />
      {isEditing ? (
        <Edit
          {...character}
          imageUrl={imageUrl}
          onEditCharacter={updateCharacter}
        />
      ) : (
        <View {...character} isLoading={isLoading} />
      )}
    </Wrapper>
  );
}
