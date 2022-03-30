export default function CharacterSheet({ character }) {
  console.log(character);
  return (
    <>
      <h1>Character Sheet</h1>
      {!character ? <h2>{character}</h2> : <h2>Loading</h2>}
    </>
  );
}
