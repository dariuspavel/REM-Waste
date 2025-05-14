import React from 'react';
import { type SkipItem } from './API';
import { getSkipImage } from './SkipImages';
import '../src/CSS/SelectSkip.css';

type Props = {
  skips: SkipItem[];
};

const SelectSkip: React.FC<Props> = ({ skips }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {skips.map((skip) => {
        const skipImage = getSkipImage(skip.size);

        return (
          <div
            key={skip.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              width: '220px',
            }}
          >
            <div className="skip-image">
              <img src={skipImage} alt={`${skip.size} Yard Skip`} style={{ width: '100%', borderRadius: '4px' }} />
            </div>

            <h3>{skip.size} Yard Skip</h3>
            <p>{skip.hire_period_days} day hire period</p>
            <p>£{skip.price_before_vat}</p>

            {!skip.allowed_on_road && (
              <p style={{ color: 'red', fontWeight: 'bold' }}>Not Allowed On Road</p>
            )}
            {skip.forbidden && (
              <p style={{ color: 'orange', fontWeight: 'bold' }}>Forbidden</p>
            )}
            {skip.allows_heavy_waste && (
              <p style={{ color: 'green' }}>Heavy waste allowed</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SelectSkip;
