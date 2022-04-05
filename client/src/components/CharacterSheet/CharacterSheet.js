import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_CHARACTER } from '../../utils/queries';

import CharacterSummary from './CharacterSummary';
import AbilityScores from './AbilityScores';
import Skills from './Skills';

export default function CharacterSheet() {
  const { characterId } = useParams();

  const { data: characterData } = useQuery(QUERY_CHARACTER, {
    variables: { _id: characterId },
  });
  const characterName = characterData?.character.name || '';
  const characterClass = characterData?.character.class || '';

  return (
    <div className='flow'>
      <h1>Character Sheet</h1>
      <CharacterSummary characterData={characterData} />

      <div className='grid character-stats'>
        <div className='flow'>
          <AbilityScores />

          <Skills />
        </div>
        <div className='flow'>
          <AbilityScores />

          <Skills />
        </div>
      </div>
    </div>
  );
}
