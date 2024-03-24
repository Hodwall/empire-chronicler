import Card from '../Card/Card';
import { GiTwoCoins } from 'react-icons/gi';
import { FaWeightHanging } from 'react-icons/fa6';
import './Weapon.css';

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
        <Card title={props.name} source={'WFRPE 4E, p.245'} size={'small'}>
            <div className="weapon">
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
        </Card>
    )
}

export default Weapon;