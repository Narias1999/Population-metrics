import React from 'react';
import './../styles/components/CountryContent.css';

const PopulationElement = ({ title, value }) => (
  <article className='populationElement'>
    <strong>{title}: </strong>
    <span>{value || 'N.A.'}</span>
  </article>
);

export function CountryContent({ country = {} }) {
  return (
    <div className='CountryContent'>
      <PopulationElement title='Population' value={country.population} />
      <PopulationElement
        title='Yearly Change'
        value={country['Yearly Change']}
      />
      <PopulationElement title='Net Change' value={country['Net Change']} />
      <PopulationElement
        title='Population Density'
        value={`${country['Density']} por km2`}
      />
      <PopulationElement title='Land Area' value={country.land_area} />
      <PopulationElement title='Migrants' value={country['Migrants']} />
      <PopulationElement
        title='Urban Population'
        value={country['Urban Pop %']}
      />
      <PopulationElement title='World Share' value={country['World Share']} />
      <PopulationElement title='Median Age' value={country.median_Age} />
    </div>
  );
}
