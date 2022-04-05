export default function AbilityScores() {
  return (
    <section className='character-section'>
      <h2>Ability Scores</h2>

      <div className='grid ability-scores'>
        <p></p>
        <p>Score</p>
        <p>Modifier</p>
        <p>Upgraded Score</p>
        <p>Upgraded Modifier</p>

        <h3>STR</h3>
        <input type='number' className='short-input' />
        <input type='number' className='short-input' />
        <input type='number' className='short-input' />
        <input type='number' className='short-input' />

        <h3>DEX</h3>
        <input type='number' className='short-input' />
        <input type='number' className='short-input' />
        <input type='number' className='short-input' />
        <input type='number' className='short-input' />

        <h3>CON</h3>
        <input type='number' className='short-input' />
        <input type='number' className='short-input' />
        <input type='number' className='short-input' />
        <input type='number' className='short-input' />

        <h3>INT</h3>
        <input type='number' className='short-input' />
        <input type='number' className='short-input' />
        <input type='number' className='short-input' />
        <input type='number' className='short-input' />

        <h3>WIS</h3>
        <input type='number' className='short-input' />
        <input type='number' className='short-input' />
        <input type='number' className='short-input' />
        <input type='number' className='short-input' />

        <h3>CHA</h3>
        <input type='number' className='short-input' />
        <input type='number' className='short-input' />
        <input type='number' className='short-input' />
        <input type='number' className='short-input' />
      </div>
    </section>
  );
}
