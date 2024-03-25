import Card from '../Card/Card';
import './Endeavour.css';


const Endeavour = (props: {
  name: string,
  type: string,
  content: string,
  source: string,
}) => {
  return (
    <Card title={props.name} type={props.type} source={props.source} size={'large'}>
      <div className='content' dangerouslySetInnerHTML={{ __html: props.content }}></div>
    </Card>
  );
};

export default Endeavour;