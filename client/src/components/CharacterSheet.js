import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_CHARACTER } from '../utils/queries';

export default function CharacterSheet() {
  const { characterId } = useParams();

  const { data: characterData } = useQuery(QUERY_CHARACTER, {
    variables: { _id: characterId },
  });
  const characterName = characterData?.character.name || 'waiting';
  const characterClass = characterData?.character.class || 'waiting';

  return (
    <>
      <h1>Character Sheet</h1>
      <h2>{characterName}</h2>
      <h2>{characterClass}</h2>
    </>
  );
}
