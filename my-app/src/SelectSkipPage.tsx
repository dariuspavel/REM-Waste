import React, { useState } from 'react';
import { type SkipItem } from './API';
import { getSkipImage } from './SkipImages';
import '../src/CSS/SelectSkip.css';

type Props = {
  skips: SkipItem[];
};

const SelectSkip: React.FC<Props> = ({ skips }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="skip-container">
      {skips.map((skip) => {
        const skipImage = getSkipImage(skip.size);
        const isSelected = skip.id === selectedId;

        return (
          <div
            key={skip.id}
            className={`skip-card${isSelected ? ' selected' : ''}`}
            onClick={() => setSelectedId(skip.id)}
          >
            <div className="skip-image">
              <img src={skipImage} alt={`${skip.size} Yard Skip`} />
            </div>

            <div className="skip-body">
              <h3 className="skip-title">{skip.size} Yard Skip</h3>
              <p className="skip-period">{skip.hire_period_days} day hire</p>
              <p className="skip-price">£{skip.price_before_vat}</p>
              {skip.allows_heavy_waste && (
                <p className="skip-ok">Heavy waste allowed</p>
              )}
              {!skip.allowed_on_road && (
                <p className="skip-warning">Not allowed on road</p>
              )}
              {skip.forbidden && (
                <p className="skip-alert">Forbidden</p>
              )}
            </div>

            <button
              className="select-button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedId(skip.id);
              }}
            >
              {isSelected ? 'Selected' : 'Select This Skip'}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SelectSkip;
