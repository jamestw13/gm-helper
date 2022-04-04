import { useEffect, useState } from 'react';

export default function CharacterAccordion({ campaigns }) {
  const [openCampaigns, setOpenCampaigns] = useState([]);

  return (
    <section>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3>Campaigns</h3>
        <button>Add Campaign</button>
      </div>
      {campaigns.map((campaign, index) => (
        <div
          className='campaign-accordion'
          // expanded={expanded === campaign._id}
          key={index}
        >
          <div className='summary'>
            <h4>{campaign.name}</h4>
            <h5>{`Level (campaign system)`}</h5>
          </div>
          <div className='details' hidden>
            <p>More Character Info</p>
          </div>
        </div>
      ))}
    </section>
  );
}
