import { useParams } from 'react-router-dom';

export default function CharacterSheet() {
  const { characterId } = useParams();

  console.log(characterId);
  return (
    <>
      <h1>Character Sheet</h1>
    </>
  );
}
