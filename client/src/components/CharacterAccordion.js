import { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Button,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

export default function CharacterAccordion({ characters }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button>Add Character</Button>
      </div>
      {characters.map((character, index) => (
        <div key={index} style={{ display: 'flex' }}>
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
                {`${character.name}`}
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                {`Level ${character.level} ${character.race} ${character.class}`}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Link to={`/character/${character._id}`}>
                Open Character Sheet
              </Link>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </section>
  );
}
