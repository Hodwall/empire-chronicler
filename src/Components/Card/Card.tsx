import './Card.css';


const Card = (
  props: {
    title: string,
    name_detail?: string,
    type: string,
    source: string,
    size: string,
    children: JSX.Element | JSX.Element[];
  }
) => {
  return (
    <div className={`Card ${props.size}`}>
      <div className={"title"}>
        {props.title}
        {props.name_detail && <span className="name_detail">{props.name_detail}</span>}
      </div>
      {props.children}
      <div className="info">
        <div className={"type"}>{props.type}</div>
        <div className={'source'}>{props.source}</div>
      </div>
      <div className={'divider'}></div>
    </div>
  );
};

export default Card;