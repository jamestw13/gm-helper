import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_CHARACTER } from '../../utils/queries';

import { Grid, TextField } from '@mui/material';
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
      <section className='character-summary'>
        <div>
          <TextField
            required
            id=''
            label='Character Name'
            defaultValue={characterName}
          />
          <TextField select id='' label='Class' defaultValue={characterClass} />
          <TextField select id='' label='Level' defaultValue='' />
          <TextField select id='' label='Race' defaultValue='' />
          <TextField select id='' label='Theme' defaultValue='' />
          <TextField select id='' label='Size' defaultValue='' />
          <TextField id='' label='Speed' defaultValue='' />
          <TextField id='' label='Gender' defaultValue='' />
          <TextField id='' label='Home World' defaultValue='' />
          <TextField select id='' label='Alignment' defaultValue='' />
          <TextField id='' label='Deity' defaultValue='' />
          <TextField id='' label='Player' defaultValue='' />
        </div>
        <div className='character-section character-description'>
          <TextField
            id=''
            multiline
            minRows={4}
            label='Description'
            defaultValue=''
          />
        </div>
      </section>
      <AbilityScores />

      <Skills />
    </>
  );
}
