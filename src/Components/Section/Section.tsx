import { useState } from 'react';
import weapons_data from '../../data/weapons_data.tsx';
import './Section.css';


const Section = (props: {
  searchBar: string,
  section: string | null,
}) => {
  const [filter, setFilter] = useState<string | null>();

  let filtered_data: any = [];
  if (props.section === 'weapons') {
    filtered_data = [...weapons_data];
    if (filter) {
      filtered_data = filtered_data.filter((weapon: any) => {
        return weapon.category === filter;
      });
    }
  }

  if (props.searchBar) {
    filtered_data = filtered_data.filter((item: any) => {
      const item_name = item.name.toLowerCase();
      const search_string = props.searchBar.toLowerCase();
      return item_name.includes(search_string);
    })
  }

  const filters: any = {
    'weapons': [
      <button onClick={() => setFilter(null)}>RESET</button>,
      <button className={`${filter === 'basic' ? 'active' : ''}`} onClick={() => setFilter('basic')}>BASIC</button>,
      <button className={`${filter === 'cavalry' ? 'active' : ''}`} onClick={() => setFilter('cavalry')}>CAVALRY</button>,
      <button className={`${filter === 'fencing' ? 'active' : ''}`} onClick={() => setFilter('fencing')}>FENCING</button>,
      <button className={`${filter === 'brawling' ? 'active' : ''}`} onClick={() => setFilter('brawling')}>BRAWLING</button>,
      <button className={`${filter === 'flail' ? 'active' : ''}`} onClick={() => setFilter('flail')}>FLAIL</button>
    ],
  }

  return (
    <div className="Section">
      {
        props.section && (
          <div className="filter-bar">
            {filters[props.section].map((filter: any) => filter)}
          </div>
        )
      }
      <div className="content">
        {
          filtered_data.map((item, index) =>
            <div>{item.name}</div>

            // <Weapon
            //     key={index}
            //     name={weapon.name}
            //     price={weapon.price}
            //     encumbrance={weapon.encumbrance}
            //     availability={weapon.availability}
            //     range={weapon.range}
            //     damage={weapon.damage}
            //     traits={weapon.traits}
            // />
          )
        }
      </div>
    </div>
  );



};

export default Section;
