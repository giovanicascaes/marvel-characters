const key = "@softplan-test/CHARACTERS";

export function saveCharacter(character) {
  const { [key]: storedCharacters } = window.localStorage;
  const characters = storedCharacters ? JSON.parse(storedCharacters) : [];
  const characterIndex = characters.findIndex(char => char.id === character.id);

  if (characterIndex !== -1) {
    characters.splice(characterIndex, 1);
  }

  let newCharactersList = [...characters, character];
  window.localStorage[key] = JSON.stringify(newCharactersList);
}

export function getCharacter(id) {
  const { [key]: characters } = window.localStorage;

  if (!characters) return null;

  return JSON.parse(characters).find(character => character.id === id);
}

export function getUpdatedCharacterList(characters) {
  return characters.map(character => {
    const savedCharacter = getCharacter(character.id);

    if (!savedCharacter) return character;

    return { ...character, ...savedCharacter };
  });
}

export function searchCharacters(text) {
  const { [key]: characters } = window.localStorage;

  if (!characters) return [];

  return JSON.parse(characters).filter(({ id, name, description }) =>
    [id, name, description].some(info => String(info).startsWith(text))
  );
}
