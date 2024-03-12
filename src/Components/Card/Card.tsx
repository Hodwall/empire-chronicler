import './Card.css'


const Card = (props: {
    size: string
}) => {
    return (
        <div className={`Card ${props.size}`}>
            <div>TITLE</div>
            <div>DESCRIPTION</div>

        </div>
    )
}

export default Card;