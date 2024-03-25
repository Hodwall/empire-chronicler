import Card from '../Card/Card';
import { GiTwoCoins } from 'react-icons/gi';
import { FaWeightHanging } from 'react-icons/fa6';
import './Weapon.css';

const Weapon = (props: {
  name: string,
  type: string,
  price: string,
  encumbrance: string,
  availability: string,
  range: string,
  damage: string,
  traits: string[];
}) => {
  return (
    <Card title={props.name} type={props.type} source={'WFRPE 4E, p.245'} size={'small'}>
      <div className="weapon">
        <div className="top-stats">
          <div className="damage"><span className="label">Damage:</span>{props.damage}</div>
          <div className="range"><span className="label">Range:</span>{props.range}</div>
        </div>
        <div className="traits">
          <span className="label">Qualities and Flaws:</span>
          {
            props.traits.map((t) => <span className="trait">{t}</span>)
          }
        </div>
        <div className="category"><span className="label">Category:</span>Melee</div>
        <div className="availability"><span className="label">Availability:</span>{props.availability}</div>
        <div className="bottom-stats">
          <div className="encumbrance">
            <FaWeightHanging />{props.encumbrance}</div>
          <div className="price">
            <GiTwoCoins />{props.price}</div>
        </div>
      </div>
    </Card>
  );
};

export default Weapon;