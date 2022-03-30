import { TextField, Grid } from '@mui/material';

export default function AbilityScores() {
  return (
    <section className='character-section ability-scores'>
      <h2>Ability Scores</h2>
      <Grid container spacing={2}>
        <Grid item xs={4}></Grid>
        <Grid item xs={2}>
          <p>Score</p>
        </Grid>
        <Grid item xs={2}>
          <p>Modifier</p>
        </Grid>
        <Grid item xs={2}>
          <p>Upgraded Score</p>
        </Grid>
        <Grid item xs={2}>
          <p>Upgraded Modifier</p>
        </Grid>

        <Grid item xs={4}>
          <h3>STR</h3>
        </Grid>
        <Grid item xs={2}>
          <TextField id='' label='' defaultValue='' />
        </Grid>
        <Grid item xs={2}>
          <TextField id='' label='' defaultValue='' />
        </Grid>
        <Grid item xs={2}>
          <TextField id='' label='' defaultValue='' />
        </Grid>
        <Grid item xs={2}>
          <TextField id='' label='' defaultValue='' />
        </Grid>

        <Grid item xs={4}>
          <h3>DEX</h3>
        </Grid>
        <Grid item xs={2}>
          <TextField id='' label='' defaultValue='' />
        </Grid>
        <Grid item xs={2}>
          <TextField id='' label='' defaultValue='' />
        </Grid>
        <Grid item xs={2}>
          <TextField id='' label='' defaultValue='' />
        </Grid>
        <Grid item xs={2}>
          <TextField id='' label='' defaultValue='' />
        </Grid>

        <Grid item xs={4}>
          <h3>CON</h3>
        </Grid>
        <Grid item xs={2}>
          <TextField id='' label='' defaultValue='' />
        </Grid>
        <Grid item xs={2}>
          <TextField id='' label='' defaultValue='' />
        </Grid>
        <Grid item xs={2}>
          <TextField id='' label='' defaultValue='' />
        </Grid>
        <Grid item xs={2}>
          <TextField id='' label='' defaultValue='' />
        </Grid>

        <Grid item xs={4}>
          <h3>INT</h3>
        </Grid>
        <Grid item xs={2}>
          <TextField id='' label='' defaultValue='' />
        </Grid>
        <Grid item xs={2}>
          <TextField id='' label='' defaultValue='' />
        </Grid>
        <Grid item xs={2}>
          <TextField id='' label='' defaultValue='' />
        </Grid>
        <Grid item xs={2}>
          <TextField id='' label='' defaultValue='' />
        </Grid>

        <Grid item xs={4}>
          <h3>WIS</h3>
        </Grid>
        <Grid item xs={2}>
          <TextField id='' label='' defaultValue='' />
        </Grid>
        <Grid item xs={2}>
          <TextField id='' label='' defaultValue='' />
        </Grid>
        <Grid item xs={2}>
          <TextField id='' label='' defaultValue='' />
        </Grid>
        <Grid item xs={2}>
          <TextField id='' label='' defaultValue='' />
        </Grid>

        <Grid item xs={4}>
          <h3>CHA</h3>
        </Grid>
        <Grid item xs={2}>
          <TextField id='' label='' defaultValue='' />
        </Grid>
        <Grid item xs={2}>
          <TextField id='' label='' defaultValue='' />
        </Grid>
        <Grid item xs={2}>
          <TextField id='' label='' defaultValue='' />
        </Grid>
        <Grid item xs={2}>
          <TextField id='' label='' defaultValue='' />
        </Grid>
        {/* </div> */}
      </Grid>
    </section>
  );
}
