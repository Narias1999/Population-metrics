import React, { useState } from 'react';
import { Map } from './components/Map';
import { Modal } from './components/Modal';
import { CountryContent } from './components/CountryContent';
import './styles/App.css';

const measurements = [
  {
    name: 'Population',
    key: 'Population',
    deviation: 2,
  },
  {
    name: 'Density',
    key: 'Density',
    deviation: 35,
  },
  {
    name: 'Land Area',
    key: 'land_area',
    deviation: 1,
  },
  {
    name: 'Median Age',
    key: 'median_age',
    deviation: 0,
  },
];

function App() {
  const [measurement, setMeasurement] = useState(measurements[0].key);
  const [deviation, setDeviation] = useState(measurements[0].deviation);
  const [modalState, setModalState] = useState(false);
  const [selecteCountry, setSelectedCountry] = useState({});

  const handleCloseModal = () => {
    setModalState(false);
  };

  const handleSelect = (e) => {
    const { value } = e.target;
    setDeviation(measurements.find((m) => m.key === value).deviation);
    setMeasurement(value);
  };

  const handleSelectCountry = (name, country) => {
    setSelectedCountry({ name, ...country });
    setModalState(true);
  };

  return (
    <div className='App'>
      <h1>
        World demographics{' '}
        <span role='img' aria-label='world icon'>
          🌎
        </span>
      </h1>
      <select value={measurement} onChange={handleSelect}>
        {measurements.map(({ name, key }) => (
          <option value={key} key={key}>
            {name}
          </option>
        ))}
      </select>
      <Map
        dataKey={measurement}
        deviation={deviation}
        onSelectCountry={handleSelectCountry}
      />
      <Modal
        isOpen={modalState}
        onClose={handleCloseModal}
        title={selecteCountry.name}
      >
        <CountryContent country={selecteCountry} />
      </Modal>
    </div>
  );
}

export default App;
