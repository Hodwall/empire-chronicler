import { useState, useEffect } from 'react';
import Weapon from '../Weapon/Weapon.tsx';
import Endeavour from '../Endeavour/Endeavour.tsx';
import weapons_data from '../../data/weapons_data.tsx';
import endeavours_data from '../../data/endeavours_data.tsx';
import enemy_data from '../../data/enemy_data.tsx';
import skills_data from '../../data/skills_data.tsx';
import Masonry from '@mui/lab/Masonry';
import './Section.css';
import qualities_and_flaws_data from '../../data/qualities_and_flaws_data.tsx';
import Quality from '../Quality/Quality.tsx';
import Enemy from '../Enemy/Enemy.tsx';
import Skill from '../Skill/Skill.tsx';


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
    case 'endeavours':
      filtered_data = [...endeavours_data];
      break;
    case 'qualities-and-flaws':
      filtered_data = [...qualities_and_flaws_data];
      break;
    case 'enemies':
      filtered_data = [...enemy_data];
      break;
    case 'skills':
      filtered_data = [...skills_data];
      break;
    default:
      filtered_data = [...weapons_data, ...endeavours_data, ...qualities_and_flaws_data, ...enemy_data];
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

  // Sort the data alphabetically
  filtered_data.sort((a: any, b: any) => a.name.localeCompare(b.name));

  // Set of filters for each 'page'. Filter uses an object with field parameter so we can configure different filters targetting different kinds of items.
  const filters: any = {
    'weapons': [
      <button key={'w1'} className={`${filter && filter.value === 'basic' ? 'active' : ''}`} onClick={() => setFilter({ field: 'category', value: 'basic' })}>BASIC</button>,
      <button key={'w2'} className={`${filter && filter.value === 'cavalry' ? 'active' : ''}`} onClick={() => setFilter({ field: 'category', value: 'cavalry' })}>CAVALRY</button>,
      <button key={'w3'} className={`${filter && filter.value === 'fencing' ? 'active' : ''}`} onClick={() => setFilter({ field: 'category', value: 'fencing' })}>FENCING</button>,
      <button key={'w4'} className={`${filter && filter.value === 'brawling' ? 'active' : ''}`} onClick={() => setFilter({ field: 'category', value: 'brawling' })}>BRAWLING</button>,
      <button key={'w5'} className={`${filter && filter.value === 'flail' ? 'active' : ''}`} onClick={() => setFilter({ field: 'category', value: 'flail' })}>FLAIL</button>
    ],
    'endeavours': [
      <button key={'e1'} className={`${filter && filter.value === 'common' ? 'active' : ''}`} onClick={() => setFilter({ field: 'category', value: 'common' })}>COMMON ENDEAVOURS</button>,
      <button key={'e2'} className={`${filter && filter.value === 'class' ? 'active' : ''}`} onClick={() => setFilter({ field: 'category', value: 'class' })}>CLASS ENDEAVOURS</button>
    ],
    'qualities-and-flaws': [
      <button key={'e1'} className={`${filter && filter.value === 'item-quality' ? 'active' : ''}`} onClick={() => setFilter({ field: 'category', value: 'item-quality' })}>ITEM QUALITIES</button>,
      <button key={'e2'} className={`${filter && filter.value === 'item-flaw' ? 'active' : ''}`} onClick={() => setFilter({ field: 'category', value: 'item-flaw' })}>ITEM FLAWS</button>
    ]
  };

  return (
    <div className="Section">
      {
        (props.section && filters[props.section]) && (
          <div className="filter-bar">
            <button className="reset-btn" onClick={() => setFilter(null)}>RESET</button>
            {
              filters[props.section].map((filter: any) => filter)
            }
          </div>
        )
      }
      <div className="content">
        <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }} spacing={1} sx={{ margin: 0 }}>
          {
            filtered_data.map((item: any, index: number) => {
              // We use a different react component based on item.type
              switch (item.type) {
                case 'weapon':
                  return (
                    <Weapon
                      key={index}
                      name={item.name}
                      type={item.type}
                      category={item.category}
                      price={item.price}
                      encumbrance={item.encumbrance}
                      availability={item.availability}
                      range={item.range}
                      damage={item.damage}
                      traits={item.traits}
                    />
                  );
                case 'endeavour':
                  return (
                    <Endeavour
                      key={index}
                      name={item.name}
                      type={item.type}
                      content={item.content}
                      source={item.source}
                    />
                  );
                case 'quality':
                case 'flaw':
                  return (
                    <Quality
                      key={index}
                      name={item.name}
                      type={item.category}
                      category={item.category}
                      content={item.content}
                      source={item.source}
                    />
                  );
                case 'enemy':
                  return (
                    <Enemy
                      key={index}
                      name={item.name}
                      type={item.type}
                      description={item.description}
                      stats={item.stats}
                      traits={item.traits}
                      optional={item.optional}
                    />
                  );
                case 'skill':
                  return (
                    <Skill
                      key={index}
                      name={item.name}
                      name_detail={item.name_detail}
                      type={item.type}
                      content={item.content}
                      source={item.source}
                    />
                  );
                default:
                  return <div>{item.name}</div>;
              }
            })
          }
        </Masonry>
      </div>
    </div >
  );
};

export default Section;
