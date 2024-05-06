import Card from '../Card/Card';

const Skill = (props: {
  name: string,
  name_detail?: string,
  category: string,
  type: string,
  content: string,
  source: string,
}) => {
  return (
    <Card title={props.name} name_detail={props.name_detail} type={props.type} source={props.source} size={'large'}>
      <div className='content' dangerouslySetInnerHTML={{ __html: props.content }}></div>
    </Card>
  );
};

export default Skill;