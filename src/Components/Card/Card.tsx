import './Card.css';


const Card = (
  props: {
    title: string,
    source: string,
    size: string,
    children: JSX.Element | JSX.Element[];
  }
) => {
  return (
    <div className={`Card ${props.size}`}>
      <div className={"title"}>{props.title}</div>
      {props.children}
      <div className={'source'}>{props.source}</div>
      <div className={'divider'}></div>
    </div>
  );
};

export default Card;