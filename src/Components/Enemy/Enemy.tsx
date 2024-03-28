import Card from '../Card/Card';
import './Enemy.css';

const Enemy = (props: {
  name: string,
  type: string,
  description: string,
  stats: any[],
  traits: string[],
  optional: string[];
}) => {
  const stat_list = ['M', 'WS', 'BS', 'S', 'T', 'I', 'Ag', 'Dex', 'Int', 'WP', 'Fel', 'W'];

  return (
    <Card title={props.name} type={props.type} source={'WFRPE 4E, p.245'} size={'small'}>
      <div className="enemy">
        <div className="description">{props.description}</div>
        <div className="stats">
          <table>
            <tr>
              {stat_list.map((stat) => <th>{stat}</th>)}
            </tr>
            <tr>
              {props.stats.map((stat) => <td>{stat || '-'}</td>)}
            </tr>
          </table>
        </div>
        <div className="traits">
          <span className="label">Traits: </span>{props.traits.map((trait) => <span className="trait">{trait}</span>)}
        </div>
        <div className="traits">
          <span className="label">Optional: </span>{props.optional.map((optional) => <span className="trait">{optional}</span>)}
        </div>
      </div>
    </Card>
  );
};

export default Enemy;