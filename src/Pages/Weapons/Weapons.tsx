import weapons_data from '../../data/weapons_data';
import Weapon from "../../Components/Weapon/Weapon";
import './Weapons.css';

const Weapons = () => {
    return (
        <div className="Weapons">
            {
                weapons_data.map((weapon) =>
                    <Weapon
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
    )
}

export default Weapons;