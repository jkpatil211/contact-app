
import Card from './Card';

const CardList = ({contacts, deleteContact}) => {
    return (
        <div className="container p-5">
        {contacts.map(card => (
            <Card key={card.id} {...card} deleteContact={deleteContact} />
        ))}
        </div>
    )
}

export default CardList;