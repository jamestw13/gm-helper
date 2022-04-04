import { useState } from 'react';

import { Link } from 'react-router-dom';

export default function CharacterAccordion({ characters }) {
  return (
    <section>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button>Add Character</button>
      </div>
      {characters.map((character, index) => (
        <div key={index}>
          <div>
            <div aria-controls={`${index}bh-content`} id={`${index}bh-header`}>
              <h4>{`${character.name}`}</h4>
              <h5>
                {`Level ${character.level} ${character.race} ${character.class}`}
              </h5>
            </div>
            <div>
              <Link to={`/character/${character._id}`}>
                Open Character Sheet
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
