import { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Button,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function CharacterAccordion({ characters }) {
  console.log(characters);
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3>Your Characters</h3>
        <Button>Add Character</Button>
      </div>
      {characters.map((character, index) => (
        <Accordion
          sx={{ width: '100%' }}
          expanded={expanded === index}
          onChange={handleChange(index)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${index}bh-content`}
            id={`${index}bh-header`}
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {character.name}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              {`Level ${character.level} ${character.race} ${character.class}`}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>More Character Info</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </section>
  );
}
