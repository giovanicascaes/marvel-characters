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

function getAllCharacters() {
  const { [key]: characters } = window.localStorage;

  if (!characters) return [];

  return JSON.parse(characters);
}

function searchCharacters(text) {
  const { [key]: characters } = window.localStorage;

  if (!characters) return [];

  return JSON.parse(characters).filter(({ id, name, description }) =>
    [id, name, description].some(info =>
      String(info)
        .toLowerCase()
        .startsWith(text.toLowerCase())
    )
  );
}

export function mergeResultsAndStorage(results, searchText = null) {
  let storageResults;

  if (searchText) {
    storageResults = searchCharacters(searchText);

    if (!results.length) {
      return storageResults;
    }
  } else {
    storageResults = getAllCharacters();
  }

  return results.map(character => {
    const storedCharacter = storageResults.find(
      storedCharacter => storedCharacter.id === character.id
    );
    return storedCharacter ? { ...character, ...storedCharacter } : character;
  });
}

export function putUpdateCharacterInStorage(characters, characterToUpdate) {
  return characters.map(character => {
    if (character.id !== characterToUpdate.id) return character;

    return { ...character, ...characterToUpdate };
  });
}
