import { useState, useEffect } from 'react';
import Weapon from '../Weapon/Weapon.tsx';
import weapons_data from '../../data/weapons_data.tsx';
import './Section.css';


const Section = (props: {
  searchBar: string,
  section: string | null,
}) => {
  const [filter, setFilter] = useState<{ field: string, value: string; } | null>();
  let filtered_data: any = [];

  // ;D
  useEffect(() => {
    setFilter(null);
  }, [props.section]);

  // Populate filtered data with corresponding data collections.
  switch (props.section) {
    case 'weapons':
      filtered_data = [...weapons_data];
      break;
    default:
      filtered_data = [...weapons_data];
  }

  // Further filter data by active filter
  if (filter) {
    filtered_data = filtered_data.filter((item: any) => {
      return item[filter.field] === filter.value;
    });
  }

  // Finally, filter data by SearchBar string
  if (props.searchBar) {
    filtered_data = filtered_data.filter((item: any) => {
      const item_name = item.name.toLowerCase();
      const search_string = props.searchBar.toLowerCase();
      return item_name.includes(search_string);
    });
  }

  // Set of filters for each 'page'. Filter uses an object with field parameter so we can configure different filters targetting different kinds of items.
  const filters: any = {
    'weapons': [
      <button key={'w1'} className={`${filter && filter.value === 'basic' ? 'active' : ''}`} onClick={() => setFilter({ field: 'category', value: 'basic' })}>BASIC</button>,
      <button key={'w2'} className={`${filter && filter.value === 'cavalry' ? 'active' : ''}`} onClick={() => setFilter({ field: 'category', value: 'cavalry' })}>CAVALRY</button>,
      <button key={'w3'} className={`${filter && filter.value === 'fencing' ? 'active' : ''}`} onClick={() => setFilter({ field: 'category', value: 'fencing' })}>FENCING</button>,
      <button key={'w4'} className={`${filter && filter.value === 'brawling' ? 'active' : ''}`} onClick={() => setFilter({ field: 'category', value: 'brawling' })}>BRAWLING</button>,
      <button key={'w5'} className={`${filter && filter.value === 'flail' ? 'active' : ''}`} onClick={() => setFilter({ field: 'category', value: 'flail' })}>FLAIL</button>
    ],
  };

  return (
    <div className="Section">
      {
        (props.section && filters[props.section]) && (
          <div className="filter-bar">
            <button onClick={() => setFilter(null)}>RESET</button>
            {
              filters[props.section].map((filter: any) => filter)
            }
          </div>
        )
      }
      <div className="content">
        {
          filtered_data.map((item: any, index: number) => {
            // We use a different react component based on item.type
            switch (item.type) {
              case 'weapon':
                return (
                  <Weapon
                    key={index}
                    name={item.name}
                    price={item.price}
                    encumbrance={item.encumbrance}
                    availability={item.availability}
                    range={item.range}
                    damage={item.damage}
                    traits={item.traits}
                  />
                );
              default:
                return <div>{item.name}</div>;
            }
          })
        }
      </div>
    </div>
  );
};

export default Section;
