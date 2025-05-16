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
    <div className="select-skip-page">
      <div className="skip-header">
        <nav className="stepper">
          <span className="step done">
            📍<br/>
            Postcode
          </span>
          <span className="divider">————</span>
          <span className="step done">
            🗑️<br/>
            Waste Type
          </span>
          <span className="divider">————</span>
          <span className="step current">
            🚚<br/>
            Select Skip
          </span>
          <span className="divider">————</span>
          <span className="step">
            🛡️<br/>
            Permit Check
          </span>
          <span className="divider">————</span>
          <span className="step">
            📅<br/>
            Choose Date
          </span>
          <span className="divider">————</span>
          <span className="step">
            💳<br/>
            Payment
          </span>
        </nav>

        <h2 className="skip-title-main">Choose Your Skip Size</h2>
        <p className="skip-subtitle">
          Select the skip size that best suits your needs
        </p>
      </div>

      {/* ——— SKIP GRID ——— */}
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
                <div className="price-info-wrapper">
  <span className="skip-price">£{skip.price_before_vat}</span>
  <span className="info-icon">!</span>
  <div className="info-tooltip">
    <p><strong>VAT:</strong> {skip.vat}%</p>
    <p><strong>Price before VAT:</strong> £{skip.price_before_vat}</p>
    <p><strong>Transport cost:</strong> {skip.transport_cost!==null ? `£${skip.transport_cost}` : 'N/A'}</p>
    <p><strong>Per tonne cost:</strong> {skip.per_tonne_cost!==null ? `£${skip.per_tonne_cost}` : 'N/A'}</p>
  </div>
</div>

                {skip.allows_heavy_waste && (
                  <p className="skip-ok">Heavy waste allowed</p>
                )}
                {!skip.allowed_on_road && (
                  <p className="skip-warning">❗ Not allowed on road</p>
                )}
                {skip.forbidden && (
                  <p className="skip-alert">Forbidden</p>
                )}
              </div>

              <button
                className={`select-button${isSelected ? ' selected' : ''}`}
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
    </div>
  );
};

export default SelectSkip;
