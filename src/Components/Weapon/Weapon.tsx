import './Weapon.css';
import { GiTwoCoins } from 'react-icons/gi';
import { FaWeightHanging } from 'react-icons/fa6';

const Weapon = (props: {
    name: string,
    price: string,
    encumbrance: string,
    availability: string,
    range: string,
    damage: string,
    traits: string[]
}) => {
    return (
        <div className="Weapon">
            <div className="name">{props.name}</div>
            <div className="top-stats">
                <div className="Damage">{props.damage}</div>
                <div className="range">{props.range}</div>
            </div>
            <div className="traits">{props.traits}</div>
            <div className="bottom-stats">
                <div className="availability">{props.availability}</div>
                <div className="encumbrance">
                    <FaWeightHanging />{props.encumbrance}</div>
                <div className="price">
                    <GiTwoCoins />{props.price}</div>
            </div>
        </div>
    )
}

export default Weapon;