import React from 'react';
import data from './../data.json';
import { scaleLinear } from 'd3-scale';
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
} from 'react-simple-maps';
import { Scale } from './Scale';
import { calcMinimumAndMaximum } from './../utils/calcMinimumAndMaximums';
import './../styles/components/Map.css';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const values = Object.values(data);

export function Map({ color = '#000000', dataKey = 'Population', deviation }) {
  const [min, max] = calcMinimumAndMaximum(values, dataKey, deviation);
  const colorScale = scaleLinear()
    .domain([min + 1, max])
    .range(['#ffedea', color]);
  return (
    <div className='Map'>
      <div className='Map-main'>
        <ComposableMap
          projectionConfig={{
            rotate: [-10, 0, 0],
            scale: 147,
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const countryPopulation = data[geo.properties.NAME];
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => alert(geo.properties.NAME)}
                    fill={
                      countryPopulation
                        ? colorScale(countryPopulation[dataKey])
                        : '#F5F4F6'
                    }
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
      <Scale scale={colorScale} />
    </div>
  );
}
