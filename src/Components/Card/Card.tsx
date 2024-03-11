import './Card.css'


const Card = (props: {
    size: string
}) => {
    return (
        <div className={`Card ${props.size}`}>CARD</div>
    )
}

export default Card;