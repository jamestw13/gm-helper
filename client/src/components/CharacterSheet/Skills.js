import { Grid, TextField } from '@mui/material';

export default function Skills() {
  return (
    <section className='character-section character-skills'>
      <div className='character-section-title-bar'>
        <h2>Skills</h2>
        <div>
          <p>Skill Ranks Per Level</p>
          <TextField></TextField>
        </div>
      </div>
      <Grid container spacing={1}></Grid>
    </section>
  );
}
