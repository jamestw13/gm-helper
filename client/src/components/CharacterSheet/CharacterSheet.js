import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_CHARACTER } from '../../utils/queries';

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
    <>
      <h1>Character Sheet</h1>
      <section className='grid'>
        <div className='grid'>
          <input
            type='text'
            required
            id=''
            label='Character Name'
            defaultValue={characterName}
          />
          <select id='' label='Class' defaultValue={characterClass} />
          <select id='' label='Level' defaultValue='' />
          <select id='' label='Race' defaultValue='' />
          <select id='' label='Theme' defaultValue='' />
          <select id='' label='Size' defaultValue='' />
          <input id='' label='Speed' defaultValue='' />
          <input id='' label='Gender' defaultValue='' />
          <input id='' label='Home World' defaultValue='' />
          <select id='' label='Alignment' defaultValue='' />
          <input id='' label='Deity' defaultValue='' />
          <input id='' label='Player' defaultValue='' />
        </div>
        <div className='character-section character-description'>
          <input id='' label='Description' defaultValue='' />
        </div>
      </section>
      <AbilityScores />

      <Skills />
    </>
  );
}
