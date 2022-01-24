
import Card from './Card';

const CardList = ({contacts, deleteContact, error}) => {

    if(error) return <h2>Error hai Bhai...<blockquote>{error.message}</blockquote></h2>
    else
        return (
            <div className="container p-5">
                {contacts.map(card => (
                    <Card key={card.id} {...card} deleteContact={deleteContact} />
                ))}
            </div>
            
        )
}

export default CardList;