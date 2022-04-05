export default function CharacterSummary({ characterData }) {
  const characterName = characterData?.character.name || '';
  const characterClass = characterData?.character.class || '';
  const characterRace = characterData?.character.race || '';

  const data = {
    classes: [
      '- select -',
      'Envoy',
      'Mechanic',
      'Mystic',
      'Operative',
      'Solarian',
      'Soldier',
      'Technomancer',
    ],
    levels: [
      '-',
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
    ],
    races: [
      '- select -',
      'Android',
      'Human',
      'Kasatha',
      'Lashunta (Damaya)',
      'Lashunta (Korasha)',
      'Shirren',
      'Vesk',
      'Ysoki',
    ],
    themes: [
      '- select -',
      'Ace Pilot',
      'Bounty Hunter',
      'Icon',
      'Mercenary',
      'Outlaw',
      'Priest',
      'Scholar',
      'Spacefarer',
      'Xenoseeker',
      'Themeless',
      'Custom',
    ],
    sizes: [
      '- select -',
      'Fine',
      'Diminutive',
      'Tiny',
      'Small',
      'Medium',
      'Large',
      'Huge',
      'Gargantuan',
      'Colossal',
    ],
    alignments: [
      '- select -',
      'Lawful Good',
      'Neutral Good',
      'Chaotic Good',
      'Lawful Neutral',
      'Neutral',
      'Chaotic Neutral',
      'Lawful Evil',
      'Neutral Evil',
      'Chaotic Evil',
    ],
  };

  return (
    <>
      <h2>Character Summary</h2>
      <section className='flex'>
        <div className='flex flex-wrap'>
          <input
            type='text'
            required
            id=''
            label='Character Name'
            defaultValue={characterName}
          />

          <label className='cs-label' for='class'>
            Class
            <select id='class' defaultValue={characterClass}>
              {data.classes.map(clas => (
                <option key={clas}>{clas}</option>
              ))}
            </select>
          </label>

          <label className='cs-label' for='level'>
            Level
            <select id='level' defaultValue=''>
              {data.levels.map(level => (
                <option key={level}>{level}</option>
              ))}
            </select>
          </label>

          <label className='cs-label' for='race'>
            Race
            <select id='race' defaultValue={characterRace}>
              {data.races.map(race => (
                <option key={race}>{race}</option>
              ))}
            </select>
          </label>

          <label className='cs-label' for='theme'>
            Theme
            <select id='theme' defaultValue=''>
              {data.themes.map(theme => (
                <option key={theme}>{theme}</option>
              ))}
            </select>
          </label>

          <label className='cs-label' for='size'>
            Size
            <select id='size' defaultValue=''>
              {data.sizes.map(size => (
                <option key={size}>{size}</option>
              ))}
            </select>
          </label>

          <label className='cs-label' for='speed'>
            Speed
            <input type='text' id='speed' defaultValue='' />
          </label>

          <label className='cs-label' for='gender'>
            Gender
            <input type='text' id='gender' defaultValue='' />
          </label>

          <label className='cs-label' for='home-world'>
            Home World
            <input type='text' id='home-world' defaultValue='' />
          </label>

          <label className='cs-label' for='alignment'>
            Alignment
            <select id='alignment' defaultValue=''>
              {data.alignments.map(alignment => (
                <option key={alignment}>{alignment}</option>
              ))}
            </select>
          </label>

          <label className='cs-label' for='deity'>
            Deity
            <input type='text' id='deity' defaultValue='' />
          </label>

          <label className='cs-label' for='player'>
            Player
            <input type='text' id='player' defaultValue='' />
          </label>
        </div>

        <div className='character-section character-description flex-grow'>
          <label className='cs-label' for='description'>
            Description
            <textarea id='description' defaultValue='' />
          </label>
        </div>
      </section>
    </>
  );
}
