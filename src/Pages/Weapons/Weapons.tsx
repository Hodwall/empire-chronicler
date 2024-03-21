import { useState } from 'react';
import weapons_data from '../../data/weapons_data';
import Weapon from "../../Components/Weapon/Weapon";
import './Weapons.css';

const Weapons = (props: {
    searchBar: string
}) => {
    const [filter, setFilter] = useState<string | null>();

    let filtered_weapons = [...weapons_data];
    if (filter) {
        filtered_weapons = filtered_weapons.filter((weapon) => {
            return weapon.category === filter;
        });
    }

    if (props.searchBar) {
        filtered_weapons = filtered_weapons.filter((weapon) => {
            const weapon_name = weapon.name.toLowerCase();
            const search_string = props.searchBar.toLowerCase();

            return weapon_name.includes(search_string);
        })
    }


    return (
        <div className="Weapons">
            <div className="filter-bar">
                <button onClick={() => setFilter(null)}>RESET</button>
                <button className={`${filter === 'basic' ? 'active' : ''}`} onClick={() => setFilter('basic')}>BASIC</button>
                <button className={`${filter === 'cavalry' ? 'active' : ''}`} onClick={() => setFilter('cavalry')}>CAVALRY</button>
                <button className={`${filter === 'fencing' ? 'active' : ''}`} onClick={() => setFilter('fencing')}>FENCING</button>
                <button className={`${filter === 'brawling' ? 'active' : ''}`} onClick={() => setFilter('brawling')}>BRAWLING</button>
                <button className={`${filter === 'flail' ? 'active' : ''}`} onClick={() => setFilter('flail')}>FLAIL</button>
            </div>
            <div className="content">
                {
                    filtered_weapons.map((weapon, index) =>
                        <Weapon
                            key={index}
                            name={weapon.name}
                            price={weapon.price}
                            encumbrance={weapon.encumbrance}
                            availability={weapon.availability}
                            range={weapon.range}
                            damage={weapon.damage}
                            traits={weapon.traits}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Weapons;