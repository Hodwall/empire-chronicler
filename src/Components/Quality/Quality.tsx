import Card from '../Card/Card';

const Quality = (props: {
  name: string,
  type: string,
  category: string,
  content: string,
  source: string,
}) => {
  return (
    <Card title={props.name} type={props.type.replace('-', ' ')} source={props.source} size={'large'}>
      <div className='content' dangerouslySetInnerHTML={{ __html: props.content }}></div>
    </Card>
  );
};

export default Quality;