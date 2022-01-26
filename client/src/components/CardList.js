
import Card from './Card';

const CardList = ({contacts, deleteContact, error}) => {

    if(error) return <h2>Error hai Bhai...<blockquote>{error.message}</blockquote></h2>
    else
        return (
                <div className="d-flex flex-sm-column col-md-6 mx-auto justify-content-center p-5">
                    {contacts.map(card => (
                        <Card key={card.id} {...card} deleteContact={deleteContact} />
                    ))}
                </div>
            
            
        )
}

export default CardList;