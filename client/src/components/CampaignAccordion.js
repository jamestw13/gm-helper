import { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Button,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function CharacterAccordion({ campaigns }) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button>Add Campaign</Button>
      </div>
      {campaigns.map((campaign, index) => (
        <Accordion
          key={index}
          sx={{ width: '100%' }}
          expanded={expanded === campaign._id}
          onChange={handleChange(campaign._id)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${campaign._id}bh-content`}
            id={`${campaign._id}bh-header`}
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {campaign.name}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              {`Level (campaign system)`}
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
