import Card from '../Card/Card';
import './Endeavour.css';

const Endeavour = (props: {
    name: string,
    content: string,
    source: string,
}) => {
    return (
        <Card title={props.name} source={props.source} size={'large'}>
            <div className='content'>{props.content}</div>
        </Card>
    )
}

export default Endeavour;